#!/bin/bash

if [ $# -lt 2 ]; then
  echo "$0 video-file gif-file"
  exit 1
fi

TMP_OUTPUT=tmp-output-files

mkdir -p $TMP_OUTPUT
mplayer -ao null $1 -vo jpeg:outdir=$TMP_OUTPUT
convert $TMP_OUTPUT/* $2
rm -rf $TMP_OUTPUT/
convert $2 -fuzz 10% -layers Optimize $2