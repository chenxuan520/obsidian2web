# obsidian2web
## Author
- **chenxuan**

- ![](http://cdn.androidftp.top/pic/chenxuanweb/dog.png)
## 仓库地址
- [GitHub - chenxuan520/obsidian2web: A tool to quickly convert obsidian repositories into web pages](https://github.com/chenxuan520/obsidian2web)
- 对应github网页 [README - chenxuan'blog](https://chenxuan520.github.io/obsidian2web/)
## 仓库说明
- **==快速将你的obsidian笔记部署到网络上,并且根据git自动更新,或者生成笔记的静态资源文件的方法==**
- 使用 [mdbook](https://github.com/rust-lang/mdBook) 和 [obsidian-export](https://github.com/zoni/obsidian-export) 加上 github的cicd和page实现,并且进行优化,[优化参考](./info/feature.md)
- 需要有一定的git和github的使用基础
## Quick Start
### 视频教程

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=1856089767&bvid=BV1yW421R7iC&cid=1614183558&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

### 需要部署到github-page
1. fork这个仓库
2. 开启github-action 仓库界面 -> Actions -> Enable
3. 添加token的权限:仓库界面 -> Setting -> Action -> General -> Workflow permissions -> 点击 Read and write permissions
4. 设置page: 仓库界面 -> Setting -> Pages -> Build and deployment -> Source 设置为 Github Actions
5. 将自己的obsidian笔记放入example下面(或者通过拷贝或者链接这种)
6. 每次更改之后直接 push 到github会自动触发github page的部署流程
### 只需要生成静态文件,不需要部署
> 这个仅适用于linux(因为作者是linux系统)
1. clone 这个仓库
2. 运行 `init.sh` 下载mdbook和 obsidian-export 这一步默认下载linux版本的,如果需要其他系统版本的,请自行下载
3. 运行 `create.sh <你的仓库的路径>`,此时生成的book文件夹就是需要的静态文件,你可以自己通过自己的服务器进行部署
## 特性
- 参考 [feature](./info/feature.md) 说明
## 方式对比
- 当前实现obsidian笔记在web展示的常用方法

| 方式                                                                                | 支持仓库结构     | 导出速度                         | 自动化程度                     | 自动化部署                                      | 特性完整性支持            | 国内访问                  | 是否收费     |
| --------------------------------------------------------------------------------- | ---------- | ---------------------------- | ------------------------- | ------------------------------------------ | ------------------ | --------------------- | -------- |
| [obsidian webpage插件](https://github.com/KosmosisDire/obsidian-webpage-export)<br> | 支持         | 慢,在obsidian进行导出,必须打开obsidian | 需要手动点击按钮等待导出,必须打开obsidian | 只支持生成webpage,没办法直接实现自动化部署                  | 几乎完整支持obsidian所有特性 | 引用了一些很慢的css资源导致加载速度很慢 | 免费       |
| [obsius插件](https://zhuanlan.zhihu.com/p/500854527)                                | 不支持,只能单偏文档 | 快速,但是不稳定,取决于网络和服务器           | 对某个笔记右键                   | 直接部署到别人服务器上,不一定稳定                          | 支持基本的obsidian的特性   | 不稳定,因为是国外的网站          | 免费,但是不稳定 |
| [obsidian2web](https://chenxuan520.github.io/obsidian2web/)                       | 支持         | 快速,直接用md导出的                  | 和git结合,和git插件可实现无感化更新部署   | 方式多种,可以选择githubpage部署,也可以选择生成静态webpage自己部署 | 支持基本的obsidian的特性   | 所有css和js文件全部内置,加载速度快  | 免费       |
| [obsidian-digital-garden](https://github.com/oleeskild/Obsidian-Digital-Garden)   | 如支持,没有目录树  | 快速,因为是单篇发布                   | 前期需要注册帐号等一系列麻烦操作,单篇发布     | 和obsius插件类似                                | 支持基本的obsidian的特性   | 引用了一些很慢的css资源导致加载速度很慢 | 免费       |
| 官方发布服务                                                                            | 支持         | 快速                           | 高                         | 高                                          | 支持全部特性             | 正常,加载速度还可以            | 8刀一个月    |


## QA
### 如何更改网页book的名字和链接等
- 在仓库的 `book.toml` 内是书籍的配置信息, 含义参考  [mdbook](https://hellowac.github.io/mdbook-doc-zh/index.html)

---
- 如果你觉得这个仓库对你有帮助,可以给个免费的star⭐  ; )


