
let box = document.querySelectorAll(".box");
let newgame = document.querySelector("#new-btn");
let resetgame = document.querySelector("#reset-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true; //palyerX , palyerO

let winPattren = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]     
];

box.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno == true) {
            box.innerText = "O";
            turno = false;

        } else { 
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const disableboxes = () => { 
    /*boxes acces the all the boxes and disable the all the boxes */
    for (boxes of box) { 
     boxes.disabled = true;   
    }
}
const enableboxes = () => { 
    /*boxes acces the all the boxes and enable the all the boxes */
    turno = true;
    for (boxes of box) { 
        boxes.disabled = false; 
        boxes.innerText = "";   
    }
}

const resetgamebtn = () => {
    turno = true;
    enableboxes();
    msgcontainer.classList.add("hide");
 }


const showwinner =(pos1) => {
    msg.innerText = `Congratulation!!  Winner is ${pos1}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
    box.disabled = true;
}
    

const checkWinner = () => { 
    for (let pos of winPattren) { 
        let pos1 = box[pos[0]].innerText;
        let pos2 = box[pos[1]].innerText;
        let pos3 = box[pos[2]].innerText;
        if (pos1 != "" && pos != "" && pos != "") { 
            if (pos1 == pos2 && pos2 == pos3) {
                showwinner(pos1);
            } else {
               // matchdarw();
            } 
        }   
    }
}

newgame.addEventListener("click", resetgamebtn);
resetgame.addEventListener("click", resetgamebtn);