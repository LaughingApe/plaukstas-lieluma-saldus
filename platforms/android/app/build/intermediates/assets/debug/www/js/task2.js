var n = 7;

function nextImg(e){
    var cur = parseInt( e.target.dataset.choice );
    var next = (cur+1)%n;
    console.log(cur + " -> " + next);
    e.target.dataset.choice = next;
    e.target.src = "../img/task2/img"+next+".jpg";
}

$(document).ready(function(){
    for(var i = 0; i<n; i++){
        $("#img"+i).on("click", nextImg);
    }
});