var video =document.getElementById("videoBg");
var bgBtn = document.getElementById("myBtn");
//API league start
var apiUrl = "https://api-football-standings.azharimm.site/leagues/"
var apiUrlStandings = "/standings?season=2021&sort=asc"
//API league End
var leagueSelect = document.getElementById("myTeam");
var leagueTeam = document.getElementById("teams");
var bundTeam = document.querySelectorAll(".bund");
var laLigaTeam = document.querySelectorAll(".la-liga");
var ligue1Team = document.querySelectorAll(".ligue-1");
var premTeam = document.querySelectorAll(".prem");
var serieATeam = document.querySelectorAll(".serie-a");
var leagueVideo ="https://www.scorebat.com/video-api/v3/team/"
var apiToken ="MTY3MzNfMTY0OTk1ODY3M19iNzQ4MzRmYTdlNjBlYmNjYWE5OWFhMDc1MDc5NjJmMWI1ZTgzZTJk";


function showTeamBund (team) {
    if (team === "1") {
        bundTeam.forEach(bund => {
            bund.classList.remove("hide");
        });
    } else 
    bundTeam.forEach(bund => {
        bund.classList.add("hide");
    });
}
function showTeamLaLiga (team) {
    if (team === "2") {
        laLigaTeam.forEach(laliga => {
            laliga.classList.remove("hide");
        });
    } else 
    laLigaTeam.forEach(laliga => {
        laliga.classList.add("hide");
    });
}
function showTeamligue1 (team) {
    if (team === "3") {
        ligue1Team.forEach(ligue1 => {
            ligue1.classList.remove("hide");
        });
    } else {
        ligue1Team.forEach(ligue1 => {
            ligue1.classList.add("hide");
        });
    }
}
function showTeamPrem (team) {
    if (team === "4") {
        premTeam.forEach(prem => {
            prem.classList.remove("hide");
        });
    } else {
        premTeam.forEach(prem => {
            prem.classList.add("hide");
        });
    }
}
function showTeamSerieA (team) {
    if (team === "5") {
    serieATeam.forEach(serieA => {
        serieA.classList.remove("hide");
    });
    } else {
        serieATeam.forEach(serieA=> {
            serieA.classList.add("hide");
        });
    }   
}

function showVideo () {
    var apiLink = leagueVideo + "/real-madrid/?token=" + apiToken

    fetch(apiLink).then(function(response) {
        if (response.ok) {
            return response.json().then(function(video){
                var videoStandings = document.getElementById("videoStandingsId");
                videoStandings = response;
            })
        } else {
            alert("video does not work")
        }
    })
}
showVideo();
function getStandings (leagueId) {
    //format the api url
    apiUrl + leagueId + apiUrlStandings

    //use fetch to make a request to the url 
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            return response.json().then(function (data) {
                console.log(data);
            })
        } else {
            alert("Error");
        }
    });
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
//Event Listeners 
leagueSelect.addEventListener("change", function (){
    var teamSelect = document.getElementById("team-card");
    teamSelect.classList.remove("hide");    
    //function for showing team
    showTeamBund(this.value);
    showTeamLaLiga(this.value);
    showTeamPrem(this.value);
    showTeamSerieA(this.value);
    showTeamligue1(this.value);
})

function leagueChangeHandler (event) {
    var leagueId = event.target.getAttribute("data-id");

    if(leagueId) {
        getStandings(leagueId);
    }
}

//leagueTeam.addEventListener("change", );
