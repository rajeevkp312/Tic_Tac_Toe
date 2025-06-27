let boxes =document.querySelectorAll(".box");
let rstbtn=document.querySelector("#banti");
let nbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg")
let turnO=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const showWinner=(winner)=>{
    msg.innerText=`Congratulation , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}

const checkWinner=() =>{
    for (pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=""&& pos2Val!=""&& pos3Val!=""){
        if (pos1Val=== pos2Val && pos2Val ===pos3Val){
            console.log("Winner",pos1Val)
            showWinner(pos1Val);
        }
    }
    }
};


const disableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};

const resetGame = () => {
    turnO = true;
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    msgcontainer.classList.add("hide");
};

// Add event listeners for buttons
rstbtn.addEventListener("click", resetGame);
nbtn.addEventListener("click", resetGame);