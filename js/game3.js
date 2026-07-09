let catchScore = 0;
let catchTimeLeft = 40;
let catchLives = 3;
let catchTimer = null;
let catchSpawner = null;
let catchActive = false;
let catchElapsed = 0;

function catchSpawnInterval(){ return Math.max(420, 900 - catchElapsed*14); }
function catchFallDuration(){ return Math.max(1.8, 4.6 - catchElapsed*0.06); }

function spawnFalling(){
    const arena = document.getElementById('catch-arena');
    const isGood = Math.random() < 0.5;
    const el = document.createElement('button');
    el.className = 'falling';
    el.textContent = isGood ? goodThoughts[Math.floor(Math.random()*goodThoughts.length)]
        : badThoughts[Math.floor(Math.random()*badThoughts.length)];
    const arenaWidth = arena.clientWidth;
    el.style.left = Math.max(6, Math.random() * (arenaWidth - 230)) + 'px';
    const duration = catchFallDuration();
    el.style.transition = `top ${duration}s linear`;
    arena.appendChild(el);
    requestAnimationFrame(() => { el.style.top = (arena.clientHeight - 10) + 'px'; });
    el.onclick = () => {
        if(!catchActive) return;
        if(isGood){
            catchScore += 10;
            playGoodSound();
        } else {
            catchScore = Math.max(0, catchScore - 5);
            loseCatchLife();
            playBadSound();
        }
        document.getElementById('catch-score').textContent = catchScore;
        el.remove();
    };
    setTimeout(() => {
        if(el.parentNode){
            if(isGood){ catchScore = Math.max(0, catchScore - 3); document.getElementById('catch-score').textContent = catchScore; }
            el.remove();
        }
    }, duration*1000 + 50);
}

function loseCatchLife(){
    catchLives--;
    document.getElementById('catch-lives').textContent = '●'.repeat(Math.max(0,catchLives)) + '○'.repeat(3-Math.max(0,catchLives));
    const arena = document.getElementById('catch-arena');
    arena.classList.remove('flash-bad'); void arena.offsetWidth; arena.classList.add('flash-bad');
    if(catchLives <= 0){ endCatch(false); }
}

function startCatch(){
    document.getElementById('catch-overlay').style.display = 'none';
    catchScore = 0; catchTimeLeft = 40; catchLives = 3; catchActive = true; catchElapsed = 0;
    document.getElementById('catch-score').textContent = 0;
    document.getElementById('catch-lives').textContent = '●●●';
    document.getElementById('catch-time').textContent = 40;
    scheduleCatchSpawn();
    catchTimer = setInterval(() => {
        catchTimeLeft--;
        catchElapsed++;
        document.getElementById('catch-time').textContent = catchTimeLeft;
        if(catchTimeLeft <= 0){ endCatch(true); }
    }, 1000);
}

function scheduleCatchSpawn(){
    if(!catchActive) return;
    spawnFalling();
    catchSpawner = setTimeout(scheduleCatchSpawn, catchSpawnInterval());
}

function endCatch(timeUp){
    catchActive = false;
    clearTimeout(catchSpawner);
    clearInterval(catchTimer);
    document.querySelectorAll('#catch-arena .falling').forEach(el => el.remove());
    const overlay = document.getElementById('catch-overlay');
    overlay.style.display = 'flex';
    const headline = timeUp ? "Готово!" : "Без животи!";
    const sub = timeUp
        ? `Освои ${catchScore} поени. Секој пат кога ќе препознаеш добра мисла во реалниот живот, тоа е ист вид вежба.`
        : `Освои ${catchScore} поени пред да ти снемат животите. Некои "позитивни" реченици всушност бараат совршенство — затоа читањето внимателно е важно.`;
    overlay.innerHTML = `<h3 style="font-size:1.3rem;margin-bottom:10px">${headline}</h3>
    <p style="max-width:42ch;color:#3a4c40;font-size:0.95rem;margin-bottom:20px">${sub}</p>
    <button class="btn" id="catch-restart">Играј пак</button>`;
    document.getElementById('catch-restart').onclick = startCatch;
    if(growth < 3){ growth = 3; updateGrowth(); playLevelUpSound(); }
}

function initGame3(){
    document.getElementById('catch-start').onclick = startCatch;
}

document.addEventListener('DOMContentLoaded', initGame3);
