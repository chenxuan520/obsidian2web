#!/bin/bash

# !! Don't run it ,it's for author create !!

server_path="/root/web/blog"
server_name="aliyun2"

tar_name="book.tar.gz"

# for tar
if [ -f $tar_name ]; then
	rm ./$tar_name
fi
tar -zcvf $tar_name ./book

# for remote
ssh aliyun2 "mkdir $server_path;rm -rf $server_path/book*"
scp ./$tar_name aliyun2:$server_path
ssh aliyun2 "cd $server_path;tar -zxvf ./$tar_name"

# clean
rm $tar_name
