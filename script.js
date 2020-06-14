const body = document.querySelector('body');
const audio = document.getElementById('audio');


document.addEventListener('click', (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    const bullet = document.createElement('span');
    bullet.style.left = x+'px';
    bullet.style.top = y+'px';
    // console.log(x,y);
    body.appendChild(bullet);

    audio.play();
    
})