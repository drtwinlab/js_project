let humanpoints = 0;
let aipoints = 0;

function getComputerChoice() {
    function getrandomint(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);   
    }
    let choice = getrandomint(1,3);
    if (choice == 1) {
        return 'Камень';
        } else if (choice == 2) {
          return 'Ножницы';
            }else {
            return 'Бумага';    
            }

}
function getHumanChoice(x) {
if(x==null){return alert("Canceled")} else{
let newx = x.trim().toLowerCase().slice(1);
x = x.slice(0,1).toUpperCase() + newx;
return x;
}
}
function checkWinner (ai, hum) {
if(hum == "Камень" && ai =="Ножницы"){
return "Ты Победил";
    } else if (hum == "Ножницы" && ai =="Бумага") {
        return "Ты Победил";
        } else if (hum == "Бумага" && ai =="Ножницы") {
            return "АИ Победил"; 
            }else if (hum == "Ножницы" && ai =="Камень") {
                return "АИ Победил"; 
                }else if (hum == "Камень" && ai =="Бумага") {
                    return "АИ Победил"; 
                    }else if (hum == "Бумага" && ai =="Камень") {
                        return "Ты Победил";
                        }else{
                        return "Ничья!";  
                        }
}
function rounds(r){
while (aipoints < r && humanpoints < r)
{
let input = prompt("Введите Камень Ножницы или Бумагу")

    let aichoice = getComputerChoice();
    let humanchoice = getHumanChoice(input);
    
    if (humanchoice !== "Камень" && humanchoice !== "Ножницы" && humanchoice !== "Бумага") {
    alert("Try again!"); break;
    } else{
        if (checkWinner(aichoice, humanchoice) == "Ты Победил") 
        {humanpoints += 1;} 
        else if (checkWinner(aichoice, humanchoice) == "АИ Победил") {aipoints += 1;} 
        else {humanpoints += 0; aipoints += 0;}

            console.log("Round info: ")
            console.log("AI: " + aichoice + " | Human: " + humanchoice + " | Winner: " + checkWinner(aichoice, humanchoice))

            console.log("Total Info: ")
            console.log("AI total points: " + aipoints + " | Human total points: " + humanpoints)
            } 

} 

}


let firsthi = prompt("Hi man! Let's play the game! How many rounds it should be?");

firsthi = parseInt(firsthi);

if (typeof(firsthi) == "number" && !isNaN(firsthi) && firsthi > 0 && firsthi < 10) {
rounds(firsthi)
} else if (firsthi>=10) { alert("I do not want to play with you so long, choose a number of rounds less than 10") } else {
alert("It's not what I expected! Write just a number, it's so simple...")
}
