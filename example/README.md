
 - **当你在网页上看到这个界面时候,说明obsidian2web部署成功了**
# Author
- **chenxuan**
![](http://cdn.androidftp.top/pic/chenxuanweb/dog.png)
# Quick Start
## 需要部署到github-page
1. fork这个仓库
2. 将自己的obsidian笔记放入example下面(或者通过拷贝或者链接这种)
3. 添加token的权限:打开仓库界面 -> Setting -> Action -> General -> Workflow permissions -> 点击 Read and write permissions
4. 每次更改之后直接 push 到github会自动触发github page的部署流程
## 只需要生成静态文件,不需要部署
> 这个仅适用于linux(因为作者是linux系统)
1. clone 这个仓库
2. 运行 `init.sh` 下载mdbook和 obsidian-export 这一步默认下载linux版本的,如果需要其他系统版本的,请自行下载
3. 运行 `create.sh <你的仓库的路径>`,此时生成的book文件夹就是需要的静态文件
