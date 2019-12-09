/*This script will create the head for each individual page. This means all the divs
* and text and <a> tags will be made and attached here. Every page needs this script
* to navigate between pages. Could be automated easily, no need for this project.
* */

//Create div so we have correct placement on page
//Using landing page.css to properly flavor page
var title = document.createElement("div");
title.id = "header";

title.style.height = "150px";
title.style.alignContent = "center";

//Create divs for each link and each link
var link1 = document.createElement("div");
var link2 = document.createElement("div");
var link3 = document.createElement("div");
var p1 = document.createElement("a");
var p2 = document.createElement("a");
var p3 = document.createElement("a");

p1.setAttribute("href","../index.php");
p2.setAttribute("href","../php/previousPhotos.php");
p3.setAttribute("href","../php/takeAVideo.php");

//Put text nodes in links, to allow centering
var text1 = document.createTextNode('Home');
var text2 = document.createTextNode("Previous Photos");
var text3 = document.createTextNode("Video");

//Give values to modify later possibly
link1.id = "link1";
link2.id = "link2";
link3.id = "link3";
link1.class = "headerText";
link2.class = "headerText";
link3.class = "headerText";

//append EVERYTHING, else it wont show up
p1.appendChild(text1);
p2.appendChild(text2);
p3.appendChild(text3);
link1.appendChild(p1);
link2.appendChild(p2);
link3.appendChild(p3);
title.appendChild(link1);
title.appendChild(link2);
title.appendChild(link3);

//append to top of body tag, so it goes above photos
document.body.insertBefore(title, document.body.firstChild);
