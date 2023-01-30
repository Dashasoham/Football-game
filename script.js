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

console.log("----EACH PLAYER GOALS---");

for (const [i, goalScored] of goals.entries()) {
  console.log(`Goal ${i + 1}:${goalScored}`);
}
//
console.log("----AVERAGE----");

let average = 0;
for (const odd of Object.values(game.odds)) {
  average += odd / 3;
}

// oddsAll.forEach((number) => {
//   average += number / 3;
// });

console.log(average);
console.log("-----CHALLENGE 4-----");

// const oddsAll = Object.entries(game.odds);
// console.log(oddsAll);

// for (const [team, odd] of oddsAll) {
//   console.log(`Odd of victory ${team}: ${odd}`);
// }

const teamOdds = game.odds;
console.log(teamOdds);

// const first = "team1";
// console.log(game.first);
// console.log(game[first]);
// game[first] === game.team1;

for (const key in teamOdds) {
  console.log(`odds of ${game[key] ?? "draw"}: ${teamOdds[key]}`);
}

// for (const key in game.odds) {
//   console.log(`odds of ${game[key] ?? "draw"}: ${game.odds[key]}`);
// }

console.log("---CHALLENGE 4------");
let scorers = {};

for (const player of game.scored) {
  //THE CONDITIONAL(TERNARY) OPERATOR(PAGE 9)
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

console.log("---Coding Challenge #3--");

// Create an array 'events' of the different game events that happened(no duplicates)
// 2. After the game has finished,is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened,on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over'gameEvents' and log each element to the console,marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽   GOAL

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
console.log(gameEvents.values());

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened,on average, every ${90 / gameEvents.size} minutes`
);

for (const [key, value] of gameEvents) {
  const half = key <= 45 ? "FIRST" : "SECOND";
  console.log(`${half} HALF: ${key}: ${value}`);

  // key < 45
  //   ? console.log(`FIRST HALF ${key}: ${value}`)
  //   : console.log(`SECOND HALF ${key}: ${value}`);
}
