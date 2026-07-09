
let audioCtx = null;
function getAudioCtx(){
    if(!audioCtx){
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if(audioCtx.state === 'suspended'){ audioCtx.resume(); }
    return audioCtx;
}

function playTone(freq, duration, type = 'sine', volume = 0.15){
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = volume;
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.start();
    osc.stop(ctx.currentTime + duration);
}

function playGoodSound(){
    playTone(660, 0.12, 'sine', 0.15);
    setTimeout(() => playTone(880, 0.15, 'sine', 0.12), 90);
}

function playBadSound(){
    playTone(180, 0.25, 'sawtooth', 0.12);
}

function playLevelUpSound(){
    [523, 659, 784, 988].forEach((freq, i) => {
        setTimeout(() => playTone(freq, 0.18, 'triangle', 0.14), i*90);
    });
}