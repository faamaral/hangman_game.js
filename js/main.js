const SECRET_KEYS = [
    ["D","E","S","E","N","V","O","L","V","I","M","E","N","T","O"],
    ["W","E","B"],
    ["J","A","V","A"],
    ["J","A","V","A","S","C","R","I","P","T"]
];

let raffle = Math.floor((Math.random()*(SECRET_KEYS.length-1)));

let raffledKey = SECRET_KEYS[raffle];

let LETTERS_FOUND = [];

let ERRORS = 0

let LIFE = 6

function initHiddenKey()
{
    for (let i = 0; i < raffledKey.length; i++) {
        LETTERS_FOUND[i] = "_";
    }
}

function printHiddenKey()
{
    for (let i = 0; i < LETTERS_FOUND.length; i++) {
        let secret_word = document.getElementById("secret_word");
        let key = document.createTextNode(LETTERS_FOUND[i]);
        secret_word.appendChild(key)
    }
}

const printLife = error => {
    let errors = document.getElementById("errors");
    let life = document.createTextNode(error);
    errors.appendChild(life);
}

const verifyLetter = () =>
{
    let form = document.form;
    let input = form.elements["letter"];
    var key = input.value;
    key = key.toUpperCase();
    for (let i = 0; i < raffledKey.length; i++) {
        if (raffledKey[i] === key) {
            LETTERS_FOUND[i] = key;
            var is_right = true;
            console.log(LETTERS_FOUND[i]);
        }
        input.value= "";
    }

    let secret_word = document.getElementById("secret_word");
    secret_word.innerHTML="";
    printHiddenKey();
    
    if (!is_right) {
        var generateLetter = document.getElementById("wrong_letters");
        var wrong_letter = document.createTextNode(""+key);
        generateLetter.appendChild(wrong_letter);
        ERRORS += 1;
        LIFE -= 1;
        let errors = document.getElementById("errors");
        errors.innerHTML = "Vidas: "
        printLife(LIFE);
        
        var hangman = document.getElementById("hangman");
        hangman.src = "./assets/images/" + ERRORS + ".jpg";
    }

    let finished = true;
    for (let i = 0; i < LETTERS_FOUND.length; i++) {
        if (LETTERS_FOUND[i] === "_") {
            finished = false;
        }
    }
    if (finished) {
        alert("Você venceu, parabens !!!!");
    }

    if (ERRORS === 6) {
        alert("Você não tem mais chances, tente da proxima vez !!!\nA palavra correta era: "+raffledKey.join(''));
        location.reload();
    }
}

const start = () => {
    initHiddenKey();
    printHiddenKey();
    printLife(LIFE);
}

onload = start

