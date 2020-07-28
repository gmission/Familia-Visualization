FROM python:2.7
RUN apt update

WORKDIR /demo
RUN apt install -y libgoogle-glog-dev 

COPY src .

RUN pip install -r requirements.txt  -i https://pypi.tuna.tsinghua.edu.cn/simple


WORKDIR /demo/model
RUN chmod +x ./download_model.sh
RUN ./download_model.sh


WORKDIR /demo

ENTRYPOINT ["python", "server.py"]

