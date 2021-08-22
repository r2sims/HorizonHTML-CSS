// for(i = 0; i < 3; i++) {

    
//     var userChoice = prompt("Do you choose rock, paper or scissors?");
//     if (! userChoice) {
        
//         document.write("<p>Player 1, you cheated! Refresh this screen and fight like a man.</p>");
//     } else {
        
//         document.write("<p>Player 1:" + " " + userChoice + "</p>");
//     }
    
//     var computerChoice = Math.random();
//     if (computerChoice < 0.34) {
//         computerChoice = "rock";
//     } else if(computerChoice <= 0.67) {
//         computerChoice = "paper";
//     } else {
//         computerChoice = "scissors";
//     }
    
    
//     document.write("<p>Computer:" + " " + computerChoice + "</p>");
    
//     var compare = function(choice1,choice2) {
//         if (choice1 === choice2) {
//             return "It's a tie!";
//     }
//     if (choice1 === "rock") {
//         if (choice2 === "scissors") {return "It's a tie!";
//     }
//     if (choice1 === "rock") {
//         if (choice2 === "scissors") {// rock wins
//             return "You win!";
//         } else {
//             // paper wins
//             return "You lose! Try again.";
//         }
//     }
//     if (choice1 === "paper") {
//         if (choice2 === "rock") {
//             // paper wins
//             return "You win!";
//         } else {
//             // scissors wins
//             return "You lose! Try again.";
//         }
//     }
//     if (choice1 === "scissors") {
//         if (choice2 === "rock") {
//             // rock wins
//             return "You lose! Try again.";
//         } else {
//             // scissors wins
//             return "You win!";
//         }
//     }
// };
// // Run the compare function
// var results = compare(userChoice,computerChoice);
// // Display results
// document.write("<br><hr><b>Results: </b>" + results);

// } 