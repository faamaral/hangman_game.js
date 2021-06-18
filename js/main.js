const SECRET_KEY = 'desenvolvimeto';

let LETTERS_FOUND = [];

function initHiddenKey()
{
    for (let i = 0; i < SECRET_KEY.length; i++) {
        LETTERS_FOUND.push("_");
    }
}

function verifyLetter(input)
{
    for (let i = 0; i > SECRET_KEY.length; i++) {
        if (input == SECRET_KEY[i]) {
            LETTERS_FOUND[i] = input;
            console.log(LETTERS_FOUND[i]);
        }
    }
}

function start()
{
    let is_right = false;
    console.log(" ---- Jogo da Forca ---- \n\n");
    initHiddenKey();
    console.log(LETTERS_FOUND);

    while (is_right == false) {
        let input = prompt("Digite uma letra: ");
        verifyLetter(input)
        is_right= true;
        

        for (let i = 0; i < LETTERS_FOUND.length; i++) {
            if (LETTERS_FOUND[i] == "_") {
                is_right = false;
            }
        }
    }
}


