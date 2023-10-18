let eszkozok = document.getElementsByClassName("gomb");
let kivalasztott = "";
let gepValasztott = "";
let eredmeny = 0;

let endKo = document.getElementById("endRock");
let endPapir = document.getElementById("endPaper");
let endOllo = document.getElementById("endRock");

let endKoGep = document.getElementById("endRockGep");
let endPapirGep = document.getElementById("endPaperGep");
let endOlloGep = document.getElementById("endRockGep");

let eredmenySzoveg = document.getElementById("eredmeny");

const valaszthatoEszkozok = ["rock", "paper", "scissors"];
let random = Math.floor(Math.random()*eszkozok.length);
gepValasztott = valaszthatoEszkozok[random];
console.log(gepValasztott);

for(let i = 0; i < eszkozok.length; i++){
    eszkozok[i].addEventListener("click", ()=>{
        if(eszkozok[i].id == "rock"){
            kivalasztott = "rock";
            if (gepValasztott == "rock") {
                alert("Draw")
            }
            else if (gepValasztott == "paper") {
                alert("Lose")
            }
            else if (gepValasztott == "scissors") {
                alert("Win")
                eredmeny++;
            }
            random = Math.floor(Math.random()*3);
            gepValasztott = valaszthatoEszkozok[random];
            console.log(eredmeny);
        }
        else if(eszkozok[i].id == "paper"){
            kivalasztott = "paper";
            if (gepValasztott == "rock") {
                alert("Win")
                eredmeny++;
            }
            else if (gepValasztott == "paper") {
                alert("Draw")
            }
            else if (gepValasztott == "scissors") {
                alert("Lose")
                
            }
            random = Math.floor(Math.random()*3);
            gepValasztott = valaszthatoEszkozok[random];
            console.log(eredmeny);
        }
        else if(eszkozok[i].id == "scissors"){
            kivalasztott = "scissors";
            if (gepValasztott == "rock") {
                alert("Lose")
            }
            else if (gepValasztott == "paper") {
                alert("Win")
                eredmeny++;
            }
            else if (gepValasztott == "scissors") {
                alert("Draw")
                
            }
            random = Math.floor(Math.random()*3);
            gepValasztott = valaszthatoEszkozok[random];
            console.log(eredmeny);
        }
        document.getElementById("count").innerHTML = eredmeny;
        
        
    })
    
}