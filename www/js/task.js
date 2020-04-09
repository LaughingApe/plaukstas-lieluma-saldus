var num;


function getTaskNumber(){
    var metaNumber = document.getElementById('task-number');
    num = metaNumber.getAttribute("content");
}


// Aizsardzība pret patvaļīgu piekļūšanu uzdevumiem
function defendAgainstRandomTaskAccess(){
    var tasksUnlocked = JSON.parse( localStorage.getItem("tasksUnlocked") );
    if( tasksUnlocked[num]!=1 ) window.location = "../search.html";
}

function saveResult(){
    var solvedArr = JSON.parse( localStorage.getItem("tasksSolved") );
    solvedArr[num] = 1;
    localStorage.setItem( "tasksSolved", JSON.stringify(solvedArr) );

    switch(num){
        case "0":
            var answ = [];
            for(var i = 0; i<6; i++){
                answ[i] = parseInt(document.getElementById('input' + i).value);
            }
            localStorage.setItem( "answer"+num, JSON.stringify(answ) );
            break;
        case "1":
            var answ = [];

            var churches = document.getElementById("list").children;
            for(var i = 0; i<churches.length; i++){
                answ[i] = parseInt( churches[i].id[ churches[i].id.length - 1 ] );
            }
            localStorage.setItem( "answer"+num, JSON.stringify(answ) );
            break;
        case "2":
            var answ = [];

            for(var i = 0; i<7; i++){
                answ[i] = parseInt( document.getElementById("img"+i).dataset.choice );
            }
            localStorage.setItem( "answer"+num, JSON.stringify(answ) );
            break;
        case "3":
            localStorage.setItem( "answer"+num, document.getElementById('input').value );
            break;
        case "4":
            localStorage.setItem( "answer"+num, document.getElementById('input').value );
            break;
        case "5":
            var answ = [];

            for(var i = 0; i<4; i++){
                answ[i] = parseInt(document.getElementById("check"+i).dataset.checked);
            }
            localStorage.setItem( "answer"+num, JSON.stringify(answ) );
            break;
        case "6":
            var answ = [];

            for(var i = 0; i<6; i++){
                answ[i] = parseInt( document.getElementById("head"+i).dataset.choice );
            }
            localStorage.setItem( "answer"+num, JSON.stringify(answ) );
            break;
            case "7":
            var answ = [];

            for(var i = 0; i<4; i++){
                var boolname = document.getElementById("check"+i).dataset.checked;
                if(boolname == "true")
                    answ[i] = 1;
                else 
                    answ[i] = 0;
            }
            localStorage.setItem( "answer"+num, JSON.stringify(answ) );
            break;
        case "8":
            var answ = [];

            for(var i = 0; i<4; i++){
                var boolname = document.getElementById("check"+i).dataset.checked;
                if(boolname == "true")
                    answ[i] = 1;
                else 
                    answ[i] = 0;
            }
            localStorage.setItem( "answer"+num, JSON.stringify(answ) );
            break;
        case "9":
            var answ = [];

            for(var i = 0; i<9; i++){
                var boolname = document.getElementById("check"+i).dataset.checked;
                if(boolname == "true")
                    answ[i] = 1;
                else 
                    answ[i] = 0;
            }
            localStorage.setItem( "answer"+num, JSON.stringify(answ) );
            break;
        case "10":
            var answ = [];

            for(var i = 0; i<3; i++){
                answ[i] = parseInt(document.getElementById("check"+i).dataset.checked);
            }
            localStorage.setItem( "answer"+num, JSON.stringify(answ) );
            break;
        case "11":
            var answ = [];

            for(var i = 0; i<3; i++){
                answ[i] = parseInt(document.getElementById("check"+i).dataset.checked);
            }
            localStorage.setItem( "answer"+num, JSON.stringify(answ) );
            break;
            case "12":
            var answ = [];

            for(var i = 0; i<3; i++){
                answ[i] = parseInt(document.getElementById("check"+i).dataset.checked);
            }
            localStorage.setItem( "answer"+num, JSON.stringify(answ) );
            break;
        case "12":
            var answ = [];

            for(var i = 0; i<3; i++){
                answ[i] = parseInt(document.getElementById("check"+i).dataset.checked);
            }
            localStorage.setItem( "answer"+num, JSON.stringify(answ) );
            break;
        case "13":
            localStorage.setItem( "answer"+num, document.getElementById('input').value );
            break;
        case "14":
            var answ = [];

            for(var i = 0; i<11; i++){
                answ[i] = parseInt( document.getElementById("img"+i).dataset.choice );
            }
            localStorage.setItem( "answer"+num, JSON.stringify(answ) );
            break;
        case "15":
            var answ = [];

            for(var i = 0; i<8; i++){
                answ[i] = parseInt(document.getElementById("check"+i).dataset.checked);
            }
            localStorage.setItem( "answer"+num, JSON.stringify(answ) );
            break;
        case "16":
            var answ = [];

            for(var i = 0; i<4; i++){
                answ[i] = parseInt(document.getElementById("check"+i).dataset.checked);
            }
            localStorage.setItem( "answer"+num, JSON.stringify(answ) );
            break;
        case "17":
            localStorage.setItem( "answer"+num, document.getElementById('input').value );
            break;

    }

    var tasksUnlocked = JSON.parse( localStorage.getItem("tasksUnlocked") );
    tasksUnlocked[num] = 2;
    localStorage.setItem("tasksUnlocked", JSON.stringify(tasksUnlocked) );

    window.location = "../search.html";
}

$(document).ready(function(){
    getTaskNumber();
    defendAgainstRandomTaskAccess();

    $("#saveAnswerBtn").on("click",saveResult);

    $(".readingBtn").on("click",function(){
        $(".reading").toggle();
        $(".task").toggle();
    });

    
});