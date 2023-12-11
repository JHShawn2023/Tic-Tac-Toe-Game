let buttons = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector(".msg");

let playerX = true; //playerX, playerO

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (playerX === true) {
      btn.innerText = "X";
      playerX = false;
    } else {
      btn.innerText = "O";
      playerX = true;
    }
    btn.disabled = true;

    checkWiner();
  });
});

const checkWiner = () => {
  for (pattern of winPatterns) {
    let pos1 = buttons[pattern[0]].innerText;
    let pos2 = buttons[pattern[1]].innerText;
    let pos3 = buttons[pattern[2]].innerText;

    const disabledButton = () => {
      for (button of buttons) {
        button.disabled = true;
      }
    };

    const showWinner = (winner) => {
      msg.innerText = `Congratulations.. winner is ${pos1}`;
      msgContainer.classList.remove("hide");
      disabledButton();
    };

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1);
        showWinner(pos1);
      }//else{
       // msg.innerText = `Game tie.. \n Please Reset & Play again...`
      //}
    }
  }
};

// reset button action
const anableButton = () => {
    for (button of buttons) {
      button.disabled = false;
      button.innerText = "";
      msgContainer.classList.add("hide");
    }
};

reset.addEventListener("click", () =>{
    anableButton();
})
