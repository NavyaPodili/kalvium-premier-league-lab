//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  const obj = {
      defender: formation[0],
      midfield: formation[1],
      forward: formation[2]
  };
  return obj;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in _ year
function filterByDebut(year) {
  return players.filter(player => player.debut === year);
}

//Progression 4 - Filter players that play at the position ___
function filterByPosition(position) {
  return players.filter(player => player.position.toLowerCase() === position.toLowerCase());
}

//Progression 5 - Filter players that have won __ award
function filterByAward(awardName) {
  return players.filter(player => player.awards.some(award => award.name === awardName));
}
//Progression 6 - Filter players that won __ award __ times
function filterByAwardxTimes(awardName, noOfTimes) {
  return players.filter(player => player.awards.filter(award => award.name === awardName).length >= noOfTimes);
}
//Progression 7 - Filter players that won __ award and belong to __ country
function filterByAwardxCountry(awardName, country) {
  return players.filter(player => player.awards.some(award => award.name === awardName) && player.country.toLowerCase() === country.toLowerCase());
}
//Progression 8 - Filter players that won atleast __ awards, belong to __ team and are younger than __
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  return players.filter(player => player.awards.length >= noOfAwards && player.team.toLowerCase() === team.toLowerCase() && player.age < age);
}
//Progression 9 - Sort players in descending order of their age
function sortByAge() {
  return players.slice().sort((a, b) => b.age - a.age);
}

//Progression 10 - Sort players beloging to ___ team in descending order of awards won
function filterByTeamxSortByNoOfAwards(team) {
  const teamPlayers = players.filter(player => player.team.toLowerCase() === team.toLowerCase());
  return teamPlayers.sort((a, b) => b.awards.length - a.awards.length);
}

//Challenge 1 - Sort players that have won ___ award __ times and belong to ____ country in alphabetical order of their names
function sortByNamexAwardxTimes(awardName, noOfTimes, country) {
  const filteredPlayers = players.filter(player => player.awards.filter(award => award.name === awardName).length >= noOfTimes && player.country.toLowerCase() === country.toLowerCase());
  return filteredPlayers.sort((a, b) => a.name.localeCompare(b.name));
}
//Challenge 2 - Sort players that are older than ___ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function sortByNamexOlderThan(age) {
  const olderPlayers = players.filter(player => player.age > age);
  olderPlayers.forEach(player => {
      player.awards.sort((a, b) => b.year - a.year); // Sorting awards in reverse chronological order
  });
  return olderPlayers.sort((a, b) => a.name.localeCompare(b.name)); // Sorting players in alphabetical order
}
