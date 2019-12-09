#!/bin/python
from picamera import PiCamera
from time import sleep
import datetime

#Get current date/time for filename
date = datetime.datetime.today()
date_readable = date.strftime("%B-%d-%Y_%H:%M:%S")

#set file path and append with date for propername of file
filePath = "/var/www/html/images/currentPhoto/image_"
filePath = filePath + date_readable + ".png"

#assign camera
camera = PiCamera()

#start the preview and give it time to boot
camera.start_preview()
sleep(5) 

#take the picture and put it into the /var/www/html/scripts/pythontest.jpg
camera.capture(filePath)
camera.stop_preview()

print("sucessfully captured photo on " + date_readable)
