var images = document.getElementsByTagName("img");
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        for (var j = 0; j < images.length; j++) {
            if (i != j) {
                images[j].style.transform = "scale(1)";
            }
          }
        this.style.transform = "scale(1.3)";
        this.style.margin='40px'
    });
}