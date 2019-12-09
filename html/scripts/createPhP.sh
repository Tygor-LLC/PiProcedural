#!/bin/bash

PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin

#creates the new folder php page
echo "createPhP started"
phpName="/var/www/html/php/${1}.php"
echo "<?php">$phpName
echo '	include "functions.php";'>>$phpName

temp='topHTML("../images/pastPhotos/'
temp+=${1}'", "../css/landingPage.css");'
echo "	$temp">>$phpName

temp='selectAllPictures("../images/pastPhotos/'
temp+=${1}'");'
echo "	$temp">>$phpName

echo "	echo '">>$phpName

echo '		<div id="enlargePhoto"></div>'>>$phpName
echo '		<script src="../javascript/createHeader.js"></script>'>>$phpName
echo '		<script src="../javascript/selectPhotosAlign.js"></script>'>>$phpName
echo "	';">>$phpName
echo "	bottomHTML();">>$phpName

echo "createPhP ended"
