#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
import os
import json
from flask import Flask, request, render_template, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
from configparser import ConfigParser
from familia_wrapper import TopicalWordEmbeddingsWrapper, InferenceEngineWrapper
import jieba
import jieba.analyse

app = Flask(__name__,template_folder='./static/')

CORS(app)
cfg = ConfigParser()
cfg.read('config.ini')

def allowed_file(filename):  
    return '.' in filename and filename.rsplit('.', 1)[1] in cfg.get('file','allowed_extentions')

def json_format(result):
    return json.dumps(dict(result), ensure_ascii=False)

def get_count():
    return int(cfg.get('display','count'))

def get_model_dir(category):
    return cfg.get('model','model_dir')+category

def get_emb_file(category):
    return category+cfg.get('model','emb_file')

def get_folder_dir():
    return cfg.get('file','upload_folder')

def get_lda_conf():
    return cfg.get('model','lda_conf')

def get_slda_conf():
    return cfg.get('model','slda_conf')

def save_file(file):
    if file and allowed_file(file.filename):
        f_name = secure_filename(file.filename)
        file.save(os.path.join(app.root_path, get_folder_dir(), f_name))
        return True
    else:
        return False

def read_file(file):
    f_obj = open(get_folder_dir()+file.filename)
    f_text = f_obj.read()
    f_obj.close()
    return f_text

def input_doc_str(in_type):
    if in_type == 'doc':
        f = request.files['text']
        if save_file(f):
            f_text = read_file(f)
    else:
        f_text = request.form['text'].encode('utf-8').strip()
    return f_text

@app.route('/', methods=['GET'])
def index1():
    return render_template("index.html")

@app.route('/static/', methods=['GET'])
def index():
    return render_template("index.html")



@app.route('/topic-word-all', methods=['POST'])
def topic_word_all():
    category = request.form['category']
    #topic_id = int(request.form['topic_id'])
    result = {}
    for i in range(4267):

        twe_wrapper = TopicalWordEmbeddingsWrapper(get_model_dir(category), get_emb_file(category))
        result_dict = dict(twe_wrapper.nearest_words_around_topic((i), get_count()))
        result[i] = result_dict
    return json_format(result)


@app.route('/topic-word', methods=['POST'])
def topic_word():
    category = request.form['category']
    topic_id = int(request.form['topic_id'])
    twe_wrapper = TopicalWordEmbeddingsWrapper(get_model_dir(category), get_emb_file(category))
    result = twe_wrapper.nearest_words_around_topic((topic_id), get_count())
    return json_format(result)


@app.route('/word-distance', methods=['POST'])
def word_distance():
    category = request.form['category']
    word = request.form['word'].encode('utf-8').strip()
    twe_wrapper = TopicalWordEmbeddingsWrapper(get_model_dir(category), get_emb_file(category))
    result = twe_wrapper.nearest_words(word, get_count())
    return json_format(result)


@app.route('/lda-infer', methods=['POST'])
def lda_infer():
    category = request.form['category']
    in_type = request.form['type']
    f_text = input_doc_str(in_type)
    inference_engine_wrapper = InferenceEngineWrapper(get_model_dir(category), get_lda_conf())
    seg_list = inference_engine_wrapper.tokenize(f_text)
    topic_dist = inference_engine_wrapper.lda_infer(seg_list)

    return json_format(topic_dist)


@app.route('/slda-infer', methods=['POST'])
def slda_infer():
    category = request.form['category']
    in_type = request.form['type']
    f_text = input_doc_str(in_type)
    inference_engine_wrapper = InferenceEngineWrapper(get_model_dir(category), get_slda_conf())
    seg_list = inference_engine_wrapper.tokenize(f_text)
    sentences = []
    length = len(seg_list)
    for index in range(0, length, 5):
        sentences.append(seg_list[index: index + 5])
    topic_dist = inference_engine_wrapper.slda_infer(sentences)

    return json_format(topic_dist)


@app.route('/doc-keywords', methods=['POST'])
def doc_keywords():
    category = request.form['category']
    word = request.form['word'].encode('utf-8').strip()
    in_type = request.form['type']
    f_text = input_doc_str(in_type)
    inference_engine_wrapper = InferenceEngineWrapper(get_model_dir(category), get_lda_conf())
    seg_list = inference_engine_wrapper.tokenize(f_text)
    items = inference_engine_wrapper.cal_keywords_similarity(word, ' '.join(seg_list))

    return json_format(items)


@app.route('/doc-twe-keywords', methods=['POST'])
def doc_twe_keywords():
    category = request.form['category']
    word = request.form['word'].encode('utf-8').strip()
    in_type = request.form['type']
    f_text = input_doc_str(in_type)
    inference_engine_wrapper = InferenceEngineWrapper(get_model_dir(category), get_lda_conf(), get_emb_file(category))
    seg_list = inference_engine_wrapper.tokenize(f_text)
    items = inference_engine_wrapper.cal_keywords_twe_similarity(word, ' '.join(seg_list))

    return json_format(items)


