// function generateRandomNumber() {
//     // Generate a random number between 20 and 50
//     const randomNumber = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
//     console.log(randomNumber);
// }

// // Print a random number every 5 seconds
// setInterval(generateRandomNumber, 5000);

function random (){
    let num = Math.floor(Math.random()*0xffffff).toString(16);
    const color = '#'+num.padStart(6,'0');
    console.log(color)
    
}
setInterval(random,1000)