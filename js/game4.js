/* ============================================================
   game4.js — "Спари ја мислата" (memory match game)
   Depends on: main.js (growth, updateGrowth)
   ============================================================ */

const memPairs = [
    ["Никогаш нема да успеам во ова", "Сѐ уште не успеав — тоа не е исто со никогаш"],
    ["Сите ме забележаа кога грешев", "Повеќето луѓе се фокусирани на себе, не на мене"],
    ["Морам да бидам најдобар/најдобра", "Доволно е да напредувам во сопствено темпо"],
    ["Барам помош значи дека сум слаб/а", "Барањето помош е знак на сила и самосвест"],
    ["Ако направам грешка, сум неуспешен/на", "Грешките се дел од учењето, не пресуда"],
    ["Мора сите да ме сакаат", "Во ред е некои луѓе да не се поврзат со мене"]
];

let memCards = [];
let memFlipped = [];
let memFound = 0;
let memTries = 0;
let memLock = false;

function buildMemory(){
    memCards = [];
    memPairs.forEach((pair, i) => {
        memCards.push({ pairId:i, text: pair[0] });
        memCards.push({ pairId:i, text: pair[1] });
    });
    memCards.sort(() => Math.random()-0.5);
    memFlipped = []; memFound = 0; memTries = 0; memLock = false;
    document.getElementById('mem-found').textContent = 0;
    document.getElementById('mem-tries').textContent = 0;
    const grid = document.getElementById('memory-grid');
    grid.innerHTML = '';
    memCards.forEach((card, idx) => {
        const b = document.createElement('button');
        b.className = 'mem-card';
        b.dataset.idx = idx;
        b.textContent = '?';
        b.onclick = () => flipMem(idx);
        grid.appendChild(b);
    });
}

function flipMem(idx){
    if(memLock) return;
    const btn = document.querySelector(`.mem-card[data-idx="${idx}"]`);
    if(btn.classList.contains('flipped') || btn.classList.contains('matched')) return;
    btn.classList.add('flipped');
    btn.textContent = memCards[idx].text;
    memFlipped.push(idx);
    if(memFlipped.length === 2){
        memTries++;
        document.getElementById('mem-tries').textContent = memTries;
        memLock = true;
        const [a,b] = memFlipped;
        if(memCards[a].pairId === memCards[b].pairId){
            document.querySelector(`.mem-card[data-idx="${a}"]`).classList.add('matched');
            document.querySelector(`.mem-card[data-idx="${b}"]`).classList.add('matched');
            memFound++;
            document.getElementById('mem-found').textContent = memFound;
            playGoodSound();
            memFlipped = []; memLock = false;
            if(memFound === memPairs.length){
                if(growth < 4){ growth = 4; updateGrowth(); playLevelUpSound(); }
            }
        } else {
            playBadSound();
            setTimeout(() => {
                [a,b].forEach(i => {
                    const el = document.querySelector(`.mem-card[data-idx="${i}"]`);
                    el.classList.remove('flipped');
                    el.textContent = '?';
                });
                memFlipped = []; memLock = false;
            }, 900);
        }
    }
}

function initGame4(){
    buildMemory();
}

document.addEventListener('DOMContentLoaded', initGame4);