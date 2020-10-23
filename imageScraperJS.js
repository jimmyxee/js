var images = document.getElementsByTagName('img'); 
var srcList = [];
for(var i = 0; i < images.length; i++) {
    srcList.push(images[i].src);
}

// OR using the method.

function allSrc() {
  var src = [];
  var imgs = document.images;
  for (var i=0, iLen=imgs.length; i<iLen; i++) {
    src[i] = imgs[i].src;
  }
  return src;
}
