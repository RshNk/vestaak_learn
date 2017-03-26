/**
 * Created by afsoon on 3/11/2017.
 */
var x = $("#profile-input").val();

$(document).ready(function () {
    $("#add-tag").click(function () {

        var x = $("#profile-input").val();

        $("#tag-place").append('<div id='+'"'+'lbl-tag'+'"'+' class='+'"'+'profile-info-box info-boxes error-message tag-radius'+'"'+'>'+
            ' <div class='+'"'+'info-box-icon smaller'+'"'+'><i class='+'"'+'fa fa-times'+'"'+'></i></div>'+
            x+
            '<div class='+'"'+'close-button'+'"'+'></div>'+
            ' </div>');

        $(".info-boxes .close-button").on( 'click', function() {
            $(this).parent().animate({'opacity' : '0'}, 300).slideUp(300);
        });

    });
});