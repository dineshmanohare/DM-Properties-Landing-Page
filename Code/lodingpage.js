
console.log("work");
var i = 0;
var images = [];
var time = 3000;
images[0] = '../Asset/apartments.jpg';
images[1] = '../Asset/grey-bedroom-design-11.jpg';
images[2] = '../Asset/interior-design-ideas-for-hall.jpg';
var image = document.querySelector('.homeImage img'); //image slide stop

function changeImg() {
    image.src = images[i];
    if(i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()",time);
}
window.onload = changeImg;
