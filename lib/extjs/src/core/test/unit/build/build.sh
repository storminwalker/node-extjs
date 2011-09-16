#!/bin/sh
UNAME="$(uname)"
if [ $UNAME = "Darwin" ]; then
    OS="mac"
else
    OS="linux"
fi
CURRENT_DIR="$(dirname $0)"
cd $CURRENT_DIR/
HAMMERJS="../../../../../extjs/build/bin/$OS/hammerjs" 
$HAMMERJS ./build-data.js > ../data.js