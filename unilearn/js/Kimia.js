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
// end of ellipsis


// message modal
var modal = document.getElementsByClassName('myModal');

var btn = document.getElementsByClassName("myBtn");

var span = document.getElementsByClassName("close");

for (var i = 0, len = btn.length; i < len; i++) {
    btn[i].onclick = function (event) {
        var source = event.target || event.srcElement;
        $("#"+$(source).attr('modal-target')).css('display','block');

    };

    span[i].onclick = function () {
        for (var k = 0, len3 = modal.length; k < len3; k++) {
            modal[k].style.display = "none";
        }
    };
}

window.onclick = function(event) {
    for (var i = 0, len = modal.length; i < len; i++) {
        if (event.target == modal[i]) {
            modal[i].style.display = "none";
        }
    }
};
// end of message modal




