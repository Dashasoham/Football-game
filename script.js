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

let players1 = game.players[0];
let players2 = game.players[1];

let gkTeam1 = players1[0];
// let fieldPlayersTeam = players1.shift();
// let fieldPlayersTeam1 = players1.slice(1);
ls = [1, 2, 3]

[first, ...others] = ls
console.log(ls);
// const [, ...rest] = fieldPlayersTeam1;
console.log(players2);

console.log(gkTeam1);
// console.log(players1.shift());
// console.log(fieldPlayersTeam);
console.log(fieldPlayersTeam1);

// let array = [1, 2, 3];

// const shiftFunction = (array) => {
//   const removedItem = array[0];
//   //....
//   // remove 1 from array
//   //....
//   return removedItem;
// };

// shiftFunction(array);
// console.log();
