async function fetchTeamInfo(teamID) {
    fetch("https://v3.football.api-sports.io/teams?id=33", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "b61ef01f3458f0f1db19a3d12413f664"
        }
    })
        .then(result => result.json())
        .then((json) => {
            console.log(json.response[0].team)
            document.getElementById("team_name").innerHTML = json.response[0].team.name;
            document.getElementById("team_logo").src = json.response[0].team.logo;
        })
        .catch(err => {
            console.log(err);
        });
}

export default function displayTeams(league, season) {
    fetch(`https://v3.football.api-sports.io/teams?league=${league}&season=${season}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "b61ef01f3458f0f1db19a3d12413f664"
        }
    })
        .then(result => result.json())
        .then((json) => {
            console.log(json)
            document.getElementById("team").innerHTML = "";
            <br />

            for (let i = 0; i < json.response.length; i++) {

                const newDiv = document.createElement("div");
                newDiv.classList.add("team_display");

                const newLogo = document.createElement("img");
                const logoSource = json.response[i].team.logo;
                newLogo.src = logoSource;

                const newText = document.createElement("p");
                const teamName = document.createTextNode(json.response[i].team.name);
                newText.appendChild(teamName);

                newDiv.appendChild(newLogo);
                newDiv.appendChild(newText);

                document.getElementById("team").appendChild(newDiv);
            }
        })
        .catch(err => {
            console.log(err);
        });
}

function newFunction() {
    const newElement = document.createElement("p");
    const teamName = document.createTextNode("This is the text.");
    newElement.appendChild(teamName);
    document.getElementById("teams").appendChild(newElement);
}

export function displayTables() { }


export function displayLiveMatches() {
    fetch(`https://v3.football.api-sports.io/fixtures?live=all`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "b61ef01f3458f0f1db19a3d12413f664"
        }
    })
        .then(result => result.json())
        .then((json) => {
            console.log(json)

            for (let i = 0; i < json.response.length; i++) {

                const newDiv = document.createElement("div");
                newDiv.classList.add("matches-matches-layout");

                const newHomeDiv = document.createElement("div");
                const newLogo = document.createElement("img");
                const logoSource = json.response[i].teams.home.logo;
                newLogo.src = logoSource;

                const newText = document.createElement("p");
                const teamName = document.createTextNode(json.response[i].teams.home.name);
                newText.appendChild(teamName);
                
                newHomeDiv.appendChild(newLogo);
                newHomeDiv.appendChild(newText);

                const newTextDiv = document.createElement("div");
                newDiv.classList.add("date-time-of-match");

                const dateText = document.createElement("p");
                const dateResponse = document.createTextNode(json.response[i].fixture.date);
                console.log(dateResponse);
                dateText.appendChild(dateResponse);
                newTextDiv.appendChild(dateText);

                const newAwayDiv = document.createElement("div");
                const newAwayLogo = document.createElement("img");
                const AwayLogoSource = json.response[i].teams.away.logo;
                newAwayLogo.src = AwayLogoSource;

                const newAwayText = document.createElement("p");
                const AwayTeamName = document.createTextNode(json.response[i].teams.away.name);
                newAwayText.appendChild(AwayTeamName);
                
                newAwayDiv.appendChild(newAwayLogo);
                newAwayDiv.appendChild(newAwayText);

                newDiv.appendChild(newHomeDiv);
                newDiv.appendChild(newTextDiv);
                newDiv.appendChild(newAwayDiv);

                document.getElementById("matches-matches").appendChild(newDiv);
            }
        })
        .catch(err => {
            console.log(err);
        });
}
// {
//     "get": "teams",
//     "parameters": {
//         "id": "33"
//     },
//     "errors": [],
//     "results": 1,
//     "paging": {
//         "current": 1,
//         "total": 1
//     },
//     "response": [
//         {
//             "team": {
//                 "id": 33,
//                 "name": "Manchester United",
//                 "code": "MUN",
//                 "country": "England",
//                 "founded": 1878,
//                 "national": false,
//                 "logo": "https://media.api-sports.io/football/teams/33.png"
//             },
//             "venue": {
//                 "id": 556,
//                 "name": "Old Trafford",
//                 "address": "Sir Matt Busby Way",
//                 "city": "Manchester",
//                 "capacity": 76212,
//                 "surface": "grass",
//                 "image": "https://media.api-sports.io/football/venues/556.png"
//             }
//         }
//     ]
// }