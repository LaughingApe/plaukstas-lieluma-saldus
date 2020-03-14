var n = 11;

function nextImg(e){
    var cur = parseInt( e.target.dataset.choice );
    var next = (cur+1)%n;
    e.target.dataset.choice = next;
    e.target.src = "../img/task14/cilv"+next+".jpg";
}

$(document).ready(function(){
    var defaultSet = [8,3,7,1,10,4,6,2,9,5,0];
    for(var i = 0; i<n; i++){
        var elem = document.getElementById("img" + i);
        elem.dataset.choice = defaultSet[i];
        elem.src = "../img/task14/cilv"+defaultSet[i]+".jpg";
        $("#img"+i).on("click", nextImg);
    }
});