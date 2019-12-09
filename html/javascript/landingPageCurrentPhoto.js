//get all images, since this is for last photo, just make the only
//one nice and big in the center of the screen
var currentImages = document.getElementsByTagName("img");
display = currentImages[0];

//1920x1080 scaled
display.style.maxHeight = "1776px";
display.style.maxWidth = "999px";

display.style.alignContent = "center";
display.style.display = "block";
display.style.marginLeft = "auto";
display.style.marginRight = "auto";
