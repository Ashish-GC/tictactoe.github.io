
// game audios

let music = new Audio("files/music.mp3");
let audioTurn = new Audio("files/ting.mp3");
let gameover = new Audio("files/gameover.mp3");
let isgameover = false;
// turn function
let turn = 'X';
const changeturn = () => {
    return turn === 'X' ? 'O' : 'X';
}

// win condition 
const checkwin = () => {
    let boxtext = document.getElementsByClassName("box-text");
    let win = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [6, 7, 8],
        [3, 4, 5],
        [2, 4, 6],
    ]
    win.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText ) && boxtext[e[0]].innerText !== '') {
            document.querySelector('.text').innerText = boxtext[e[0]].innerText + "-won";
            isgameover = true;
            // gameover.play();
            document.querySelector('.img').getElementsByTagName('img')[0].style.width = "200px" ;
           
        }
    })

}
// game logic
// music.play();
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".box-text");

    element.addEventListener('click', () => {
        if (boxtext.innerHTML === '') {
            boxtext.innerHTML = turn;
            //audioTurn.play();
            turn = changeturn();
            // win check function
            checkwin();
            if (!isgameover) 
            { document.getElementsByClassName("text")[0].innerHTML = "Turn for " + turn; }
        }


    })

})

// reset button

reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll(".box-text");

     Array.from(boxtext).forEach(e=>{
        e.innerText="";
     })
      turn='X';
      isgameover=false;
      document.getElementsByClassName("text")[0].innerText="Turn for "+ turn;
      document.getElementsByTagName('img')[0].style.width ="0px";
})

