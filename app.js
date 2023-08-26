const p1Btn = document.querySelector('#p1btn');
const p2Btn = document.querySelector('#p2btn');
const resetBtn = document.querySelector('#resetBtn');
const winningScoreSelect = document.querySelector('#winningScoreSelect');
let p1ScoreDis = document.querySelector('#p1Score');
let p2ScoreDis = document.querySelector('#p2Score');
let isGameOver = false;
let winningScore = 5;


let p1Score=0;
    p1Btn.addEventListener('click',function(){
        if (!isGameOver) {
            p1Score++;
            if (p1Score === winningScore) {
               isGameOver = true; 
               p1ScoreDis.style.color = 'green';
               p2ScoreDis.style.color = 'red';
               p1Btn.disabled=true;
               p2Btn.disabled=true;
            }
            if (p1Score===winningScore-1 && p2Score===winningScore-1) {
                winningScore++
            }
            p1ScoreDis.textContent=p1Score;
        }   
    })   


let p2Score=0;
    p2Btn.addEventListener('click',function(){
        if (!isGameOver) {
            p2Score++;
            if (p2Score === winningScore) {
               isGameOver = true; 
               p2ScoreDis.style.color = 'green';
               p1ScoreDis.style.color = 'red';
               p1Btn.disabled=true;
               p2Btn.disabled=true;
            }
            if (p1Score===winningScore-1 && p2Score===winningScore-1) {
                winningScore++
            }
            p2ScoreDis.textContent=p2Score;
        }   
    })   




const resetFun = function(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1ScoreDis.textContent=0;
    p2ScoreDis.textContent = 0;
    p2ScoreDis.style.color = 'black';
    p1ScoreDis.style.color = 'black';
    p1Btn.disabled=false;
    p2Btn.disabled=false;
}


winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    resetFun();
})


resetBtn.addEventListener('click', resetFun)



