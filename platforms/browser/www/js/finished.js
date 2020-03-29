var maxscore = [6,3,7,1,1,1,6,4,1,'4,5',1,1,1,1,'5,5',4,1,1];
var correct;

function generateAnswerView(){
    var content = "<h1>Jūsu atbildes</h1>";

    var solvedArr = JSON.parse( localStorage.getItem("tasksSolved") );
    var taskOrder = JSON.parse( localStorage.getItem("taskOrder") );
    for(var ind = 0; ind<taskOrder.length; ind++){
        i = taskOrder[ind];
        content += "<b style='display:block;'>" + (ind+1) + ". uzdevums (maks. punkti — " + maxscore[i] + ")</b>";
        if( solvedArr[i]==0 ){
            content += "<p>Šo uzdevumu neesat izpildījuši.</p>";
            continue;
        }

        var ans = JSON.parse( localStorage.getItem("answer" + i) );

        switch(i){
            case 0:
                content += '<img src="img/task0/jrozentals-task.png" class="big-img"/>';
                content += '<p>Rozentāla māte jaunībā — <i>' + ans[0] + "</i><br/>";
                content += 'Rozentāla tēvs jaunībā — <i>' + ans[1] + "</i><br/>";
                content += 'Rozentāla māte vecumdienās — <i>' + ans[2] + "</i><br/>";
                content += 'Rozentāla tēvs vecumdienās — <i>' + ans[3] + "</i><br/>";
                content += 'Skolotājs Štammers — <i>' + ans[4] + "</i><br/>";
                content += 'Kaimiņš, turīgais „Putru” māju saimnieks — <i>' + ans[5] + "</i><br/></p>";
                break;
            case 1:
                content += '<p>Baznīcu attēli hronoloģiskā secībā.</p>';
                for(var j = 0; j<4; j++)
                    content += '<img src="img/task1/church' + ans[j] + '.jpg" class="centered-img"/>';
                break;
            case 2:
                content += '<p>Vecvārdi.</p>';   
                var displayOrder = [1,2,0,4,3,6,5];
                var words = ['šķiņķis','naģe','bambāle','grāpis','rinduks','ambīlis','čočis'];
                for(var j = 0; j<7; j++){
                    var u = displayOrder[j];
                    content += '<div class="img-title">' + words[u] + '</div>';
                    content += '<img src="img/task2/img' + ans[u] + '.jpg" class="centered-img"/>';
                }
                break;
            case 3:
                content += '<p>Cik reižu dziesmas „Saldus saule” piedziedājumā minēts vārds „saule”?</p>';
                content += '<div class="answer-number"><i>' + ans + '</i></div>';
                break;
            case 4:
                content += '<p>Cik pavisam kopā šūniņu ir redzamas strūklakā?</p>';
                content += '<div class="answer-number"><i>' + ans + '</i></div>';
                break;
            case 5:   
                var words = ['austas','mezglotas','adītas','tamborētas'];
                for(var j = 0; j<4; j++){
                    if( ans[j]==1 ){
                        content += '<div class="img-title">' + words[j] + '</div>';
                        content += '<img src="img/task5/img' + j + '.jpg" class="centered-img"/>';
                    }
                }
                break;
            case 6:
                content += '<p>Dzejoļu nosaukumi.</p>';
                var displayOrder = [5,0,2,3,4,1];
                var titles = ['Uzsniga sniedziņš balts','Aprīļa pilieni','Lilioma dziesma','Jānītis ir vēl mazs','Dzeguzes balss','Pilsētā, kurā piedzimst vējš'];
                var contents = ['Uzsniga sniedziņš balts','Aprīlim, aprīlim','Atkal, atkal ir debesis pušu','Jānītis ir vēl mazs','Starp mašīnām, motoriem, meitenēm','Pilsētā, kurā piedzimst vējš'];
                for(var j = 0; j<6; j++){
                    var u = displayOrder[j];
                    content += '<div class="img-title"><i>' + titles[u] + '</i></div>';
                    content += '<div class="center-text">' + contents[u] + '...</div>';
                }
                break;
            case 7:
                content += '<p>Saldus bites ķermeņa daļas.</p>';
                var words = ['spārni','dzelonis','taustekļi','kājas'];
                content += '<p><i>';
                var b = false;
                for(var j = 0; j<4; j++){
                    if( ans[j]==1 ){
                        if(b==true) {content += ', ';} else b = true;

                        content += words[j];
                    }
                }
                content += '</i></p>';
                break;
            case 8:
                content += '<p>Kādēļ bļodas sakusušas kopā?</p>';
                var words = ['Pārāk liels trauku mitrums','Pārāk zema kurināšanas temperatūra','Pārāk augsta kurināšanas temperatūra','Neveiksmīgs trauku izvietojums ceplī'];
                content += '<p><i>';
                for(var i = 0; i<4; i++)
                    if( ans[i]==1 )
                        content += words[i];
                content += '</i></p>';
                break;
            case 9:
                content += '<p>Kuras zivis nedzīvo Ciecerē?</p>';
                var words = ['asaris','līdaka','rauda','sams','vēdzele','ķīsis','lasis','alata','grundulis','akmeņgrauzis'];
                content += '<p><i>';
                var b = false;
                for(var j = 0; j<9; j++){
                    if( ans[j]==1 ){
                        if(b==true) {content += ', ';} else b = true;

                        content += words[j];
                    }
                }
                content += '</i></p>';
                break;
            case 10:
                content += '<p>Fasādei atbilstošā glezna.</p>';
                content += '<img src="img/task10-11-12/fasade0.jpg" class="centered-img"/>';
                var paintingNr = 0;
                for(var i = 0; i<3; i++) if(ans[i]==1) paintingNr = i;
                content += '<img src="img/task10-11-12/painting' + paintingNr + '.jpg" class="centered-img"/>';
                break;
            case 11:
                content += '<p>Fasādei atbilstošā glezna.</p>';
                content += '<img src="img/task10-11-12/fasade1.png" class="centered-img"/>';
                var paintingNr = 0;
                for(var i = 0; i<3; i++) if(ans[i]==1) paintingNr = i;
                content += '<img src="img/task10-11-12/painting' + paintingNr + '.jpg" class="centered-img"/>';
                break;
            case 12:
                content += '<p>Fasādei atbilstošā glezna.</p>';
                content += '<img src="img/task10-11-12/fasade2.jpg" class="centered-img"/>';
                var paintingNr = 0;
                for(var i = 0; i<3; i++) if(ans[i]==1) paintingNr = i;
                content += '<img src="img/task10-11-12/painting' + paintingNr + '.jpg" class="centered-img"/>';
                break;
            case 13:
                content += '<p>Cik iekšpagalmu ir Saldus mūzikas un mākslas skolai?</p>';
                content += '<div class="answer-number"><i>' + ans + '</i></div>';
                break;
            case 14:   
                var displayOrder = [7,0,9,2,3,4,10,5,6,8,1];
                var words = ['Līga Zeļģe','Liene Gāliņa','Edgars Pujāts','Marģers Eglinskis','Agnese Jēkabsone','Gints Grāvelis','Mārtiņš Liepa','Jānis Blūms','Andris Ērglis','Kristaps Sotnieks','Līga Velvere'];
                for(var j = 0; j<11; j++){
                    var u = displayOrder[j];
                    content += '<div class="img-title">' + words[u] + '</div>';
                    content += '<img src="img/task14/cilv' + ans[u] + '.jpg" class="centered-img"/>';
                }
                break;
            case 15:
                content += '<p>Kuras gleznas nav J. Rozentāla darbi?</p>';
                var titles = ['Tirgus','Princese ar pērtiķi','Pavasarī','Studija gleznai (Itālija)','Pašportrets','Kristus svētī bērniņus','Miests Kurzemē','Peldētāji zēni'];
                for(var i = 0; i<8; i++){
                    if( ans[i]==1 ){
                        content += '<div class="img-title"><i>' + titles[i] + '</i></div>';
                        content += '<img src="img/task15/p' + i + '.jpg" class="centered-img"/>';
                    }
                }
                break;
            case 16:
                content += '<p>Autobusa pieturai tuvākais koks.</p>';
                var titles = ['Baltais zīdkoks','Parastā apse','Parastais dižskābardis','Parastā goba'];
                for(var i = 0; i<4; i++){
                    if( ans[i]==1 ){
                        content += '<div class="img-title"><i>' + titles[i] + '</i></div>';
                        content += '<img src="img/task16/k' + i + '.jpg" class="centered-img"/>';
                    }
                }
                break;
            case 17:
                content += '<p>Ziedlapiņas uz durvīm</p>';
                content += '<div class="answer-number"><i>' + ans + '</i></div>';
                break;
        }

    }

    document.getElementById('task-list').innerHTML = content;
}

