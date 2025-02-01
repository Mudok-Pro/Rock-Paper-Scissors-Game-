
humanScore =0 ;
computerScore = 0;


function getComputerChoice (){
   const choices = ["Rock", "Paper", "Scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length );
  return choices[randomIndex];
}
console.log(getComputerChoice());

function getHumanChoice (){
    let humanChoice= prompt("What is Your Choice? ");
  
    return humanChoice;
}
console.log(getHumanChoice())


