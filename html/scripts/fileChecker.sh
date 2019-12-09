#!/bin/bash

#if file w/path exists, echo 1 else 0
if test -f "$1"; then
	echo '1'
else
	echo '0'
fi
