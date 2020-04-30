maxImageNum = 10;
clicksBtwEachBlushPicSwitch = 10;

button = document.getElementById("button");
dankCount = document.getElementById("dankCount");
blushImage = document.getElementById("blushImage");
currentDankCount = 0;

function incrementDankCount() {
  currentDankCount+=1;
  dankCount.innerHTML = currentDankCount;

  //change image
  currentImageNum = Math.floor(currentDankCount / clicksBtwEachBlushPicSwitch);

  if (currentImageNum > maxImageNum) {
    currentImageNum = maxImageNum;
  }

  blushImage.src = "assets/img/Blush" + currentImageNum + ".png";
}

function resetBlushImageSize() {
  blushImage.width = blushImage.width - 2;
  blushImage.height = blushImage.height - 2;
}

function expandBlushImageSize() {
  blushImage.width = blushImage.width + 2;
  blushImage.height = blushImage.height + 2;
}

button.onclick = incrementDankCount;
button.onmousedown = expandBlushImageSize;
button.onmouseup = resetBlushImageSize;

//button.onclick
