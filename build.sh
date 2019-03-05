#!/usr/bin/env bash

cd ./supernova/
if [ -e ./build/ ]; then
    rm -rf ./build/
fi

yarn build
mv ./build/ ../build/
cd ..


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
