/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
let messageArray = MESSAGE.split("");
messageArray = messageArray.map((character, index) => {
    character =  parseInt(character.charCodeAt(0));
    character = character.toString(2);
    return character;
});

const answer = messageArray.join("");
console.log(answer);
