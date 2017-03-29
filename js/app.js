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

// Drop down list No.1
var panel1 = document.querySelector('.list_panel1');
var arrow1 = document.querySelector('.list_arrow1');

arrow1.addEventListener("click", showPanel1);

function showPanel1() {
    if(panel1.style.display === "block") {
      panel1.style.display = "none";
    } else {
      panel1.style.display = "block";
    }
}

// drop_down_list No. 2
var panel2 = document.querySelector('.list_panel2');
var arrow2 = document.querySelector('.list_arrow2');

arrow2.addEventListener("click", showPanel2);

function showPanel2() {
    if(panel2.style.display === "block") {
      panel2.style.display = "none";
    } else {
      panel2.style.display = "block";
    }
}

// drop_down_list No. 3
var panel3 = document.querySelector('.list_panel3');
var arrow3 = document.querySelector('.list_arrow3');

arrow3.addEventListener("click", showPanel3);

function showPanel3() {
    if(panel3.style.display === "block") {
      panel3.style.display = "none";
    } else {
      panel3.style.display = "block";
    }
}

// summary panel
// choose a chair
var chair = document.querySelectorAll('.list_panel1 li');
var title = document.querySelector('.title');

for (var i = 0; i < chair.length; i++) {
  console.log(chair[i]);
    chair[i].addEventListener('click', function(){
      title.innerHTML=this.innerHTML;
})
};

// choose a color
var color = document.querySelectorAll('.list_panel2 li');
var choosenColor = document.querySelector('.color');

for (var i = 0; i < color.length; i++) {
  console.log(color[i]);
    color[i].addEventListener('click', function(){
      choosenColor.innerHTML=this.innerHTML;
})
};

// choose a pattern
var pattern = document.querySelectorAll('.list_panel3 li');
var choosenPattern = document.querySelector('.pattern');

for (var i = 0; i < pattern.length; i++) {
  console.log(pattern[i]);
    pattern[i].addEventListener('click', function(){
      choosenPattern.innerHTML=this.innerHTML;
})
};

// choose transport
var transport = document.getElementById('transport');
var choosenTransport = document.querySelector('.transport');

transport.addEventListener("click", function (){
if(transport.checked === false) {
  choosenTransport.innerHTML=null;
} else if (transport.checked === true){
  choosenTransport.innerHTML="Transport";
}
});

});
