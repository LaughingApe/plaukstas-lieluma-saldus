var n = 4;

function sendDownSortable(e){
    $("#item-"+e.data.ind).insertAfter(  $("#item-"+e.data.ind).next()  );
}
function sendUpSortable(e){
    $("#item-"+e.data.ind).insertBefore(  $("#item-"+e.data.ind).prev()  );
}

$(document).ready(function(){
    for(var i = 0; i<n; i++){
        $("#item-"+i+" .down").on("click", {ind: i} ,sendDownSortable);
        $("#item-"+i+" .up").on("click", {ind: i} ,sendUpSortable);
    }
});