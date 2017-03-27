document.addEventListener("DOMContentLoaded", function() {

//top_menu
var children = document.getElementById('drop_menu');
var parent = document.getElementById('top_menu');

parent.addEventListener("mouseover", showChildrenElement);
parent.addEventListener("mouseout", hideChildrenElement);

function hideChildrenElement() {
    children.style.display = "none";
}
function showChildrenElement() {
    children.style.display = "block";
}

// textfield1 and textfield2
var textfield1 = document.querySelector('.textfield1');
var box1 = document.getElementById('box1');

box1.addEventListener("mouseover", hideChildren);
box1.addEventListener("mouseout", showChildren);

function hideChildren() {
    textfield1.style.display = "none";
}
function showChildren() {
    textfield1.style.display = "block";
}

var textfield2 = document.querySelector('.textfield2');
var box2 = document.getElementById('box2');

box2.addEventListener("mouseover", hideChild);
box2.addEventListener("mouseout", showChild);

function hideChild() {
    textfield2.style.display = "none";
}
function showChild() {
    textfield2.style.display = "block";
}

// Slider
var buttons = document.querySelectorAll('.button');
var sliderImg = document.querySelectorAll('#chairs');
var imgNumber = 0;

sliderImg[0].classList.add('visible');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', change)
}
function change(e) {
  console.log(e.target.id);
    var prevNumber = imgNumber;
    e.target.id === "sign_right" ? imgNumber++ : imgNumber--;
    if (imgNumber < 0) {
        imgNumber = sliderImg.length - 1;
    } else if (imgNumber > sliderImg.length - 1) {
        imgNumber = 0;
    }
    sliderImg[prevNumber].classList.remove('visible');
    sliderImg[imgNumber].classList.add('visible');
}

});
