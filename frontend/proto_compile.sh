#!/bin/bash

rm -rf src/generated/*
protoc -I=protos protos/*.proto --plugin=protoc-gen-ts="./node_modules/.bin/protoc-gen-ts" --js_out=import_style=commonjs,binary:"src/app/generated" --ts_out=service=grpc-web:"src/app/generated"
