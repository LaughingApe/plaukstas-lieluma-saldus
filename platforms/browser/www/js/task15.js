var n = 8;
function checkThis(e){

    var elem = document.getElementById("check"+e.data.ind);
    if(elem.dataset.checked=="0")
        elem.dataset.checked = "1";
    else
        elem.dataset.checked = "0";
}

$(document).ready(function(){

    for(var i = 0; i<n; i++){
        $("#check"+i).on("click", {ind: i} , checkThis);
    }
});