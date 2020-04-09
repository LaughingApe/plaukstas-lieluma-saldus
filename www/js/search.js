var secondsBetweenGPSChecks = 3;
var locations;

function getDistanceFromLatLon(lat1, lon1, lat2, lon2){  // generally used geo measurement function
    var R = 6378.137; // Radius of earth in KM
    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d * 1000; // meters
}

function checkPosition(position){
    //alert("I could find you indeed!");
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    $(".location-icon").animate({
        marginTop: "-5vh",
        marginBottom: "5vh"
    },400,function(){
        $(".location-icon").animate({
            marginTop: "0vh",
            marginBottom: "0vh"
        },400);
    });

    var tasksSolved = JSON.parse( localStorage.getItem("tasksSolved") );
    var taskOrder = JSON.parse( localStorage.getItem("taskOrder") );
    var closestId = -1;
    for(var i of taskOrder)
        if( tasksSolved[i] == 0 ) { closestId=i; break; }
    
    if( closestId==-1 ){
        localStorage.gameState = 2;
        window.location = "finished.html";
    }


    for(var i of taskOrder){
        if( tasksSolved[i]==0 )
            if( getDistanceFromLatLon(lat,lon,locations[i].lat,locations[i].lon)-locations[i].radius < 
                getDistanceFromLatLon(lat,lon,locations[closestId].lat,locations[closestId].lon)-locations[closestId].radius  ){
                    closestId = i;
                }
    }

    
    var dist = Math.round(getDistanceFromLatLon(lat,lon,locations[closestId].lat,locations[closestId].lon))-locations[closestId].radius;
    

    $("#distance").html( Math.max(0,dist)+"m" );
    
    if( dist<=0 ){
        var tasksUnlocked = JSON.parse( localStorage.getItem("tasksUnlocked") );
        tasksUnlocked[closestId] = 1;
        localStorage.setItem("tasksUnlocked", JSON.stringify(tasksUnlocked) );
        window.location = "tasks/task"+closestId+".html";
    }
}

function errorInFinding(){
    alert("I can't find you!");
}

function animateDots(state){
    var dotStr = "";
    for(var i = 0; i<state; i++) dotStr += ".";
    $(".dotdotdot").html(dotStr);
    setTimeout(function(){
        animateDots((state+1)%4);
    },500);
}

function searchPosition(){
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };

    //alert("will search!");
    navigator.geolocation.getCurrentPosition(checkPosition, errorInFinding, { maximumAge: (secondsBetweenGPSChecks-1)*1000, enableHighAccuracy: true });
    //alert("did search!");

    setTimeout(function(){
        searchPosition();
    },secondsBetweenGPSChecks * 1000);
}

function skiptasks(){
    window.location = "skiptasks.html";
}

$(document).ready(function(){
    document.getElementById("numberPlace").innerHTML = localStorage.getItem("gameNumber");

    $.getJSON( "locations.json", function( json ) {
        locations = json;
    });
    $("#skiptasks").on("touchend",skiptasks);

    searchPosition();
    //animateDots(0);
});