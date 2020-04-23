var score = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var maxscore = [6,3,7,1,1,1,6,4,1,'4.5',1,1,1,1,'5.5',4,1,1];
var correct;

function generateAnswerView(){
    var content = "<h1>Jūsu atbildes</h1>";

    var solvedArr = JSON.parse( localStorage.getItem("tasksSolved") );
    var taskOrder = JSON.parse( localStorage.getItem("taskOrder") );
    for(var ind = 0; ind<taskOrder.length; ind++){
        i = taskOrder[ind];
        content += "<b style='display:block;'>" + (ind+1) + ". uzdevums (" + score[i] + "/" + maxscore[i] + ")</b>";
        if( solvedArr[i]==0 ){
            content += "<p>Šo uzdevumu neesat izpildījuši.</p>";
            continue;
        }

        var ans = null;
        if( localStorage.getItem("answer" + i)!==null && localStorage.getItem("answer" + i)!=="" ) 
            ans = JSON.parse( localStorage.getItem("answer" + i) );

        var cor = correct[i];

        switch(i){
            case 0:
                var correctClass = [], correcectAnswer = [];
                for(var j in cor){
                    correctClass[j] = (ans[j]==cor[j])?"correct-answer":"wrong-answer";
                    correcectAnswer[j] = (ans[j]==cor[j])?"":(" (pareizi: "+cor[j]+")");
                }
                content += '<img src="img/task0/jrozentals-task.png" class="big-img"/>';
                content += '<p>Rozentāla māte jaunībā — <i class="' + correctClass[0] + '">' + ans[0] + "</i>" + correcectAnswer[0] + "<br/>";
                content += 'Rozentāla tēvs jaunībā — <i class="' + correctClass[1] + '">' + ans[1] + "</i>" + correcectAnswer[1] + "<br/>";
                content += 'Rozentāla māte vecumdienās — <i class="' + correctClass[2] + '">' + ans[2] + "</i>" + correcectAnswer[2] + "<br/>";
                content += 'Rozentāla tēvs vecumdienās — <i class="' + correctClass[3] + '">' + ans[3] + "</i>" + correcectAnswer[3] + "<br/>";
                content += 'Skolotājs Štammers — <i class="' + correctClass[4] + '">' + ans[4] + "</i>" + correcectAnswer[4] + "<br/>";
                content += 'Kaimiņš, turīgais „Putru” māju saimnieks — <i class="' + correctClass[5] + '">' + ans[5] + "</i>" + correcectAnswer[5] + "<br/></p>";
                break;
            case 1:
                content += '<p>Baznīcu attēli hronoloģiskā secībā.</p>';
                content += '<p class="center"><b>Secība tavā atbildē:</b></p>';
                for(var j in ans)
                    content += '<img src="img/task1/church' + ans[j] + '.jpg" class="centered-img"/>';
                content += '<p class="center"><b>Pareizā secība:</b></p>';
                for(var j in cor)
                    content += '<img src="img/task1/church' + cor[j] + '.jpg" class="centered-img"/>';
                break;
            case 2:
                content += '<p>Vecvārdi.</p>';   
                var displayOrder = [1,2,0,4,3,6,5];
                var words = ['šķiņķis','naģe','bambāle','grāpis','rinduks','ambīlis','čočis'];
                
                var correctClass = [];
                for(var u of displayOrder){
                    correctClass[u] = (ans[u]==cor[u])?"correct-answer":"wrong-answer";
                }

                for(var u of displayOrder){
                    content += '<div class="img-title"><i class="' + correctClass[u] + '">' + words[u] + '</i></div>';
                    content += '<div class="result-image-grid">';
                    content += '<p class="center">Tava atbilde:</p>';
                    content += '<p class="center">Pareizā atbilde:</p>';
                    content += '<img src="img/task2/img' + ans[u] + '.jpg" class="in-grid-img"/>';
                    content += '<img src="img/task2/img' + cor[u] + '.jpg" class="in-grid-img"/>';
                    content += '</div>'
                }

                break;
            case 3:
                content += '<p>Cik reižu dziesmas „Saldus saule” piedziedājumā minēts vārds „saule”?</p>';
                if( ans==cor )
                    content += '<div class="answer-number"><i class="correct-answer">' + ans + '</i></div>';
                else 
                    content += '<div class="answer-number"><i class="wrong-answer">' + ans + '</i> (pareizi: ' + cor + ')</div>';
                break;
            case 4:
                content += '<p>Cik pavisam kopā šūniņu ir redzamas strūklakā?</p>';
                if( ans==cor )
                    content += '<div class="answer-number"><i class="correct-answer">' + ans + '</i></div>';
                else 
                    content += '<div class="answer-number"><i class="wrong-answer">' + ans + '</i> (pareizi: ' + cor + ')</div>';
                break;
                break;
            case 5:   
                // ŠIS UZDEVUMS IR IZŅEMTS
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
                
                var correctClass = [], correcectAnswer = [];
                for(var u of displayOrder){
                    correctClass[u] = (ans[u]==cor[u])?"correct-answer":"wrong-answer";
                    correcectAnswer[u] = (ans[u]==cor[u])?"":("<br/>(pareizi: "+titles[cor[u]]+")");
                }
                for(var u of displayOrder){
                    content += '<div class="img-title"><i class="' + correctClass[u] + '">' + titles[ans[u]] + '</i>' + correcectAnswer[u] + '</div>';
                    content += '<div class="center-text">' + contents[u] + '...</div>';
                }
                break;
            case 7:
                content += '<p>Saldus bites ķermeņa daļas.</p>';
                var words = ['spārni','dzelonis','taustekļi','kājas'];
                content += '<p><b>Tava atbilde:</b></p>';
                content += '<p><i>';
                var b = false;
                for(var j = 0; j<4; j++){
                    if( ans[j]==1 ){
                        if(b==true) {content += ', ';} else b = true;
                        content += words[j];
                    }
                }
                content += '</i></p>';
                content += '<p><b>Pareizā atbilde:</b></p>';
                content += '<p><i>';
                var b = false;
                for(var j = 0; j<4; j++){
                    if( cor[j]==1 ){
                        if(b==true) {content += ', ';} else b = true;
                        content += words[j];
                    }
                }
                content += '</i></p>';
                break;
            case 8:
                content += '<p>Kādēļ bļodas sakusušas kopā?</p>';
                var words = ['Pārāk liels trauku mitrums','Pārāk zema kurināšanas temperatūra','Pārāk augsta kurināšanas temperatūra','Neveiksmīgs trauku izvietojums ceplī'];
                var correctNum = 0;
                var answerNum = 0;
                for(var j in ans){ 
                    if( ans[j] == 1 ) answerNum = j;
                    if( cor[j] == 1 ) correctNum = j;
                }
                if( answerNum==correctNum )
                    content += '<p><i class="correct-answer">'+words[answerNum]+'</i></p>';
                else{
                    content += '<p><i class="wrong-answer">'+words[answerNum]+'</i><br/>Pareizi: ' + words[correctNum] + '</p>';
                }
                break;
            case 9:
                content += '<p>Kuras zivis nedzīvo Ciecerē?</p>';
                var words = ['asaris','līdaka','rauda','sams','vēdzele','ķīsis','lasis','alata','grundulis','akmeņgrauzis'];
                content += '<p><b>Tava atbilde:</b></p>';
                content += '<p><i>';
                var b = false;
                for(var j in ans){
                    if( ans[j]==1 ){
                        if(b==true) {content += ', ';} else b = true;
                        content += words[j];
                    }
                }
                content += '</i></p>';
                content += '<p><b>Pareizā atbilde:</b></p>';
                content += '<p><i>';
                var b = false;
                for(var j in cor){
                    if( cor[j]==1 ){
                        if(b==true) {content += ', ';} else b = true;
                        content += words[j];
                    }
                }
                content += '</i></p>';
                break;
            case 10:
                content += '<p>Fasādei atbilstošā glezna.</p>';
                content += '<img src="img/task10-11-12/fasade0.jpg" class="centered-img"/>';
                var answerNum = 0;
                var correctNum = 0;
                for(var j in ans){
                    if(ans[j]==1) answerNum = j;
                    if(cor[j]==1) correctNum = j;
                }
                if( answerNum==correctNum ){
                    content += '<img src="img/task10-11-12/painting' + answerNum + '.jpg" class="centered-img"/>';
                } else {
                    content += '<p class="center"><b>Tava atbilde:</b></p>';
                    content += '<img src="img/task10-11-12/painting' + answerNum + '.jpg" class="centered-img"/>';
                    content += '<p class="center"><b>Pareizā atbilde:</b></p>';
                    content += '<img src="img/task10-11-12/painting' + correctNum + '.jpg" class="centered-img"/>';
                }
                break;
            case 11:
                content += '<p>Fasādei atbilstošā glezna.</p>';
                content += '<img src="img/task10-11-12/fasade1.png" class="centered-img"/>';
                var answerNum = 0;
                var correctNum = 0;
                for(var j in ans){
                    if(ans[j]==1) answerNum = j;
                    if(cor[j]==1) correctNum = j;
                }
                if( answerNum==correctNum ){
                    content += '<img src="img/task10-11-12/painting' + answerNum + '.jpg" class="centered-img"/>';
                } else {
                    content += '<p class="center"><b>Tava atbilde:</b></p>';
                    content += '<img src="img/task10-11-12/painting' + answerNum + '.jpg" class="centered-img"/>';
                    content += '<p class="center"><b>Pareizā atbilde:</b></p>';
                    content += '<img src="img/task10-11-12/painting' + correctNum + '.jpg" class="centered-img"/>';
                }
                break;
            case 12:
                content += '<p>Fasādei atbilstošā glezna.</p>';
                content += '<img src="img/task10-11-12/fasade2.jpg" class="centered-img"/>';
                var answerNum = 0;
                var correctNum = 0;
                for(var j in ans){
                    if(ans[j]==1) answerNum = j;
                    if(cor[j]==1) correctNum = j;
                }
                if( answerNum==correctNum ){
                    content += '<img src="img/task10-11-12/painting' + answerNum + '.jpg" class="centered-img"/>';
                } else {
                    content += '<p class="center"><b>Tava atbilde:</b></p>';
                    content += '<img src="img/task10-11-12/painting' + answerNum + '.jpg" class="centered-img"/>';
                    content += '<p class="center"><b>Pareizā atbilde:</b></p>';
                    content += '<img src="img/task10-11-12/painting' + correctNum + '.jpg" class="centered-img"/>';
                }
                break;
            case 13:
                content += '<p>Cik iekšpagalmu ir Saldus mūzikas un mākslas skolai?</p>';
                if( ans==cor )
                    content += '<div class="answer-number"><i class="correct-answer">' + ans + '</i></div>';
                else 
                    content += '<div class="answer-number"><i class="wrong-answer">' + ans + '</i> (pareizi: ' + cor + ')</div>';
                break;
            case 14:   
                var displayOrder = [7,0,9,2,3,4,10,5,6,8,1];
                var words = ['Līga Zeļģe','Liene Gāliņa','Edgars Pujāts','Marģers Eglinskis','Agnese Jēkabsone','Gints Grāvelis','Mārtiņš Liepa','Jānis Blūms','Andris Ērglis','Kristaps Sotnieks','Līga Velvere'];
 
                var correctClass = [];
                for(var u of displayOrder){
                    correctClass[u] = (ans[u]==cor[u])?"correct-answer":"wrong-answer";
                }
                for(var u of displayOrder){
                    content += '<div class="img-title"><i class="' + correctClass[u] + '">' + words[u] + '</i></div>';
                    content += '<div class="result-image-grid">';
                    content += '<p class="center">Tava atbilde:</p>';
                    content += '<p class="center">Pareizā atbilde:</p>';
                    content += '<img src="img/task14/cilv' + ans[u] + '.jpg" class="in-grid-img"/>';
                    content += '<img src="img/task14/cilv' + cor[u] + '.jpg" class="in-grid-img"/>';
                    content += '</div>'
                }
                break;
            case 15:
                content += '<p>Kuras gleznas nav J. Rozentāla darbi?</p>';
                var titles = ['Tirgus','Princese ar pērtiķi','Pavasarī','Studija gleznai (Itālija)','Pašportrets','Kristus svētī bērniņus','Miests Kurzemē','Peldētāji zēni'];
                content += '<p class="center"><b>Tavas atbildes:</b></p>';
                for(var j in ans){
                    if( ans[j]==1 ){
                        var correctnessClass = (ans[j]==cor[j])?"correct-answer":"wrong-answer";
                        content += '<div class="img-title"><i class="' + correctnessClass + '">' + titles[j] + '</i></div>';
                        content += '<img src="img/task15/p' + j + '.jpg" class="centered-img"/>';
                    }
                }
                content += '<p class="center"><b>Pareizās atbildes:</b></p>';
                for(var j in cor){
                    if( cor[j]==1 ){
                        content += '<div class="img-title"><i>' + titles[j] + '</i></div>';
                        content += '<img src="img/task15/p' + j + '.jpg" class="centered-img"/>';
                    }
                }
                break;
            case 16:
                content += '<p>Autobusa pieturai tuvākais koks.</p>';
                var titles = ['Baltais zīdkoks','Parastā apse','Parastais dižskābardis','Parastā goba'];
                content += '<p class="center"><b>Tava atbilde:</b></p>';
                for(var j in ans){
                    if( ans[j]==1 ){
                        var correctnessClass = (ans[j]==cor[j])?"correct-answer":"wrong-answer";
                        content += '<div class="img-title"><i class="' + correctnessClass + '">' + titles[j] + '</i></div>';
                        content += '<img src="img/task16/k' + j + '.jpg" class="centered-img"/>';
                    }
                }
                content += '<p class="center"><b>Pareizā atbilde:</b></p>';
                for(var j in ans){
                    if( cor[j]==1 ){
                        content += '<div class="img-title"><i>' + titles[j] + '</i></div>';
                        content += '<img src="img/task16/k' + j + '.jpg" class="centered-img"/>';
                    }
                }
                break;
            case 17:
                content += '<p>Ziedlapiņas uz durvīm</p>';
                if( ans==cor )
                    content += '<div class="answer-number"><i class="correct-answer">' + ans + '</i></div>';
                else 
                    content += '<div class="answer-number"><i class="wrong-answer">' + ans + '</i> (pareizi: ' + cor + ')</div>';
                break;
                break;
        }

    }

    document.getElementById('task-list').innerHTML = content;
}

