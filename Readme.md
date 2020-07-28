### 介绍
Familia-Visualization 是用于语义分析的工具包。它支持两种应用范式：语义表示和语义匹配。包含建基于三个具有工业级语料库(Latent Dirichlet Allocation (LDA), SentenceLDA and Topical Word Embedding (TWE))训练的主题模型。
我们希望本系统可以减轻用户在文本分析和主题模型选择过程中的困惑和困难。 Semantic +是一个直观易用的文本分析工具。

#### Familia-Visualization 的应用：
Familia-Visualization 的语义分析基本分为两类：语义表示和语义匹配。

1) 语义表示：Familia-Visualization 支持文本分类，文本聚类，文本内容信息丰富度等。通过语义分析和主题建模，文本数据可以成为其他机器学习模型的特征。
    - 主题分布：通过训练有素的主题模型，我们可以获得每篇文章的主题分布并计算每个单词之间的关系，可以应用于文本分类和聚类。
    
   [//]: # <img src="https://raw.githubusercontent.com/gmission/Familia-Visualization/master/images/1.png" width="360" height="240">
   [//]: # <img src="https://raw.githubusercontent.com/gmission/Familia-Visualization/master/images/2.png" width="360" height="240">
    
    - 关键词提取：文本信息的丰富度是复杂排名模型的特点。我们可以通过主题建模来计算文本中关键字的分布，然后根据关键字分布的熵值进行分析。熵值越高，文本内容的丰富度越高。
    
   [//]: # <img src="https://raw.githubusercontent.com/gmission/Familia-Visualization/master/images/3.png" width="360" height="240">
    [//]: #<img src="https://raw.githubusercontent.com/gmission/Familia-Visualization/master/images/4.png" width="360" height="240">
    
2) 语义匹配：Familia-Visualization 的语义匹分为2个类别，短-长文本匹配和长-长文本匹配。
    - 短-长文本匹配：这个类别下，由于查询的内容通常很短而用于配对的文本内容要长得多。系统将从文本中提取关键字组，以使文本简洁明了。我们可以看到，从系统中提取的前10个关键字保留了文本中的重要信息，并据此进行匹配度计分。Semantic+的短长文本匹配功能为搜索服务提供了一种方便的解决方案。
    
      [//]: # <img src="https://raw.githubusercontent.com/gmission/Familia-Visualization/master/images/5.png" width="600" height="300">
       
    - 长-长文本匹配：长文本之间匹配是通过长文本主题分布的距离来评估长文本之间的语义相似性。Semantic+的长-长文本匹配功能为文本推荐类的应用提供了一种方便的解决方案。
    
     [//]: # <img src="https://raw.githubusercontent.com/gmission/Familia-Visualization/master/images/6.png" width="600" height="300">
    


#### Familia-Visualization 的安装使用：
1.	打开term, 更换工作路径：

        cd Familia-Visualization

2. 	构建Docker映像并运行:

        docker build . semanticplus
        docker run -p 8080:8080 semanticplus

3.	或者，使用预设的映像运行

        docker pull chenzhao/semanticplus
        docker run -p 8080:8080  chenzhao/semanticplus

4.	网页游览器开启 http://127.0.0.1:8080



### 致谢
Familia-Visualization 基于百度的Familia: https://github.com/baidu/Familia 和香港科技大学的gMission: https://github.com/gmission/gmission 的开源代码。



