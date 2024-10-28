let values=document.querySelectorAll(".keypad");
let resetButton= document.querySelector(".resetbutton");

let newbtn =document.querySelector(".newgamebutton")
let msgArea =document.querySelector(".msg-Space")
let msg =document.querySelector("#msg")


let turnX=true;

const winningPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame1=()=>{
turnX=true;
enableBoxes();
msgArea.classList.add("hide");
}

values.forEach((key)=>{
    key.addEventListener("click",()=>{
       // console.log(`you clicked ${winningPatterns}`)

        if(turnX===true)
        {

            key.innerText="O"
            turnX=false;

        }
        else
        {
            key.innerText ="X"
            turnX=true;
        }
    key.disabled=true

    cheakWinnwer();
    });

});

const disableBoxes = ()=>{
    for(let v of values){
        v.disabled=true;
    }
};


const enableBoxes = ()=>{
    for(let v of values){
        v.disabled=false;
        v.innerText="";
    }
};


const showwinner =(winner)=>{
    msg.innerText=`Congarts winner is ${winner}`
    msgArea.classList.remove("hide")
    disableBoxes();

};



const cheakWinnwer=()=>{
    for(let pattern of winningPatterns)
    {
        //console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(values[pattern[0]].innerText,values[pattern[1]].innerText,values[pattern[2]].innerText);
    
    let pos1Val= values[pattern[0]].innerText;
    let pos3Val= values[pattern[2]].innerText;
    let pos2Val= values[pattern[1]].innerText;


    if(pos1Val!=""&& pos2Val!=""&&pos3Val!=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log(`Winner is ${pos1Val}`)
            showwinner(pos1Val);
        }
    }
    }


};


newbtn.addEventListener("click",resetGame1)
resetButton.addEventListener("click",resetGame1)