let scoreCountHome = 0
let scoreCountGuest = 0

let scorHom = document.getElementById("num-sco1");
let scorGue = document.getElementById("num-sco2");

function resetScoreHome() {
     scoreCountHome = 0
     scorHom.textContent = 0
     }

function plusOneH() {
    scoreCountHome += 1
    scorHom.textContent = scoreCountHome
    }

function plusTwoH() {
    scoreCountHome += 2
    scorHom.textContent = scoreCountHome
    }

function plusThreeH() {
    scoreCountHome += 3
    scorHom.textContent = scoreCountHome
    }

function resetScoreGuest() {
     scoreCountGuest = 0
     scorGue.textContent = 0
}
function plusOneG() {
    scoreCountGuest += 1
    scorGue.textContent = scoreCountGuest
    }

function plusTwoG() {
    scoreCountGuest += 2
    scorGue.textContent = scoreCountGuest
}

function plusThreeG() {
    scoreCountGuest += 3
    scorGue.textContent = scoreCountGuest
}
