var video =document.getElementById("videoBg");
var bgBtn = document.getElementById("myBtn");
var apiUrlStandings = "/standings?season=2022&sort=asc"
var premierLeague="eng.1"
var teamStandings = document.getElementById("team");
var teamSelect = document.getElementById("myTeam");

//Array for displaying your league standings
function getStandings () {
    //format the api url
    var apiUrl = "https://api-football-standings.azharimm.site/leagues/" + premierLeague + apiUrlStandings;

    //use fetch to make a request to the url 
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            return response.json().then(function (response) {
                teamStandings.innerHTML = response;
            })
        }
    })
}








function bgVideo () {
    if (video.paused) {
        video.play(); 
        bgBtn.innerHTML = "Pause";
    } else {
        video.pause();
        bgBtn.innerHTML = "Play";
    }
}




//Event Handlers
teamSelect.onchange = function () {
    var leagueTeam = document.getElementById("select-team").value;


}