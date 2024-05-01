#!/bin/bash

# obsidian-export
wget https://github.com/zoni/obsidian-export/releases/download/v23.12.0/obsidian-export-x86_64-unknown-linux-gnu.tar.xz
tar -xvf obsidian-export-x86_64-unknown-linux-gnu.tar.xz
cp obsidian-export-x86_64-unknown-linux-gnu/obsidian-export .

# the two js file
mkdir assets
cd assets
wget https://github.com/allfunc/docker-mdbook/raw/main/mdbook-demo/assets/fzf.umd.js
wget https://github.com/allfunc/docker-mdbook/raw/main/mdbook-demo/assets/elasticlunr.js
