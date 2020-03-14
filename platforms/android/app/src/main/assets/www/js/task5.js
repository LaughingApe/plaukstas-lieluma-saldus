var n = 4;

function checkThis(e){
    for(var i = 0; i<n; i++){
        document.getElementById("check"+i).dataset.checked = 0;
    }

    var elem = document.getElementById("check"+e.data.ind);
    elem.dataset.checked = "1";
}

$(document).ready(function(){

    for(var i = 0; i<n; i++){
        $("#check"+i).on("click", {ind: i} , checkThis);
    }
});