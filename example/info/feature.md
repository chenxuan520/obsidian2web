- 这部分内容主要展示和说明这个仓库的特别之处内容
# 中文搜索支持
- mdbook 本身生成的静态资源并不直接支持中文搜索只能搜索英文
- 我在下面的参考下通过添加js文件,解决了这个问题
> [!NOTE] 参考
> [小霖家的混江龙](https://lijunlin2022.github.io/docs/tool/mdbook/)
> [Support CJK (mutiple language) search · Issue #2052 · rust-lang/mdBook · GitHub](https://github.com/rust-lang/mdBook/issues/2052)
# 中文url无法跳转问题
- 默认的 obsidian-export 出现了中文无法跳转的问题
- 我更改了他的源代码自己编译了一份解决
- [更改后的github链接](https://github.com/chenxuan520/obsidian-export)
# 添加右侧大纲
- 类似obsidian右边的大纲系统
> [!NOTE] 参考
> [GitHub - JorelAli/mdBook-pagetoc: A page table of contents for mdBook](https://github.com/JorelAli/mdBook-pagetoc)
# 其他改进了的特性
- 无法识别 \[\[\]\] 语法的问题,使用obsidian-export 解决了 [[old]]
- obsidian本体的==高亮设置==
- obsidian的tag识别和搜索 #tag
- 多行应用不会换行的问题
> example
> next line

> [!important] 引用语法识别
> 类似这种



