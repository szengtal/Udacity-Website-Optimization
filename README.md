# 任务一：
# 初次运行
- 使用npm install 安装依赖库
- 使用grunt命令自动构建
- 发布项目会生成在当前目录下的dest文件夹中
- 打开dest/index.html即为优化后项目
- 为方便查看，在dest中已经提交了生成项目
- 
# 介绍
## 使用grunt自动完成以下任务：
- js合并压缩
- 图片压缩
- html文件压缩

## 减少请求时间
将http://www.google-analytics.com/analytics.js存储到本地
## 图片处理
-  将index.html中图片生成webp格式，对于支持webp格式的浏览器会加载webp，对于不支持会加载jpg的。
-  所有图片启用压缩，使用grunt工具
-  在html指定了图片大小，避免了绘制的浪费
-  
## 脚本处理
- 内联了print.css样式和了style.css文件
- 将http://www.google-analytics.com/analytics.js存储到本地，减少请求等待时间。并将它与perfmatters.js进行合并压缩。

## web字体
- 使用webfontloader.js进行字体的异步加载，在未加载完成前使用sans-serif来代替，加载好后启用新字体。

## 服务器配置
- 在本地的nginx有设置文件缓存和开启gzip，使用本地chrome插件PageSpeed可以达到100/100；

# 任务二：
- 位于views文件夹内
