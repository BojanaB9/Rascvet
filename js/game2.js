const schoolDay = [

    {
        title: "Утро",

        text: `Денес твојата група треба да го презентира проектот на кој работевте цела недела.

Додека се подготвуваш за на училиште, не можеш да престанеш да размислуваш:

"Што ако нешто тргне наопаку?"`,

        choices: [

            {
                label: "„Ќе згрешам. Секогаш ми се случува истото.“",
                selfEsteem: -2,
                stress: 2,
                resilience: 0,
                consequence:
                    "Во автобусот повторно ја вртиш истата мисла во глава и чувствуваш како тремата станува сè поголема."
            },

            {
                label: "„Добро... ќе видам како ќе помине.“",
                selfEsteem: 2,
                stress: 0,
                resilience: 2,
                consequence:
                    "Сè уште имаш трема, но чувствуваш дека си малку посмирен/а отколку пред неколку минути."
            },

            {
                label: "„Ќе мислам за тоа кога ќе дојде редот.“",
                selfEsteem: 1,
                stress: 1,
                resilience: 1,
                consequence:
                    "Одлучуваш да не размислуваш однапред за тоа што може да се случи и продолжуваш кон училиштето."
            }

        ]

    },

    {
        title: "По пат до училиште",

        text: `Пристигнуваш пред училницата.

Неколку соученици веќе разговараат за презентацијата.

„Ова ќе биде лесно.“

„Сигурно ќе добиеме петка.“

Несвесно почнуваш да се споредуваш со нив.`,

        choices: [

            {
                label: "„Сите се подобри од мене.“",
                selfEsteem: -2,
                stress: 2,
                resilience: 0,
                consequence:
                    "Неколку секунди не можеш да престанеш да размислуваш дали навистина сите се посигурни од тебе."
            },

            {
                label: "„Ќе се фокусирам на мојот дел.“",
                selfEsteem: 2,
                stress: 0,
                resilience: 1,
                consequence:
                    "Го оттурнуваш тоа чувство и се потсетуваш дека најважно е како ќе го претставиш твојот дел."
            },

            {
                label: "„И тие веројатно имаат трема, само не покажуваат.“",
                selfEsteem: 1,
                stress: 0,
                resilience: 2,
                consequence:
                    "Луѓето често изгледаат посигурни отколку што навистина се чувствуваат."
            }

        ]

    },

    {
        title: "Презентацијата",

        text: `Доаѓа редот на вашата група.

Сѐ оди добро сè додека не забораваш еден збор.

Застануваш за момент.

Некој во последната клупа се насмевнува.

Не си сигурен/на дали беше поради тебе.

Која ти е првата мисла?`,

        choices: [

            {
                label: "„Сигурно ми се смеат.“",
                selfEsteem: -2,
                stress: 2,
                resilience: 0,
                consequence:
                    "Нашиот мозок понекогаш носи заклучоци без доволно докази."
            },        {
                label: "„Можеби воопшто не се смеат на мене.“",
                selfEsteem: 1,
                stress: 0,
                resilience: 2,
                consequence:
                    "Понекогаш првата мисла што ни доаѓа не е и најточната. Да разгледаме и други можности може да ни помогне да останеме смирени."
            },

            {
                label: "„Една грешка не ја расипува целата презентација.“",
                selfEsteem: 2,
                stress: 0,
                resilience: 2,
                consequence:
                    "Никој не е совршен. Најважно е што продолжи понатаму."
            }

        ]

    },

    {
        title: "После час",

        text: `Презентацијата заврши.

На крајот од часот наставничката ви ги враќа коментарите.

„Добро сте сработиле.

Имам само една забелешка за овој дел.

Ако го објасните малку појасно, презентацијата ќе биде уште подобра.“

Која е твојата прва мисла?`,

        choices: [

            {
                label: "„Значи не сум доволно добар/добра.“",
                selfEsteem: -2,
                stress: 2,
                resilience: 0,
                consequence:
                    "Една забелешка не значи дека целиот твој труд не вредел."
            },

            {
                label: "„Добро е што знам што можам да подобрам.“",
                selfEsteem: 2,
                stress: 0,
                resilience: 2,
                consequence:
                    "Забелешката покажува што може да се подобри, а не дека сè било лошо."
            },

            {
                label: "„Ќе ја прашам што точно мисли.“",
                selfEsteem: 1,
                stress: 0,
                resilience: 2,
                consequence:
                    "Поставувањето прашања е знак дека сакаш да научиш, а не дека не знаеш доволно."
            }

        ]

    },

    {
        title: "Крај на денот",

        text: `Конечно си дома.
        
Додека го оставаш ранецот, почнуваш да размислуваш како помина денот.

Имаше моменти кога беше нервозен/на.

Имаше и моменти кога се почувствува горд/а на себе.

Што си кажуваш пред да го завршиш денот?`,

        choices: [

            {
                label: "„Не беше совршено, ама научив нешто денес.“",
                selfEsteem: 2,
                stress: 0,
                resilience: 2,
                consequence:
                    "Учењето од искуството е еден од најважните чекори кон здрава самодоверба."
            },

            {
                label: "„Само грешките ми останаа во глава.“",
                selfEsteem: -2,
                stress: 2,
                resilience: 0,
                consequence:
                    "Нашиот мозок природно повеќе ги памети негативните работи. Потсети се и на тоа што направи добро."
            },

            {
                label: "„Утре е нов ден. Ќе пробам повторно.“",
                selfEsteem: 1,
                stress: 0,
                resilience: 2,
                consequence:
                    "Еден ден не ја гради самодовербата, но може да биде добар чекор напред. Таа расте секојпат кога ќе си дадеш нова шанса."
            }

        ]

    }

];

