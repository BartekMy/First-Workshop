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
var titleValue = document.querySelector('.title_value');
var sum = document.querySelector('.sum');

for (var i = 0; i < chair.length; i++) {
  console.log(chair[i]);
    chair[i].addEventListener('click', function(){
      title.innerHTML=this.innerHTML;
      colorValue.innerHTML=0;
      patternValue.innerHTML=0;
      transportValue.innerHTML=0;
      choosenColor.innerHTML=null;
      choosenPattern.innerHTML=null;
      choosenTransport.innerHTML=null;
      transport.checked = false;
      if(this.innerHTML === "Clair") {
        titleValue.innerHTML=150;
        sum.innerHTML = parseInt(titleValue.innerHTML) + parseInt(colorValue.innerHTML) + parseInt(patternValue.innerHTML) + parseInt(transportValue.innerHTML);
      } else if (this.innerHTML === "Margarita") {
        titleValue.innerHTML=200;
        sum.innerHTML = parseInt(titleValue.innerHTML) + parseInt(colorValue.innerHTML) + parseInt(patternValue.innerHTML) + parseInt(transportValue.innerHTML);
      } else if (this.innerHTML === "Selena") {
        titleValue.innerHTML=300;
        sum.innerHTML = parseInt(titleValue.innerHTML) + parseInt(colorValue.innerHTML) + parseInt(patternValue.innerHTML) + parseInt(transportValue.innerHTML);
      }
})
};

// choose a color
var color = document.querySelectorAll('.list_panel2 li');
var choosenColor = document.querySelector('.color');
var colorValue = document.querySelector('.color_value');

for (var i = 0; i < color.length; i++) {
  console.log(color[i]);
    color[i].addEventListener('click', function(){
      choosenColor.innerHTML=this.innerHTML;
      if(this.innerHTML === "Czerwony") {
        colorValue.innerHTML=50;
        sum.innerHTML = parseInt(titleValue.innerHTML) + parseInt(colorValue.innerHTML) + parseInt(patternValue.innerHTML) + parseInt(transportValue.innerHTML);
      } else if (this.innerHTML === "Czarny") {
        colorValue.innerHTML=0;
        sum.innerHTML = parseInt(titleValue.innerHTML) + parseInt(colorValue.innerHTML) + parseInt(patternValue.innerHTML) + parseInt(transportValue.innerHTML);
      } else if (this.innerHTML === "Pomarańczowy") {
        colorValue.innerHTML=70;
        sum.innerHTML = parseInt(titleValue.innerHTML) + parseInt(colorValue.innerHTML) + parseInt(patternValue.innerHTML) + parseInt(transportValue.innerHTML);
      }
})
};

// choose a pattern
var pattern = document.querySelectorAll('.list_panel3 li');
var choosenPattern = document.querySelector('.pattern');
var patternValue = document.querySelector('.pattern_value');

for (var i = 0; i < pattern.length; i++) {
  console.log(pattern[i]);
    pattern[i].addEventListener('click', function(){
      choosenPattern.innerHTML=this.innerHTML;
      if(this.innerHTML === "Tkanina") {
        patternValue.innerHTML=0;
        sum.innerHTML = parseInt(titleValue.innerHTML) + parseInt(colorValue.innerHTML) + parseInt(patternValue.innerHTML) + parseInt(transportValue.innerHTML);
      } else if (this.innerHTML === "Skóra") {
        patternValue.innerHTML=100;
        sum.innerHTML = parseInt(titleValue.innerHTML) + parseInt(colorValue.innerHTML) + parseInt(patternValue.innerHTML) + parseInt(transportValue.innerHTML);
      }
})
};

// choose transport
var transport = document.getElementById('transport');
var choosenTransport = document.querySelector('.transport');
var transportValue = document.querySelector('.transport_value');
transport.addEventListener("click", function (){
if(transport.checked === false) {
  choosenTransport.innerHTML=null;
  transportValue.innerHTML=0;
  sum.innerHTML = parseInt(titleValue.innerHTML) + parseInt(colorValue.innerHTML) + parseInt(patternValue.innerHTML);
} else if (transport.checked === true){
  choosenTransport.innerHTML="Transport";
  transportValue.innerHTML=80;
  sum.innerHTML = parseInt(titleValue.innerHTML) + parseInt(colorValue.innerHTML) + parseInt(patternValue.innerHTML) + parseInt(transportValue.innerHTML);
}
});

});
