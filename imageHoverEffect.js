// Code taken from: https://jsfiddle.net/DLungaro/m1tajd32/
function showImage(elemId, imgSrc) {
    //console.log("Mouse is over text");
    //console.log("\tElemId:" + elemId + " Image Source:" + imgSrc);
    const elem = document.getElementById(elemId);
    const popImage = new Image();
    popImage.src = imgSrc;
    popImage.style.position = "block";
    //popImage.style.zIndex = "1";
    elem.appendChild(popImage);
  }

  function hideImage(elemId) {
    //console.log("Mouse is off text");
    //console.log("\tElemId:" + elemId);
    const elem = document.getElementById(elemId);
    while (elem.childElementCount > 0) {
      elem.removeChild(elem.lastChild);
    }
}