var n = 6;
var titles = ["Uzsniga sniedziņš balts", "Aprīļa pilieni", "Lilioma dziesma", "Jānītis ir vēl mazs", "Dzeguzes balss", "Pilsētā, kurā piedzimst vējš"];

function nextHead(e){
    var cur = parseInt( e.target.dataset.choice );
    var next = (cur+1)%n;
    console.log(cur + " -> " + next);
    e.target.dataset.choice = next;
    e.target.innerHTML = titles[next];
}

function initPoemTitles(){
    for(var i = 0; i<n; i++){
        var u = document.getElementById("head"+i);
        u.innerHTML = titles[ u.dataset.choice ];
    }
}

$(document).ready(function(){
    initPoemTitles();
    for(var i = 0; i<n; i++){
        $("#head"+i).on("click", nextHead);
    }
});