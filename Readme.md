### 介绍
Familia-Visualization 是Familia的一个可视化工具，它支持语义表示和语义匹配两种应用范式的可视化应用。

#### Familia-Visualization的应用：

1) 语义表示示例
	
    <img src="https://raw.githubusercontent.com/gmission/Familia-Visualization/master/images/1.png" width="360" height="240">
    <img src="https://raw.githubusercontent.com/gmission/Familia-Visualization/master/images/2.png" width="360" height="240">

    <img src="https://raw.githubusercontent.com/gmission/Familia-Visualization/master/images/3.png" width="360" height="240">
    <img src="https://raw.githubusercontent.com/gmission/Familia-Visualization/master/images/4.png" width="360" height="240">
    
    
2) 语义匹配用例
  
    <img src="https://raw.githubusercontent.com/gmission/Familia-Visualization/master/images/5.png" width="600" height="300">
    <img src="https://raw.githubusercontent.com/gmission/Familia-Visualization/master/images/6.png" width="600" height="300">


#### Familia-Visualization 的安装使用：
1.	打开term, 更换工作路径：

        cd Familia-Visualization

2. 	构建Docker映像并运行:

        docker build . semanticplus
        docker run -p 8080:8080 semanticplus

3.	或者，使用预设的映像运行

        docker pull chenzhao/semanticplus
        docker run -p 8080:8080  chenzhao/semanticplus

4.	网页浏览器开启 http://127.0.0.1:8080



### 致谢
Familia-Visualization 基于百度的Familia: https://github.com/baidu/Familia 和香港科技大学的gMission: https://github.com/gmission/gmission 的开源代码。
