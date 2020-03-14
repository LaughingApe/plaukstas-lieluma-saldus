function skiptasks(){
    localStorage.gameState = 2;
    window.location = "finished.html";
}

$(document).ready(function(){
    $("#skiptasksreal").on("touchend",skiptasks);
});