#!/bin/bash

# judge num of args
if [ $# -ne 1 ]; then
    echo "Usage: $0 <obsidian_folder>"
    exit 1
fi

# judge ./obsidian-export and ./mdbook exist
if [ ! -f "./obsidian-export" ]; then
    echo "Please run init.sh first, ./obsidian-export nofound"
    exit 1
fi
if [ ! -f "./mdbook" ]; then
    echo "Please run init.sh first, ./mdbook nofound"
    exit 1
fi

# read from argc fila_path
mkdir -p ./src
./obsidian-export $1 ./src --no-recursive-embeds

# create SUMMARY.md
./update.py src

# build book
./mdbook build

# clean tmp fold
rm -rf ./src
