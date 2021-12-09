#!/bin/bash

CLIENT_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"/..

cd "${CLIENT_ROOT}"
yarn link

for i in use-http react react-dom ; do
    pushd node_modules/${i}
    yarn link
    popd
done
