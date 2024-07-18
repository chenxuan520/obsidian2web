# obsidian2web
## Author
- **chenxuan**

- ![](http://cdn.androidftp.top/pic/chenxuanweb/dog.png)
## Repository Address
- [GitHub - chenxuan520/obsidian2web: A tool to quickly convert obsidian repositories into web pages](https://github.com/chenxuan520/obsidian2web)
- Corresponding GitHub page [README - chenxuan'blog](https://chenxuan520.github.io/obsidian2web/)
## Repository Description
- **==Quickly deploy your obsidian notes to the web, and automatically update them according to git, or generate static resource files for notes==**
- Using [mdbook](https://github.com/rust-lang/mdBook) and [obsidian-export](https://github.com/zoni/obsidian-export) with GitHub's cicd and page implementation, and optimization, [optimization reference](./info/feature.md)
- Requires a certain level of git and GitHub usage
## Quick Start
### Video Tutorial

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=1856089767&bvid=BV1yW421R7iC&cid=1614183558&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

### Need to deploy to GitHub page
1. Fork this repository
2. Enable github-action repository page -> Actions -> Enable
3. Add token permissions: Repository page -> Setting -> Action -> General -> Workflow permissions -> Click Read and write permissions
4. Set page: Repository page -> Setting -> Pages -> Build and deployment -> Source set to Github Actions
5. Put your obsidian notes under example (or copy or link)
6. After each change, push directly to GitHub to automatically trigger the deployment process of the GitHub page
### Only need to generate static files, no need to deploy
> This is only applicable to linux (because the author is using a linux system)
1. Clone this repository
2. Run `init.sh` to download mdbook and obsidian-export. This step defaults to downloading the linux version. If you need another system version, please download it yourself
3. Run `create.sh <path to your repository>`, at this point the generated book folder is the required static file, you can deploy it on your own server
## Features
- Refer to [feature](./info/feature.en.md) for details
## Comparison of Methods
- Current implementation of commonly used methods for displaying obsidian notes on the web

| Method                                                                                 | Repository Structure Support        | Export Speed                                          | Automation Level                                                                         | Automated Deployment                                                                                | Feature Completeness Support                      | Domestic Access                                               | Free               |
| ------                                                                                 | ---------------------------         | -------------                                         | -----------------                                                                        | -------------------                                                                                 | --------------------------                        | ---------------                                               | ----               |
| [obsidian webpage plugin](https://github.com/KosmosisDire/obsidian-webpage-export)<br> | Supported                           | Slow, must be done in obsidian, obsidian must be open | Requires manual clicking and waiting for export, obsidian must be open                   | Only supports webpage generation, cannot be directly deployed automatically                         | Almost complete support for all obsidian features | Slow loading due to slow css resources                        | Free               |
| [obsius plugin](https://zhuanlan.zhihu.com/p/500854527)                                | Not supported, only single document | Fast, but unstable, depends on network and server     | Right-click on a note                                                                    | Deploy directly to someone else's server, not necessarily stable                                    | Basic support for obsidian features               | Unstable, as it is a foreign website                          | Free, but unstable |
| [obsidian2web](https://chenxuan520.github.io/obsidian2web/)                            | Supported                           | Fast, exported directly from md                       | Combined with git, can be seamlessly updated and deployed with git plugin                | Multiple methods, can choose github page deployment, or generate static webpage for self-deployment | Basic support for obsidian features               | All css and js files are built-in, fast loading               | Free               |
| [obsidian-digital-garden](https://github.com/oleeskild/Obsidian-Digital-Garden)        | Supports, no directory tree         | Fast, because it is a single-page release             | Early registration and other troublesome operations are required for single-page release | Similar to the obsius plugin                                                                        | Supports basic obsidian features                  | Slow loading speed due to referencing some slow css resources | Free               |
| Official release service                                                               | Support                             | Fast                                                  | High                                                                                     | High                                                                                                | Supports all features                             | Normal, loading speed is acceptable                           | $8 per month       |


## QA
### How to change the name and link of the webpage book
- The book's configuration information is in the repository's `book.toml`, meaning refer to [mdbook](https://hellowac.github.io/mdbook-doc-zh/index.html)

---
- If you find this repository helpful, feel free to give it a star⭐  ; )
