function updateBackgroundImage() {
  if (window.innerWidth < 700) {
    const backGround = document.getElementsByClassName("bg-image")[0];
    if (backGround) {
      backGround.style.backgroundImage = "url('./images/bg-mobile.svg')";
      backGround.style.backgroundSize = "cover";
    }
  }
}
updateBackgroundImage();
window.addEventListener("resize", updateBackgroundImage);
