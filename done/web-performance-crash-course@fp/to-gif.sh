#!/bin/bash

TMP_OUTPUT=tmp-output-files

mkdir -p $TMP_OUTPUT
mplayer -ao null $1 -vo jpeg:outdir=$TMP_OUTPUT
convert $TMP_OUTPUT/* $2
rm -rf $TMP_OUTPUT/
