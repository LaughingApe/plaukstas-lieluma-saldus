$(document).ready(function(){
    if (localStorage.getItem("gameState") === null) {
        localStorage.gameState = 0;
    } else {
        if( localStorage.getItem("gameState") == 1) window.location = "search.html";
        if( localStorage.getItem("gameState") == 2) window.location = "finished.html";
    }

    if( localStorage.getItem("approvedCookies")===null ){
        document.getElementById("cookieAlertOverlay").style="display:block;";
    }

    $("#startGameBtn").on("touchup click",function(){
        localStorage.gameState = 1;
        localStorage.tasksSolved = "[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]";
        localStorage.tasksUnlocked = "[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]";
        localStorage.taskOrder = "[3,11,2,0,1,10,7,9,13,12,16,4,6,15,14,8,17]"; 
        var gameNumber = "";
        for(var i = 0; i<6; i++){
            gameNumber += Math.floor((Math.random() * 10));
            if(i==2) gameNumber += " ";
        }
        localStorage.gameNumber = gameNumber;
        window.location = "number.html";
    });

    $("#agreeToCookies").on("touchup click",function(){
        localStorage.approvedCookies = 1;
        $("#cookieAlertOverlay").fadeOut(100);
    });

});