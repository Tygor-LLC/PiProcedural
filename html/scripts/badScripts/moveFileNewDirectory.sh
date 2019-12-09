#!/bin/bash

#grab the path and name of image in currentPhoto
temp=$(find ../images/currentPhoto -type f -iname "image_*.png")

#Only do if there is a photo in currentPhoto
if [ "$temp" != "" ]; then
	#REGEX to grab the correct name of the folder
	folderName1=$(echo $temp | cut -d_ -f 2)
	folderName2=$(echo $temp | cut -d_ -f 3 | egrep -o '*[[:digit:]]{2}' | head -n1)
	folderName="${folderName1}"

	#check if there is a directory that follows this pattern
	#DAY-MONTH-YEAR_HOUR if not, make a directory for it
	isFolder=$(./dirChecker.sh "../images/pastPhotos/$folderName")
	if (( "$isFolder" == 0)); then
		sudo mkdir "../images/pastPhotos/$folderName"
                echo "new folder created: $folderName"
		echo ""
	fi

	#move the last photo into a different folder
	sudo mv "$temp" "../images/pastPhotos/$folderName"
        sudo ./createPhP.sh $folderName
else
	echo "No photo in var/www/html/images/currentPhoto"
fi

