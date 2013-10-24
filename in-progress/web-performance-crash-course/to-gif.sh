#!/bin/bash

TMP_OUPUT=tmp-output-files

mplayer -ao null $1 -vo jpeg:outdir=$TMP_OUTPUT
convert $TMP_OUTPUT/* $2
rm -rf $TMP_OUTPUT/
