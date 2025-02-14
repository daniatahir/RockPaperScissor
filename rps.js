let choices=document.querySelectorAll(".option");
let msg=document.querySelector("#msg");
const givenChoices=["rock","paper","scissor"];
let userScoreCount=document.querySelector("#user-score");
let compScoreCount=document.querySelector("#comp-score");
let reset=document.querySelector("#resetBtn");
let newButton=document.querySelector("#newBtn");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");

        playGame(userChoice);
    })
})

const genCompChoice=()=>{

    let ranIdx=Math.floor(Math.random()*3);
    return givenChoices[ranIdx];
}
const drawGame=()=>{
    console.log("draw");
    msg.innerText="Game has drawn!";
    msg.style.backgroundColor="#023047";
    msg.style.color="#d49c0d";
}
const playGame=(userChoice)=>{
    console.log("clicked",userChoice);
    let compChoice=genCompChoice();
    console.log("comp: ",compChoice);

    

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            if(compChoice==="paper"){
                userWin=false;
            }
            else{
                userWin=true;
            }
           //userWin=compChoice==="paper"?false:true;
        }
        else if (userChoice==="paper"){
           if(compChoice==="scissor"){
                userWin=false;
            }
            else{
                userWin=true;
            }

//userWin=compChoice==="scissor"?false:true;
        }
        else {
            if(compChoice==="rock"){
                userWin=false;
            }
            else{
                userWin=true;
            }
                //userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    

}
let userScore=0;
let compScore=0;
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreCount.innerText=userScore;
        msg.innerText=`You win! yours ${userChoice} beats computers ${compChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="yellow";

    }
    else{
        compScore++;
        compScoreCount.innerText=compScore;
        msg.innerText=`You loss! computers ${compChoice} beats yours ${userChoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="yellow";
    }
};
reset.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    compScoreCount.innerText=compScore;
    userScoreCount.innerText=userScore;
    msg.innerText="Play your move";
    msg.style.backgroundColor="#d49c0d";
    msg.style.color="#023047";

})
