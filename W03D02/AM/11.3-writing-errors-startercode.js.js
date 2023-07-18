/* 
Sometime you will want to throw an error on purpose. 
Here are some reasons throwing errors might be useful:

Debugging: When an error is thrown, it provides valuable information about what went wrong and where. This can help developers quickly identify and fix the problem.

Robustness: By throwing errors, programs can handle unexpected situations and continue running without crashing. This can improve the overall reliability and stability of the software.

User experience: Errors can be presented to users in a clear and informative way, allowing them to take appropriate action and avoid further issues.

Security: Throwing errors can help prevent security vulnerabilities by identifying and stopping potentially malicious behavior.



*/

//BASIC EXAMPLE:

function validateGuess(guess) {
  const secret = 8
  if (guess !== secret) {
    //YOU CAN THROW NEW ERROR USING THE BUILT IN ERROR CLASS
    throw new Error("That is not the secret number!");

    //YOU CAN ALSO THROW ANY DATA TYPE YOU WANT
    // throw {name:"That's not the secret number!", code: 'aintNoSecret', message: "New app who dis."};
    // throw 10;
    // throw "oh nah"
  }
}

// validateGuess(5, 8);

//YOU CAN ALSO S

//EXAMPLE OF BACKTRACE- WHEN MULTIPLE FUNCTIONS ARE INVOLVED AND WERE NOT ABLE TO COMPLETE BECAUSE OF AN ERROR

// function one() {
//     two();
// }
// function two() {
//     three();
// }
// function three() {
//     throw new Error("Here's the error");
// }
// one();

/* ASSESSMENT STUDY GUIDE! */

//Throwing an array of errors
function findPlayerAveragePoints(players = {}, name) {
  //if player name is not in the players object, have an error pushed to an array
  //if player has not played any games, have an error pushed to an array
  //if player has played in less than 2 games, have an error pushed to an array
  //if there are any errors in our array, then throw all the errors
  //if there are no errors in our array, return the player Average points
}

let players = {
  Lebron: {
    points: [30, 22, 32, 26],
    team: "Lakers",
  },
  Jordan: {
    points: [36, 30, 30, 34],
    team: "Bulls",
  },
  Rob: {
    points: [],
    team: "JavaScript-ers",
  },
  Curry: {
    points: [50, 100],
    team: "Warriors",
  },
};

console.log(findPlayerAveragePoints(players, "Lebron"));
