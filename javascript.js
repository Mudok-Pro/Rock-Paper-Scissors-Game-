function getComputerReturn (){
   const choices = ["Rock", "Paper", "Scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length );
  return choices[randomIndex];
}
console.log(getComputerReturn());