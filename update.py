#!/usr/bin/env python3
# coding=utf-8
#!/usr/bin/python3
# coding=utf-8
import os
import sys

result = "#Summary\n\n"
is_sort = True


def createBook(file, tab, path):
    global result
    if is_sort:
        file.sort()
    for name in file:
        temp = os.path.splitext(os.path.basename(name))[0]
        dirname = path+name
        if os.path.isdir(dirname):
            base = path+name+"/README.md"
            if os.path.isfile(base) == False:
                base = ""
            if os.path.isfile(dirname+".md"):
                base = dirname+".md"
            result = result+tab+"- ["+temp+"]("+base+")\n"
            createBook(os.listdir(dirname), tab+"\t", path+name+"/")
        else:
            if name == "README.md" or name == "SUMMARY.md":
                continue

            # 获取文件的非后缀部分
            file_path = os.path.splitext(dirname)[0]
            if os.path.isdir(file_path):
                continue
            # 获取文件的后缀
            file_ext = os.path.splitext(dirname)[1]
            if file_ext != ".md":
                print("Warning:", dirname, "is not md file,ignore")
                continue

            base = path+name
            # 将空格转义为 %20
            base = base.replace(" ", "%20")

            result = result+tab+"- ["+temp+"]("+base+")\n"


def main():
    global result
    if len(sys.argv) == 1:
        print("Usage: python3 update.py {dir_path}")
        return
    dir_path = sys.argv[1]
    if os.path.isdir(dir_path) == False:
        print("dir is not exist")
        return
    os.chdir(dir_path)

    if os.path.isfile("./SUMMARY.md"):
        os.remove("./SUMMARY.md")
    if os.path.isfile("./README.md"):
        result = result+"- [README](./README.md)\n"
    createBook(os.listdir("."), "", "./")
    f = open("./SUMMARY.md", "w+")
    f.write(result)
    f.close()
    os.chdir("..")
    print(" create ok")


if __name__ == "__main__":
    main()
