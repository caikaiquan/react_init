## react 配置相关

### react 暴露后 antd 按需加载和自定义主题
```
简书：https://www.jianshu.com/p/95037a36d9e7
```

### react 暴露后 antd 按需加载

1. 安装 babel-plugin-import 和 less-loader

```
npm install babel-plugin-import --save
npm install antd --save
注：less-loader只能用5.0.0以下版本不然会报错
npm install less less-loader --save 
```

2. 修改 package.json：添加 antd 库的样式(提示:如果在 package.json 中没有看到上面的形式，则需要先 reject 项目。)

```
 "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "style": "css"
        }
      ]
    ]
  }
```

### react 暴露后自定义主题

1. 复制代码修改配置环境（webpack.config.js）定义全局变量

```
// style files regexes
  const cssRegex = /\.css$/;
  const cssModuleRegex = /\.module\.css$/;
  //在这添加（新增两个变量）
+ const lessRegex = /\.less$/;
+ const lessModuleRegex = /\.module\.less$/;
  const sassRegex = /\.(scss|sass)$/;
  const sassModuleRegex = /\.module\.(scss|sass)$/;
```

2. 复制代码配置 less-loader

```
//@To-do 原来的内容
// Adds support for CSS Modules, but using SASS
          // using the extension .module.scss or .module.sass
 {
            test: sassModuleRegex,
            use: getStyleLoaders(
              {
                importLoaders: 2,
                modules: true,
                getLocalIdent: getCSSModuleLocalIdent,
              },
              'sass-loader'
            ),
 },

//@To-do 添加如下内容

   {
            test: lessRegex,
            exclude: lessModuleRegex,
            use: getStyleLoaders({ importLoaders: 2 }, 'less-loader'),
          },
          // Adds support for CSS Modules, but using SASS
          // using the extension .module.scss or .module.sass
          {
            test: lessModuleRegex,
            use: getStyleLoaders(
              {
                importLoaders: 2,
                modules: true,
                getLocalIdent: getCSSModuleLocalIdent,
              },
              'less-loader'
            ),
 },
```

3. 复制代码定义全局样式

```
if (preProcessor) {
      let loader = require.resolve(preProcessor)
      if (preProcessor === "less-loader") {
        loader = {
          loader,
          options: {
            modifyVars: { //自定义主题
              'primary-color':' #000000 ',
            },
            javascriptEnabled: true,
          }
        }
      }
      loaders.push({
        loader: require.resolve('resolve-url-loader'),
        options: {
          sourceMap: isEnvProduction && shouldUseSourceMap,
        },
      },loader);
```

4. 复制代码修改 package.json

```
 "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "style": true  //修改处
        }
      ]
    ]
  }
```
