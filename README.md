# 使用node创建的一个简单项目

1. 更新摘要 (2017-11-29)
  - 新增了自动补上浏览器兼容
    - npm install autoprefixer-loader --save-dev
  - 重新配置webpack.config.js
    - 支持css和less
      - { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
      - 这里将会把所有的样式文件放到index.js的head里面
  - 重新划分结构
    - 原Test文件以及后续增加的文件将放到routes中的app.js进行统一管理，后续再做调整
  