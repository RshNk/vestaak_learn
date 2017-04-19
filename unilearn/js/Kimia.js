/**
 * Created by Kimia on 3/11/2017.
 */

// ellipsis

function ellipsizeTextBox(id) {
    var el = document.getElementsByClassName(id);
    for (var i = 0, len = el.length; i < len; i++) {
        var wordArray = el[i].innerHTML.split(' ', 70);
        while (el[i].scrollHeight > el[i].offsetHeight) {
            wordArray.pop();
            el[i].innerHTML = wordArray.join(' ') + '...';
        }
    }
}

ellipsizeTextBox("description");

$(document).ready(function() {
    $("description").dotdotdot({
        //	configuration goes here
    });
});

// end of ellipsis


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





