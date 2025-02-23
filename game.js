let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#computer-score")

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx]
}

const drawGame = () =>{
    
    msg.innerText="It's a Draw! Play again";
    msg.style.backgroundColor="#0f2033"
}
const showWinner=(userWin,userchoice,compchoice)=>{
    if (userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green"
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You lose!${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="rgb(177, 12, 12)"
    }
}
const playGame=(userchoice)=>{
    console.log("user choice =",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice =",compchoice);

    if(userchoice===compchoice){
        drawGame();
    } else{
        let userWin = true;
        if(userchoice==="rock"){
            //scis,paper
            userWin=compchoice==="paper"? false:true;
        }else if(userchoice==="paper"){
            //rock,sciso
            userWin=compchoice==="scissors"? false:true;
        }else{//sci
            //rock ,paper
            userWin=compchoice==="rock"? false:true;
        }
        showWinner(userWin,userchoice,compchoice);
    }
};

      
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice); 
    });
});