@app.route('/doc-keywords-plus', methods=['POST'])
def doc_keywords_plus():
    category = request.form['category']
    #word = request.form['word'].encode('utf-8').strip()
    in_type = request.form['type']
    f_text = input_doc_str(in_type)
    inference_engine_wrapper = InferenceEngineWrapper(get_model_dir(category), get_lda_conf())
    seg_list = inference_engine_wrapper.tokenize(f_text)
    items = {}
    for x, w in jieba.analyse.extract_tags(f_text, withWeight=True):
        result = inference_engine_wrapper.cal_keywords_similarity(x.encode('utf-8').strip(), ' '.join(seg_list))
        items.update(result)

    return json_format(items)


@app.route('/doc-twe-keywords-plus', methods=['POST'])
def doc_twe_keywords_plus():
    category = request.form['category']
    #word = request.form['word'].encode('utf-8').strip()
    in_type = request.form['type']
    f_text = input_doc_str(in_type)
    inference_engine_wrapper = InferenceEngineWrapper(get_model_dir(category), get_lda_conf(), get_emb_file(category))
    seg_list = inference_engine_wrapper.tokenize(f_text)
    items = {}
    for x, w in jieba.analyse.extract_tags(f_text, withWeight=True):
        result = inference_engine_wrapper.cal_keywords_twe_similarity(x.encode('utf-8').strip(), ' '.join(seg_list))
        items.update(result)

    return json_format(items)


@app.route('/doc-distance', methods=['POST'])
def doc_distance():
    category = request.form['category']
    in_type = request.form['type']
    if in_type == 'doc':
        f1 = request.files['text1']
        f2 = request.files['text2']
        if save_file(f1) and save_file(f2):
            f_text1 = read_file(f1)
            f_text2 = read_file(f2)
    else:
        f_text1 = request.form['text1'].encode('utf-8').strip()
        f_text2 = request.form['text2'].encode('utf-8').strip()

    inference_engine_wrapper = InferenceEngineWrapper(get_model_dir(category), get_lda_conf())
    doc1_seg = inference_engine_wrapper.tokenize(f_text1)
    doc2_seg = inference_engine_wrapper.tokenize(f_text2)
    distances = inference_engine_wrapper.cal_doc_distance(doc1_seg, doc2_seg)

    return json.dumps({"Jensen-Shannon Divergence":distances[0], "Hellinger Distance":distances[1]}, ensure_ascii=False)


@app.route('/query-doc-sim', methods=['POST'])
def query_doc_sim():
    category = request.form['category']
    in_type = request.form['type']
    if in_type == 'doc':
        f1 = request.files['text1']
        f2 = request.files['text2']
        if save_file(f1) and save_file(f2):
            f_text1 = read_file(f1)
            f_text2 = read_file(f2)
    else:
        f_text1 = request.form['text1'].encode('utf-8').strip()
        f_text2 = request.form['text2'].encode('utf-8').strip()

    inference_engine_wrapper = InferenceEngineWrapper(get_model_dir(category), get_lda_conf(), get_emb_file(category))
    doc1_seg = inference_engine_wrapper.tokenize(f_text1)
    doc2_seg = inference_engine_wrapper.tokenize(f_text2)
    distances = inference_engine_wrapper.cal_query_doc_similarity(doc1_seg, doc2_seg)

    return json.dumps({"LDA Similarity":distances[0], "TWE Similarity":distances[1]}, ensure_ascii=False)


@app.route('/doc-topic-word-lda', methods=['POST'])
def doc_topic_word_lda():
    category = request.form['category']
    in_type = request.form['type']
    f_text = input_doc_str(in_type)
    inference_engine_wrapper = InferenceEngineWrapper(get_model_dir(category), get_lda_conf())
    seg_list = inference_engine_wrapper.tokenize(f_text)
    topic_dist = inference_engine_wrapper.lda_infer(seg_list)

    result = {}
    for key,value in dict(topic_dist).items():
        twe_wrapper = TopicalWordEmbeddingsWrapper(get_model_dir(category), get_emb_file(category))
        result_dict = dict(twe_wrapper.nearest_words_around_topic(int(key), get_count()))
        result[value] = result_dict

    return json.dumps(result)


@app.route('/doc-topic-word-slda', methods=['POST'])
def doc_topic_word_slda():
    category = request.form['category']
    in_type = request.form['type']
    f_text = input_doc_str(in_type)
    inference_engine_wrapper = InferenceEngineWrapper(get_model_dir(category), get_slda_conf())
    seg_list = inference_engine_wrapper.tokenize(f_text)
    sentences = []
    length = len(seg_list)
    for index in range(0, length, 5):
        sentences.append(seg_list[index: index + 5])
    topic_dist = inference_engine_wrapper.slda_infer(sentences)

    result = {}
    for key,value in dict(topic_dist).items():
        twe_wrapper = TopicalWordEmbeddingsWrapper(get_model_dir(category), get_emb_file(category))
        result_dict = dict(twe_wrapper.nearest_words_around_topic(int(key), get_count()))
        result[value] = result_dict

    return json.dumps(result)


@app.route('/<path:path>')
def send_js(path):
    return send_from_directory('static', path)



if __name__ == '__main__':
    app.run(host='0.0.0.0',port='8080')
