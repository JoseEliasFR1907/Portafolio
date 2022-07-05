'use strict'

const bars = document.getElementById('bars');
const menu = document.getElementById('nav');
bars.addEventListener('click', ()=>{
    const nav = menu.style.display;
    if (nav = 'flex') {
        nav = 'none';
    } else {
        nav = 'flex';
    }
});