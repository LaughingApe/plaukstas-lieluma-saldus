$(document).ready(function(){
    if (localStorage.getItem("gameState") === null) {
        localStorage.gameState = 0;
    } else {
        if( localStorage.getItem("gameState") == 1) window.location = "search.html";
        if( localStorage.getItem("gameState") == 2) window.location = "finished.html";
    }

    $("#startGameBtn").on("touchup click",function(){
        localStorage.gameState = 1;
        localStorage.tasksSolved = "[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]";
        localStorage.taskOrder = "[3,11,7,0,1,2,10,9,13,12,16,4,6,15,14,5,8,17]"; // 3,4,5,0,11,15,12,2,16,7,6,1,9,8,14,13,10,17
        window.location = "/search.html";
    });

});