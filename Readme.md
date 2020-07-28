### Semantic+ Demo
#### Setup
Change your working dir:

    cd semanticplus

Build the docker image and run:

    docker build . semanticplus
    docker run -p 8080:8080 semanticplus

Or, run with a prebuilt image:
    
    docker pull chenzhao/semanticplus
    docker run -p 8080:8080  chenzhao/semanticplus

Then, check  http://127.0.0.1:8080


####Ackowledgement
Semantic+ is based on Familia from baidu: https://github.com/baidu/Familia  and gMission from HKUST: https://github.com/gmission/gmission . 



