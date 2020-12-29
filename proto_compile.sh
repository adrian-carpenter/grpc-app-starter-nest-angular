#!/bin/bash

# Remove existing BE compiled protos
rm -rf backend/src/generated/protos/*
# Remove existing FE compiled protos
rm -rf frontend/src/app/generated/protos/*
# Compile to BE
protoc -I=protos protos/*.proto --plugin=protoc-gen-ts="./node_modules/.bin/protoc-gen-ts" --js_out=import_style=commonjs,binary:"backend/src/generated" --ts_out=service=grpc-web:"backend/src/generated"
# Compile to FE
protoc -I=protos protos/*.proto --plugin=protoc-gen-ts="./node_modules/.bin/protoc-gen-ts" --js_out=import_style=commonjs,binary:"frontend/src/app/generated" --ts_out=service=grpc-web:"frontend/src/app/generated"
