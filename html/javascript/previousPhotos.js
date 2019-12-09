/*The point of this script is to get all of the directories that are inside previousPhotos directory
* */
//obtain elements with the class name folder
var folders = document.body.getElementsByClassName("folder");
console.log(folders);

//For every folder, line them up nice and put the directory they lead to under the link
for(let folder of folders){
    let childNode = folder.firstElementChild.firstElementChild;
    let text = childNode.getAttribute("alt");
    let p = document.createElement("p");

    p.appendChild(document.createTextNode(text));
    p.style.textAlign = "center";
    folder.appendChild(p);
}