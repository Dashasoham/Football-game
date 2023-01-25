"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.

const [gk, ...fieldPlayersTeam1] = players1;
console.log(gk, fieldPlayersTeam1);

//3.
console.log("-----ALL PLAYERS-----");

let allPlayers = [...players1, ...players2];
console.log(...allPlayers);

//4.
console.log("----TEAM! ADDITION-----");
let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//5.
console.log("----DESTRUCTURING OBJECT----");
console.log("----ODDS-----");

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6.

function printGoals(...players) {
  console.log(`${players.length} goals were scored`);
  console.log(`${players[0]} scored goals`);
  console.log(`${players[1]} scored goals`);
}

printGoals("Lewandowski", "Gnarby", "Lewandowski", "Hummels");
printGoals(...game.scored);

//6.

if (team1 < team2) {
  console.log("Team1 wins");
} else {
  console.log("Team2wins");
}

team1 < team2 ? console.log(`team1 wins`) : console.log(`team2 wins`);

team1 < team2 && console.log("TEAM1");
team1 > team2 && console.log("TEAM2");

console.log("-----CHALLENGE #2-------");
//1
const goals = [...game.scored];
console.log(goals);

for (const [i, goalScored] of goals.entries()) {
  console.log(`Goal ${i + 1}:${goalScored}`);
}
//

const oddsAll = Object.values(game.odds);

let average = 0;
oddsAll.forEach((number) => {
  average += number / 3;
});

console.log(average);

for (const [key, { team1 }] of oddsAll) {
  console.log(`Odd of victory ${team1}: ${key}`);
}
