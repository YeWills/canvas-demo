## canvas-demo

### 介绍
本项目为日常学习canvas的练习demo

### 启动
```
npm start
```
访问
```
http://127.0.0.1:3000/
```
### 自动更新最新目录
#### 修改下面文件的内容：
```js
// /start.js
//如果要生成 某目录下的html地址，设置 readFile 为true；
// 目录生成需要设置 爬取目录readpath 与 爬取数据存储目录outportJson
var readFile = true;
var floderName = 'imooc'
var readpath = `/pages/${floderName}`
var outportJson = `pages/${floderName}/file.json`
var nameFilterKey = floderName
```
#### 使用jquery的tree插件，生产目录树，详细参考下面文件：
```js
// /pages/imooc/index.html
 $.getJSON("file.json", "", function(data) {　 
        var zNodes = _.uniqWith(data, _.isEqual);
        var t = $("#tree");
        $.fn.zTree.init(t, setting, zNodes);
      });
```
### 注意事项
本项目利用的是koa-static给pages目录提供本地服务，因此在pages根目录下必须定义一个index.hmtl,并且所以html依赖的静态资源或js框架，必须放置于此目录下，以便被纳入koa-static启动的本地服务器中。
