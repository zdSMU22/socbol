var video =document.getElementById("videoBg");
var bgBtn = document.getElementById("myBtn");
//API league start
var apiUrl = "https://api-football-standings.azharimm.site/leagues/"
var apiUrlStandings = "/standings?season=2021&sort=asc"
var winRate = document.getElementById("wins");
var loseRate = document.getElementById("losses");
var tieRate = document.getElementById("draws");
var gpRate = document.getElementById("games-played");
var rankRate = document.getElementById("rankStandings");
var orRate = document.getElementById("record");
var displaySeason = document.getElementById("team");
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
var teamLogo = document.getElementById("logos");
var selectYourLeague = document.querySelectorAll("[data-id]");

function showTeamBund (team) {
    if (team === "0") {
        bundTeam.forEach(bund => {
            bund.classList.remove("hide");
        });
    } else 
    bundTeam.forEach(bund => {
        bund.classList.add("hide");
    });
}
function showTeamLaLiga (team) {
    if (team === "1") {
        laLigaTeam.forEach(laliga => {
            laliga.classList.remove("hide");
        });
    } else 
    laLigaTeam.forEach(laliga => {
        laliga.classList.add("hide");
    });
}
function showTeamligue1 (team) {
    if (team === "2") {
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
    if (team === "3") {
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
    if (team === "4") {
    serieATeam.forEach(serieA => {
        serieA.classList.remove("hide");
    });
    } else {
        serieATeam.forEach(serieA=> {
            serieA.classList.add("hide");
        });
    }   
}

function getStandings () {
    //format the api url
    var apiStand= apiUrl + "eng.1" + apiUrlStandings
    console.log();
    //use fetch to make a request to the url 
    fetch(apiStand).then(function(response) {
        if (response.ok) {
            return response.json().then(function (data) {
                displayTeamStats(data);    
            })
        } else {
            alert("Error");
        }
    });
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

leagueSelect.addEventListener("change", function () {
    chosenTeam = (this.value);
    let i = chosenTeam
    var apiData = selectYourLeague[i].attributes[2].value
    var teamData = JSON.stringify(apiData);
    getStandings(teamData)

})

function displayTeamStats (data) { 
    leagueTeam.addEventListener("change", function() {
        var chosenData = this.value;
        console.log(chosenData);
        let i = chosenData
        displaySeason.innerHTML = data.data.standings[i].team.name;
        winRate.innerHTML = data.data.standings[i].stats[0].value;
        loseRate.innerHTML = data.data.standings[i].stats[1].value;
        tieRate.innerHTML = data.data.standings[i].stats[2].value;
        gpRate.innerHTML = data.data.standings[i].stats[3].value;
        rankRate.innerHTML = data.data.standings[i].stats[8].value;
        orRate.innerHTML = data.data.standings[i].stats[12].displayValue;
        teamLogo.innerHTML = data.data.standings[i].team.logos;

    })
    
}

//Call functions
getStandings();