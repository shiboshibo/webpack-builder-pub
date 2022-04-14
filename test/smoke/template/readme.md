## 解析ES6

### 使用babel-loader

* babel配置文件是 .babelrc

* 安装bable库

  ```bash
    npm i @babel/core @babel/preset-env babel-loader -D
  ```
   >  i -> install   
   > -D -> --save-dev

### 使用jsx

* 安装react库

  ```bash
    npm i react react-dom @babel/preset-react -D
  ```

### 使用css

* 安装css

  ```bash
    npm i style-loader css-loader -D
  ```
  配置webpack.config.js

### 使用less

* 安装less

  ```bash
    npm i less less-loader -D
  ```
   配置webpack.config.js


### 解析图片和文件

* 安装file-loader

  ```bash
    npm i file-loader -D
  ```
   配置webpack.config.js


### webpack 监听(缺陷每次都要刷新 浏览器)

  ```javascript
    {
      // 默认false,不开启，热更新 配置项
        watch: true,
        watchOptions: {
          // 默认为空，不监听的文件或者文件夹，支持正则匹配
          igore: /node_modules/,
          // 监听到变化后，会等300ms去执行，默认300ms
          aggregateTimeout: 300,
          // 判断文件是否发生变化，不停轮询问系统指定文件有没有变化实现，默认每秒1000次
          poll: 1000 
        }
    }
    
  ```
  
### webpack 热更新(webpack-dev-server))

* WDS不刷新浏览器
* WDS 不输出文件
* 结合使用HotModuleReplacementPlugin插件
* 原理是websocket
  

### 文件指纹（在生产中使用）

* js用chunkhash, 在output中配置
* css使用contenthash， 在插件中配置，miniCssExtractPlugin
* 图片/字体用contenthash，但是在rules中的loader中的option进行配置

* 安装css指纹插件

  ```bash
    npm i mini-css-extract-plugin -D
  ```
  > style-loader与生成css文件的loader产生冲突，所以在替换的时候，需要用`MiniCssExtractPlugin.loader`替代`style-loader`


### 文件压缩

* css 文件压缩
 ```bash
    npm i optimize-css-assets-webpack-plugin -D
    npm i cssnano -D
  ```

* html 文件压缩
 ```bash
    npm i html-webpack-plugin -D
  ```


## 进阶篇

### 自动清理构建产物

* 清理目录
 ```bash
    npm i clean-webpack-plugin -D
  ```



### css功能增强篇

* css postcss-loader插件补全css3前缀
 ```bash
    npm i postcss-loader autoprefixer -D
  ```

* css px2rem 移动端像素转化
 ```bash
    npm i px2rem-loader -D
     npm i lib-flexible -S 
  ```
  > -S -> --save
  > lib-flexible 动态计算rem的值

### 文件内联
* html和js内联，用row-loader
 ```bash
    npm i raw-loader@0.5.1 -D
  ```
  * css 内联， js and 

  > 方案一、 借助style-loader

  > -S -> --save
  > lib-flexible 动态计算rem的值


### 多页面应用打包

* glob.sync
 ```bash
    npm i glob -D
 ```
 
### 提取页面公共资源

* 基础库分离（cdn方式）
 ```bash
    npm i html-webpack-externals-plugin -D
 ```

* 利用SplitChunksPlugin进行公共脚本分离
> webpack4内置, 替代CommonsChunkPlugin插件

### 代码分割(针对于懒加载等形式)

* 动态import
```bash
  npm i @babel/plugin-syntax-dynamic-import -D
```

```json
  {
    "plugins": ["@babel/plugin-syntax-dynamic-import"]
  }
```


### webpack ssr

* 新建server文件夹，安装express依赖
```bash
  npm i express -D
```