let currentScene = 0;
let previousConsequence = "";
let selfEsteem = 0;
let stress = 0;
let resilience = 0;
function showScene() {

    const scene = schoolDay[currentScene];

    document.getElementById("story-progress").textContent =
        `Дел ${currentScene + 1} од ${schoolDay.length}`;

    let html = "";

    if (previousConsequence !== "") {

        html += `
        <div class="story-transition">
            <p>${previousConsequence}</p>
        </div>
        `;

    }

    html += `
        <h3>${scene.title}</h3>
        <p style="white-space: pre-line;">${scene.text}</p>
    `;

    document.getElementById("story-text").innerHTML = html;

    const choicesContainer = document.getElementById("story-choices");
    choicesContainer.innerHTML = "";

    document.getElementById("story-note").textContent = "";

    scene.choices.forEach(choice => {

        const button = document.createElement("button");

        button.className = "btn ghost";
        button.textContent = choice.label;

        button.onclick = () => {

            selfEsteem += choice.selfEsteem;
            stress += choice.stress;
            resilience += choice.resilience;

            previousConsequence = choice.consequence;

            currentScene++;

            if (currentScene >= schoolDay.length) {
                showEnding();
            }
            else {
                showScene();
            }

        };

        choicesContainer.appendChild(button);

    });

}
function showEnding() {

    let endingText;

    if (selfEsteem >= 5 && resilience >= 5 && stress <= 3) {

        endingText =
            "Во текот на целиот ден успеа да се соочиш со предизвиците без да дозволиш една грешка да го промени начинот на кој гледаш на себе. Не значи дека немаше трема, туку дека научи да продолжиш и покрај неа.";

    }
    else if (selfEsteem >= 1) {

        endingText =
            "Денот не беше совршен, но успеа да ги препознаеш некои од негативните мисли и да ги замениш со пореален поглед кон себе. Самодовербата се гради токму преку вакви мали чекори.";

    }
    else {

        endingText =
            "Денес негативните мисли често го преземаа главниот збор. Тоа се случува на многу луѓе. Следниот пат обиди се да застанеш и да се запрашаш дали првата мисла што ти доаѓа навистина ја покажува целата слика.";

    }


    document.getElementById("story-progress").textContent =
        "Денот заврши";


    document.getElementById("story-text").innerHTML = `

        <h3>Размислување за денот</h3>

        <p style="white-space: pre-line;">
            ${endingText}
        </p>

    `;


    document.getElementById("story-choices").innerHTML = "";


    document.getElementById("story-note").innerHTML = `

        <button class="btn" id="restart-story">
            Играј повторно
        </button>

    `;


    document.getElementById("restart-story").onclick = () => {

        initGame2();

    };


    // Give growth progress for completing Game 2
    if (growth < 2) {

        growth = 2;
        updateGrowth();

        if (typeof playLevelUpSound === "function") {
            playLevelUpSound();
        }

    }

}



function initGame2() {

    currentScene = 0;

    previousConsequence = "";

    selfEsteem = 0;
    stress = 0;
    resilience = 0;


    showScene();

}



document.addEventListener("DOMContentLoaded", initGame2);