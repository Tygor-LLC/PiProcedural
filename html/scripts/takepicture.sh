#!/usr/bin/env bash
HOME=/root
LOGNAME=root
PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin
LANG=en_US.UTF-8
SHELL=/bin/sh
PWD=/root

#make sure /currentPhoto is empty.If there is a photo
#already in it, move it to the appropriate directory
bash /var/www/html/scripts/moveFileNewDirectory2.sh

#Takes a photo with PiCamera 2 and 
#puts it into /currentPhoto
sudo python /var/www/html/scripts/takepicture.py &
