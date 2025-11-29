function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let userprompt = prompt("Камень, ножницы или бумага? Введи слово!");

userprompt = getHumanChoice(userprompt);
let aiprompt = getMachineChoice();

//Points
let userpoint = 0;
let aipoint = 0;

function getHumanChoice(userInput){


userInput = userInput.toLowerCase().trim();

return userInput
}

// AI Logic
function getMachineChoice() {
let pcprompt = getRandomIntInclusive(1, 3);

if (pcprompt == 1) {
    pcprompt = "Камень";
} else if (pcprompt == 2) {
    pcprompt = "Ножницы";
} else pcprompt = "Бумага";

return pcprompt.toLowerCase().trim();
}



function playRound(userprompt, aiprompt) {
    if ((userprompt == "бумага") && (aiprompt == "камень")) {
    console.log("Победил юзер!"); return userpoint++;
    } else if ((userprompt == "ножницы") && (aiprompt == "камень")){
        console.log("Победил ИИ!"); return aipoint++;
            } else if ((userprompt == "бумага") && (aiprompt == "ножницы")){
            console.log("Победил ИИ!"); return aipoint++;
                } else if ((userprompt == "камень") && (aiprompt == "ножницы")){
                console.log("Победил юзер!"); return userpoint++;
                    } else if ((userprompt == "камень") && (aiprompt == "бумага")){
                    console.log("Победил ИИ!"); return aipoint++;
                        } else if ((userprompt == "ножницы") && (aiprompt == "бумага")){
                        console.log("Победил юзер!"); return userpoint++;
                        } else console.log("Ничья!");

}

let Round = 5;
for (let i =1; i<Round; i++ ) {
console.log("Round: "+i)
playRound(userprompt, aiprompt);
}

