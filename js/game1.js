/* ============================================================
   game1.js — "Препознај го чувството" (emotion-recognition quiz)
   Depends on: main.js (growth, updateGrowth)
   ============================================================ */

const quizData = [
    {
        scenario: "Подготвуваше две недели за контролна и доби пониска оценка од очекуваната. Веднаш помисли: „Јас никогаш не сум доволно добар/добра.“",
        options: ["Разочараност", "Гнев кон наставникот", "Гордост", "Досада"],
        correct: 0,
        feedback: "Ова е разочараност — нормално чувство кога вложениот труд не дава очекуван резултат. Разликата помеѓу „бев разочаран/а“ и „никогаш не сум доволно добар/добра“ е огромна: првото е чувство, второто е пресуда за целата твоја вредност."
    },
    {
        scenario: "Другар/другарка сподели твоја тајна со останатите во групата за разговор. Ти чувствуваш стегање во градите и сакаш да пишеш нешто лошо назад.",
        options: ["Радост", "Предавство / лутина", "Смиреност", "Возбуда"],
        correct: 1,
        feedback: "Чувството на предавство е реакција кога некој со кого си споделил доверба ја прекршил. Именувањето на чувството („се чувствувам предадено“) пред да реагираш ти дава простор да одговориш смирено, наместо импулсивно."
    },
    {
        scenario: "Влегуваш во нова училница каде не познаваш никого. Срцето ти чука побрзо, не знаеш каде да седнеш.",
        options: ["Анксиозност / нервоза", "Лутина", "Здодевност", "Љубомора"],
        correct: 0,
        feedback: "Телесни знаци како забрзан пулс во непозната ситуација обично значат нервоза или анксиозност. Тоа не значи дека нешто е погрешно со тебе — телото само те подготвува за ново искуство."
    },
    {
        scenario: "Пријател доби подобра оценка од тебе на проект на кој работевте заедно исто толку. Забележуваш дека постојано го споредуваш неговиот успех со твојот.",
        options: ["Благодарност", "Љубомора", "Спокојство", "Изненадување"],
        correct: 1,
        feedback: "Љубомората е чувство, не карактерна мана. Признавањето „чувствувам љубомора“ ти овозможува да размислиш зошто — можеби сакаш повеќе признание — наместо тоа чувство да ти управува со однесувањето."
    },
    {
        scenario: "По тежок ден, седнуваш сам/сама во собата и не сакаш со никого да зборуваш, но не можеш ни да кажеш точно зошто се чувствуваш вака.",
        options: ["Емоционална преоптовареност / исцрпеност", "Среќа", "Возбуда", "Љубопитност"],
        correct: 0,
        feedback: "Кога не можеш да го именуваш чувството, тоа често е знак на емоционална преоптовареност — премногу чувства одеднаш. Дури и само да кажеш „преоптоварен/а сум“ веќе е чекор кон полесно да се справиш со тоа."
    }
];

let qIdx = 0;
let qScore = 0;

function loadQuiz(){
    const q = quizData[qIdx];
    document.getElementById('quiz-progress').textContent = `прашање ${qIdx+1} / ${quizData.length}`;
    document.getElementById('quiz-scenario').textContent = q.scenario;
    const optsEl = document.getElementById('quiz-opts');
    optsEl.innerHTML = '';
    document.getElementById('quiz-feedback').style.display = 'none';
    document.getElementById('quiz-next').style.display = 'none';
    q.options.forEach((opt, i) => {
        const b = document.createElement('button');
        b.className = 'opt-btn';
        b.textContent = opt;
        b.onclick = () => answerQuiz(i);
        optsEl.appendChild(b);
    });
}

function answerQuiz(i){
    const q = quizData[qIdx];
    const btns = document.querySelectorAll('#quiz-opts .opt-btn');
    btns.forEach(b => b.disabled = true);
    btns[q.correct].classList.add('correct');
    if(i !== q.correct){ btns[i].classList.add('wrong'); playBadSound(); } else { qScore++; playGoodSound(); }
    const fb = document.getElementById('quiz-feedback');
    fb.style.display = 'block';
    fb.textContent = q.feedback;
    document.getElementById('quiz-next').style.display = 'inline-block';
}

function initGame1(){
    document.getElementById('quiz-next').onclick = () => {
        qIdx++;
        if(qIdx < quizData.length){
            loadQuiz();
        } else {
            document.getElementById('quiz-scenario').textContent = `Заврши! Погоди ${qScore} од ${quizData.length} чувства точно. Именувањето чувства е вештина — колку повеќе вежбаш, толку побрзо ги препознаваш кај себе.`;
            document.getElementById('quiz-opts').innerHTML = '';
            document.getElementById('quiz-progress').textContent = 'готово';
            document.getElementById('quiz-feedback').style.display = 'none';
            document.getElementById('quiz-next').style.display = 'none';
            if(growth < 1){ growth = 1; updateGrowth(); playLevelUpSound(); }
        }
    };
    loadQuiz();
}

document.addEventListener('DOMContentLoaded', initGame1);