function endgame(){
    localStorage.removeItem("gameState");
    localStorage.removeItem("tasksSolved");
    localStorage.removeItem("tasksUnlocked");
    localStorage.removeItem("taskOrder");
    localStorage.removeItem("gameNumber");
    for(var i = 0; i<17; i++){
        localStorage.removeItem("answer"+i);
    }
    window.location = "index.html";
}

$(document).ready(function(){
    $("#endgame").on("touchend",endgame);
});