function generateScore(){
    var content = "<h1 style='text-align:center;'>Iegūtie punkti</h1>";

    var score = 0;
    var solvedArr = JSON.parse( localStorage.getItem("tasksSolved") );

    for(var i = 0; i<solvedArr.length; i++){
        if( solvedArr[i]==0 ) continue;
        var ans = JSON.parse( localStorage.getItem("answer" + i) );

        var c = correct[i];

        //content += 'Pirms ' + i + ': ' + score + '<br/>';

        switch(i){
            case 0: 
                for(var j = 0; j<6; j++) 
                    if(ans[j]==c[j]) score++;
                break;
            case 1:
                var order = [];
                for(var j = 0; j<4; j++) order[ans[j]] = j;
                var u = 0;
                for(var j = 0; j<4; j++){
                    for(var k = j+1; k<4; k++){
                        if( ans[j]<ans[k] ) u++;
                    }
                }
                score += u/2.0;
                break;
            case 2:
                for(var j = 0; j<7; j++) 
                    if(ans[j]==c[j]) score++;
                break;
            case 3:
                if( ans==c ) score++; 
                break;
            case 4:
                if( ans==c ) score++; 
                break;
            case 5:
                u = 1;
                for(var j = 0; j<4; j++) 
                    if(ans[j]!=c[j]) u = 0;
                score += u;
                break;
            case 6:
                for(var j = 0; j<6; j++) 
                    if(ans[j]==c[j]) score++;
                break;
            case 7:
                for(var j = 0; j<4; j++) 
                    if(ans[j]==c[j]) score++;
                break;
            case 8:
                var u = 1;
                for(var j = 0; j<4; j++) 
                    if(ans[j]!=c[j]) u = 0;
                score += u;
                break;
            case 9:
                var u = 0;
                for(var j = 0; j<9; j++)
                    if(ans[j]==c[j]) u += 0.5;
                score += u;
                break;
            case 10:
                var u = 1;
                for(var j = 0; j<3; j++) 
                    if(ans[j]!=c[j]) u = 0;
                score += u;
                break;
            case 11:
                var u = 1;
                for(var j = 0; j<3; j++) 
                    if(ans[j]!=c[j]) u = 0;
                score += u;
                break;
            case 12:
                var u = 1;
                for(var j = 0; j<3; j++) 
                    if(ans[j]!=c[j]) u = 0;
                score += u;
                break;
            case 13:
                if( ans==c ) score++; 
                break;
            case 14:
                var u = 0;
                for(var j = 0; j<11; j++)
                    if(ans[j]==c[j]) u += 0.5;
                score += u;
                break;
            case 15:
                var u = 0;
                for(var j = 0; j<8; j++)
                    if(ans[j]==c[j]) u += 0.5;
                score += u;
                break;
            case 16:
                var u = 1;
                for(var j = 0; j<4; j++) 
                    if(ans[j]!=c[j]) u = 0;
                score += u;
                break;
            case 17:
                if( ans==c ) score++; 
                break;
        }
    }

    content += '<div class="answer-number score"><b>' + score + '</b></div>';
    document.getElementById('score-box').innerHTML = content;
}

$(document).ready(function(){
    document.getElementById("numberPlace").innerHTML = localStorage.getItem("gameNumber");
    
    $.getJSON( "correct-answers.json", function( json ) {
        correct = json;
        generateScore();
        generateAnswerView();
    });
});