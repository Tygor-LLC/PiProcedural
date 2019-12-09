/*This script will take all photos in a folder, and display them neatly across the screen.
* It will then allow clicking of each photo to see it larger.
* */


//Gather all img tags, aka photos
var images = document.body.getElementsByTagName("img");

//Create an image tag with no src and give
//it a bunch of attributes to display
//on top of other photos
var bigImage = document.createElement("img");
bigImage.setAttribute("src", "none");
bigImage.style.display = "none";
bigImage.style.marginLeft = "auto";
bigImage.style.marginRight = "auto";
bigImage.style.maxHeight = "950px";
bigImage.style.zIndex = 100;
bigImage.style.position = "absolute";

//Obtain the div to append the bigImage under
var largePhotoContianer = document.getElementById("enlargePhoto");
largePhotoContianer.appendChild(bigImage);
largePhotoContianer.style.left = "20%";

//for all images on this page
for(let image of images){
    //Set the image width and max height to display neatly across the page
    image.style.width = "20%";
    image.style.height = "200px";
    //Provide a click function to show/hide larger photo
    image.addEventListener("click", function () {
        console.log(this);
        //If there is no image being displayed
        if(bigImage.getAttribute("src") == "none"){
            //Set the image, display it, and add attributes
            let temp = this.getAttribute("src");
            bigImage.setAttribute("src", temp);
            bigImage.style.display = "block";
            bigImage.style.width = "auto";
            bigImage.style.height = "750px";
            bigImage.style.top =   document.documentElement.scrollTop + "px";
        }
        else{
            //Clicked on the big image, it is no longer needed
            bigImage.style.display = "none";
            bigImage.setAttribute("src", "none");
        }

                                              }, false);

}
