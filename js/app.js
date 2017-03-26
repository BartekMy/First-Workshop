document.addEventListener("DOMContentLoaded", function() {

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

});
