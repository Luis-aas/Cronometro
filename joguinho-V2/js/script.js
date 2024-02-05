const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const start = document.querySelector('.start');
const gameOver = document.querySelector('.game-over');

const score = document.querySelector('.score');

let count = 0;


const startGame = () => {
    pipe.classList.add('pipe-animation')
    start.style.display ='none'
    setInterval(()=>{
     count++;
             score.innerHTML = `Score: ${count}`;
    },200);
    
}

const restartGame = () => {
    gameOver.style.display ='none'
    pipe.style.left = ''
    pipe.style.right ='0'
    mario.src = '/images/mario.gif'
    mario.style.width = '150px'
    mario.style.bottom = '0'
    start.style.display ='none'
}

const jump = () => {
mario.classList.add('jump');

setTimeout(() =>{
    
    mario.classList.remove('jump');

}, 800)
}

const loop = () => {
    setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = getComputedStyle(mario).bottom.replace ('px','');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 107){

        pipe.classList.remove('.pipe-animation')
        pipe.style.left = `${pipePosition}px`

        mario.classList.remove('.jump')
        mario.style.bottom = `${marioPosition}px`

         mario.src = '/images/game-over.png';
         mario.style.width ='75px'
         mario.style.marginLeft = '50px'
         gameOver.style.display = 'flex'
         count = 0;
        clearInterval(loop);
       
     } 
    }, 10);
}

loop()

document.addEventListener('keypress', e =>{
    const tecla = e.key
    if(tecla === ' '){
        jump()
    }
} );

document.addEventListener('touchStart', e =>{
    if (e.touches.lenght){
        jump()
    }
})

document.addEventListener('keypress', e =>{
    const tecla = e.key
    if(tecla === 'Enter'){
        startGame()
        restartGame()
    }
})