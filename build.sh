#!/usr/bin/env bash

mv ./index.html ./tmp.html


clean() {
    rm -rf ./static/
    rm ./manifest.json
    rm ./asset-manifest.json
    rm ./favicon.ico
    rm ./new.html
    rm ./service-worker.js

    for filepath in `ls | grep "package-manifest"`; do
        rm $filepath
    done
}

build() {
    cd ./supernova/
    if [ -e ./build/ ]; then
        rm -rf ./build/
    fi

    yarn build
    mv ./build/ ../build/
    cd ..
}


deploy() {
    cd ./build/
    for filepath in `ls $PWD`; do
        if [ -f $filepath ]; then
            mv $filepath ../$filepath
        fi

        if [ -d $filepath ]; then
            mv $filepath ../$filepath/
        fi

    done
    cd ..
    rm -rf ./build/
}

clean
build
deploy

mv ./index.html ./new.html
mv ./tmp.html ./index.html
