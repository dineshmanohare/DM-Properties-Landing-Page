
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



let contactButton = document.querySelector('.enquireButton');
let timesButton = document.querySelector('.timesButton');
let model = document.querySelector('.model');
let container = document.querySelector('.container');
let downloadBroucher = document.querySelector('.aboutButton');
let plan1 = document.querySelector('.plan1');
let plan2 = document.querySelector('.plan2');
let plan3 = document.querySelector('.plan3');



function handleAddClick(){
    model.classList.remove('hideModel');
    container.classList.add('containerShadow');
}
function handleRemoveClick(){
    model.classList.add('hideModel');
    container.classList.remove('containerShadow');

}

plan1.addEventListener('click',handleAddClick);
plan2.addEventListener('click',handleAddClick);
plan3.addEventListener('click',handleAddClick);



downloadBroucher.addEventListener('click',handleAddClick);
 contactButton.addEventListener('click',handleAddClick);
 timesButton.addEventListener('click',handleRemoveClick);







