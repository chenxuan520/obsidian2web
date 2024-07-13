# obsidian2web

## Author

- **chenxuan**

## 说明

- 将obsidian的文档快速生成html的方法

## 使用方法

1. 运行`./init.sh`,下载二进制(需要github连接,这一步可以自行下载)

2. 运行`./update.sh`,生成book文件夹

3. 进入`./backend`,执行`make`生成`./gowebquick`二进制文件,运行它

4. 打开浏览器`http://127.0.0.1:5203`就可以看到效果

## 导出obsidian

- [obsidian-export](https://github.com/zoni/obsidian-export)(ps:最好使用我改进过后的[版本](https://github.com/chenxuan520/obsidian-export),修复了中文url跳转的bug问题)

## 中文搜索支持

- [参考](https://lijunlin2022.github.io/docs/tool/mdbook/)

- [参考](https://github.com/rust-lang/mdBook/issues/2052)

## 文件内大纲支持

- [参考](https://github.com/JorelAli/mdBook-pagetoc)

## 中文跳转支持

- [参考](https://github.com/chenxuan520/obsidian-export)

## TODO

- [X] ~~目前跳转不支持中文~~

- [X] ~~文件内大纲支持~~

- [X] ~~设置github链接~~

- [X] ~~多行引用的换行~~

- [x] ~~高亮语法设计~~

- [x] ~~tag支持~~

---

# 为什么我做这个仓库

## 现有方法

1. [obsidian webpage插件](https://github.com/KosmosisDire/obsidian-webpage-export)

    - 导出速度太慢了,特别是当出现大量文件的时候,而且必须打开obsidian,无法自动化部署

2. [obsius插件](https://zhuanlan.zhihu.com/p/500854527)

    - 只适合单文件分享,不适合整个仓库作为web

## 我的预期

1. 快速(总体在2s以内)而且无需打开obsidian,md格式本就是通用的,没必要依赖Obsidian

2. 自动化,我使用git+github管理笔记,我希望推送到github之后自动部署到服务器上,不需要我去手动点击

3. 准确,一些obsidian的插件特性我并不需要,我希望简单化和标准化

## 探索过程

1. 决定使用mdbook作为md转html工具,因为真的非常快(1s以内)

2. 但是mdbook有很多问题

    1. 无法识别`[[]]`这种Obsidian的语法

    2. 无法使用高亮

    3. 搜索不了中文

    4. 没有大纲

    5. 语法高亮不支持

    6. `>`引用语法不能换行

    7. 无法识别`> [!info]`这种语法

    8. 图片不能自动换行的问题

3. 我使用obsidian-export解决了无法识别`[[]]`的问题,但是新的问题出现了

    1. 链接如果是中文会更改为拼音,导致mdbook生成之后无法跳转

4. 我更改了export的源码重新编译解决了这个问题

5. 通过放置js解决了搜索中文的问题

6. 通过mdbook-pagetoc解决了大纲的需求

7. 自己编写js解决引用和高亮的问题

8. 目前已经基本可用

---
