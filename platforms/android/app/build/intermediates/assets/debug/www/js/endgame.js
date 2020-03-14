function endgame(){
    localStorage.gameState = 0;
    localStorage.tasksSolved = "[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]";
    for(var i = 0; i<18; i++){
        localStorage.setItem("answer"+i,"");
    }
    window.location = "index.html";
}

$(document).ready(function(){
    $("#endgame").on("touchend",endgame);
});