function generateScore(){
    var content = "<h1 style='text-align:center;'>Iegūtie punkti</h1>";

    var totalScore = 0;
    var solvedArr = JSON.parse( localStorage.getItem("tasksSolved") );

    for(var i = 0; i<solvedArr.length; i++){
        if( solvedArr[i]==0 ) continue;
        var ans = null;
        if( localStorage.getItem("answer" + i)!==null && localStorage.getItem("answer" + i)!=="" ) 
            ans = JSON.parse( localStorage.getItem("answer" + i) );

        var c = correct[i];

        switch(i){
            case 0: 
                for(var j = 0; j<6; j++) 
                    if(ans[j]==c[j]) score[i]++;
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
                score[i] += u/2.0;
                break;
            case 2:
                for(var j = 0; j<7; j++) 
                    if(ans[j]==c[j]) score[i]++;
                break;
            case 3:
                if( ans==c ) score[i]++; 
                break;
            case 4:
                if( ans==c ) score[i]++; 
                break;
            case 5:
                var u = 1;
                for(var j = 0; j<4; j++) 
                    if(ans[j]!=c[j]) u = 0;
                score[i] += u;
                break;
            case 6:
                for(var j = 0; j<6; j++) 
                    if(ans[j]==c[j]) score[i]++;
                break;
            case 7:
                for(var j = 0; j<4; j++) 
                    if(ans[j]==c[j]) score[i]++;
                break;
            case 8:
                var u = 1;
                for(var j = 0; j<4; j++) 
                    if(ans[j]!=c[j]) u = 0;
                score[i] += u;
                break;
            case 9:
                var u = 0;
                for(var j = 0; j<9; j++)
                    if(ans[j]==c[j]) u += 0.5;
                score[i] += u;
                break;
            case 10:
                var u = 1;
                for(var j = 0; j<3; j++) 
                    if(ans[j]!=c[j]) u = 0;
                score[i] += u;
                break;
            case 11:
                var u = 1;
                for(var j = 0; j<3; j++) 
                    if(ans[j]!=c[j]) u = 0;
                score[i] += u;
                break;
            case 12:
                var u = 1;
                for(var j = 0; j<3; j++) 
                    if(ans[j]!=c[j]) u = 0;
                score[i] += u;
                break;
            case 13:
                if( ans==c ) score[i]++; 
                break;
            case 14:
                var u = 0;
                for(var j = 0; j<11; j++)
                    if(ans[j]==c[j]) u += 0.5;
                score[i] += u;
                break;
            case 15:
                var u = 0;
                for(var j = 0; j<8; j++)
                    if(ans[j]==c[j]) u += 0.5;
                score[i] += u;
                break;
            case 16:
                var u = 1;
                for(var j = 0; j<4; j++) 
                    if(ans[j]!=c[j]) u = 0;
                score[i] += u;
                break;
            case 17:
                if( ans==c ) score[i]++; 
                break;
        }
    }
    for(var s of score) totalScore+=s;

    content += '<div class="answer-number score"><b>' + totalScore + '</b></div>';
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