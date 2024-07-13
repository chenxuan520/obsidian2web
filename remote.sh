#!/bin/bash

# !! Don't run it ,it's for author create !!

server_path="/root/service/book"
server_bin="gowebquick"

tar_name="book.tar.gz"

# for tar
if [ -f $tar_name ]; then
	rm ./$tar_name
fi
tar -zcvf $tar_name ./book

# for remote
ssh huaweiyun "mkdir $server_path;rm -rf $server_path/book*"
scp ./$tar_name huaweiyun:$server_path
ssh huaweiyun "cd $server_path;tar -zxvf ./$tar_name"
ssh huaweiyun "killall $server_bin;cd $server_path;nohup ./$server_bin >./nohup 2>&1 &"

# clean
rm $tar_name
