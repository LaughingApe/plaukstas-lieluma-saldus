var n = 4;
function checkThis(e){
    for(var i = 0; i<n; i++){

        $("#check" + i + " .check-icon.yes").hide();
        $("#check" + i + " .check-icon.no").show();

        document.getElementById("check"+i).dataset.checked = "false";
    }

    var elem = document.getElementById("check"+e.data.ind);
    elem.dataset.checked = "true";
    $("#" + elem.id + " .check-icon.yes").show();
    $("#" + elem.id + " .check-icon.no").hide();
}

$(document).ready(function(){

    for(var i = 0; i<n; i++){
        $("#check"+i).on("click", {ind: i} , checkThis);
    }
});