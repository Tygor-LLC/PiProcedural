#!/bin/bash

PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin

#obtain the file path
tempDir="$1"

#if directory exists, echo 1 else 0
if [ -d "${tempDir}" ]; then
	echo '1'
else
	echo '0'
fi
