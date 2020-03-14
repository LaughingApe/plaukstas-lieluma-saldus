var n = 9;
function toggleCheck(e){
    var elem = document.getElementById("check"+e.data.ind);
    if( elem.dataset.checked == "true" ){
        elem.dataset.checked = "false";
        $("#" + elem.id + " .check-icon.yes").hide();
        $("#" + elem.id + " .check-icon.no").show();
    } else {
        elem.dataset.checked = "true";
        $("#" + elem.id + " .check-icon.yes").show();
        $("#" + elem.id + " .check-icon.no").hide();
    }
}

$(document).ready(function(){

    for(var i = 0; i<n; i++){
        $("#check"+i).on("click", {ind: i} , toggleCheck);
    }
});