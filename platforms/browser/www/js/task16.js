var n = 4;
function checkThis(e){

    var elem = document.getElementById("check"+e.data.ind);

    for(var i = 0; i<n; i++){
        document.getElementById("check"+i).dataset.checked = "0";
    }

    elem.dataset.checked = "1";
}

$(document).ready(function(){

    for(var i = 0; i<n; i++){
        $("#check"+i).on("click", {ind: i} , checkThis);
    }
});