const whackGood = goodThoughts;
const whackBad = badThoughts;

let whackScore = 0;
let whackLives = 3;
let whackRound = 0;
let whackActive = false;
let whackPopTimer = null;
let whackRoundTimer = null;

const whackRounds = [
    { pops: 6, showMs: 1400, gapMs: 900 },
    { pops: 7, showMs: 1200, gapMs: 800 },
    { pops: 7, showMs: 1000, gapMs: 700 },
    { pops: 8, showMs: 850, gapMs: 600 },
    { pops: 8, showMs: 700, gapMs: 550 },
    { pops: 9, showMs: 600, gapMs: 500 }
];

function buildWhackGrid(){
    const grid = document.getElementById('whack-grid');
    grid.innerHTML = '';
    for(let i=0;i<9;i++){
        const cell = document.createElement('div');
        cell.className = 'whack-cell';
        cell.dataset.idx = i;
        grid.appendChild(cell);
    }
}

function startWhack(){
    document.getElementById('whack-overlay').style.display = 'none';
    document.getElementById('whack-grid').style.display = 'grid';
    whackScore = 0; whackLives = 3; whackRound = 0; whackActive = true;
    document.getElementById('whack-score').textContent = 0;
    document.getElementById('whack-lives').textContent = '●●●';
    document.getElementById('whack-round').textContent = 0;
    buildWhackGrid();
    nextWhackRound();
}

function nextWhackRound(){
    if(!whackActive) return;
    if(whackRound >= whackRounds.length){ endWhack(true); return; }
    const cfg = whackRounds[whackRound];
    whackRound++;
    document.getElementById('whack-round').textContent = whackRound;
    let popsLeft = cfg.pops;
    function doPop(){
        if(!whackActive) return;
        if(popsLeft <= 0){ whackRoundTimer = setTimeout(nextWhackRound, 300); return; }
        popsLeft--;
        const cells = document.querySelectorAll('.whack-cell');
        const idx = Math.floor(Math.random()*cells.length);
        const cell = cells[idx];
        if(cell.querySelector('.whack-thought')){ doPop(); return; }
        const isGood = Math.random() < 0.5;
        const el = document.createElement('div');
        el.className = 'whack-thought';
        el.textContent = isGood ? whackGood[Math.floor(Math.random()*whackGood.length)]
            : whackBad[Math.floor(Math.random()*whackBad.length)];
        cell.appendChild(el);
        requestAnimationFrame(() => el.classList.add('show'));
        let resolved = false;
        el.onclick = () => {
            if(resolved || !whackActive) return;
            resolved = true;
            if(isGood){ whackScore += 10; playGoodSound(); } else { whackScore = Math.max(0, whackScore-5); loseWhackLife(); playBadSound(); }
            document.getElementById('whack-score').textContent = whackScore;
            el.classList.remove('show');
            setTimeout(()=>el.remove(), 150);
        };
        setTimeout(() => {
            if(!resolved){
                resolved = true;
                if(isGood){ whackScore = Math.max(0, whackScore-3); document.getElementById('whack-score').textContent = whackScore; }
                el.classList.remove('show');
                setTimeout(()=>el.remove(), 150);
            }
            whackPopTimer = setTimeout(doPop, cfg.gapMs);
        }, cfg.showMs);
    }
    doPop();
}

function loseWhackLife(){
    whackLives--;
    document.getElementById('whack-lives').textContent = '●'.repeat(Math.max(0,whackLives)) + '○'.repeat(3-Math.max(0,whackLives));
    if(whackLives <= 0){ endWhack(false); }
}

function endWhack(completed){
    whackActive = false;
    clearTimeout(whackPopTimer);
    clearTimeout(whackRoundTimer);
    document.querySelectorAll('.whack-thought').forEach(el => el.remove());
    const grid = document.getElementById('whack-grid');
    grid.style.display = 'none';
    const overlay = document.getElementById('whack-overlay');
    overlay.style.display = 'block';
    const headline = completed ? "Комплетирано!" : "Без животи!";
    const sub = completed
        ? `Помина низ сите кругови со ${whackScore} поени. Фокусот под притисок е вежба за да може да ги препознаеш мислите и во стресни моменти.`
        : `Освои ${whackScore} поени. Побрзо не значи секогаш подобро, успори кога можеш.`;
    overlay.innerHTML = `<h3 style="font-size:1.3rem;margin-bottom:14px">${headline}</h3>
    <p style="max-width:42ch;color:#3a4c40;font-size:0.95rem;margin:0 auto 20px">${sub}</p>
    <button class="btn" id="whack-restart">Играј пак</button>`;
    if(completed && growth < 5){ growth = 5; updateGrowth(); playLevelUpSound(); }
    if(completed && growth < 5){ growth = 5; updateGrowth(); }
}

function initGame5(){
    document.getElementById('whack-start').onclick = startWhack;
}

document.addEventListener('DOMContentLoaded', initGame5);
