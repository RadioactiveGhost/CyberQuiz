let pointsBox = document.getElementById('pontosAval');
let nomeP = document.getElementById('nomeP');
let nomeS = document.getElementById('nomeS');
let email = document.getElementById('email');
let tempo = document.getElementById('tempo');
let suggestionBox = document.getElementById('sugestoes');
let pontos = document.getElementById('pontos');
let nivel1 = document.getElementById('nivel1');
let nivel2 = document.getElementById('nivel2');
let nivel3 = document.getElementById('nivel3');
let nivel4 = document.getElementById('nivel4');
let nivel5 = document.getElementById('nivel5');
let nivel6 = document.getElementById('nivel6');
let nivel7 = document.getElementById('nivel7');
let nivel8 = document.getElementById('nivel8');
let nivel9 = document.getElementById('nivel9');
let nivel10 = document.getElementById('nivel10');

suggestionBox.style.display = 'none';

function processarPontos() {
    let pontosLocal = localStorage.getItem("pontos");
    let totalLocal = localStorage.getItem("total");
    nomeP.value = localStorage.getItem("nomeP");
    nomeS.value = localStorage.getItem("nomeS");
    email.value = localStorage.getItem("email");
    tempo.value = localStorage.getItem('tempo');
    pontos.value = localStorage.getItem('pontos');
    let niveis = JSON.stringify(localStorage.getItem('pontosArray'));
    console.log(Array.isArray(niveis));
    nivel1.value = niveis[2];
    nivel2.value = niveis[4];
    nivel3.value = niveis[6];
    nivel4.value = niveis[8];
    nivel5.value = niveis[10];
    nivel6.value = niveis[12];
    nivel7.value = niveis[14];
    nivel8.value = niveis[16];
    nivel9.value = niveis[18];
    nivel10.value = niveis[20];
    let preencher = document.getElementById("preencher");
    preencher.innerHTML = 'TESTE'
    if (pontosLocal < 2) {
        preencher.innerHTML = "Muito Mau!<br>";
        preencher.innerHTML += "<img class=\"emoji\" width=60 src=\"../assets/img/muitomau.png\">";
    }
    else if (pontosLocal < 4) {
        preencher.innerHTML = "Mau!<br>";
        preencher.innerHTML += "<img class=\"emoji\" width=60 src=\"../assets/img/mau.png\">";
    }
    else if (pontosLocal < 6) {
        preencher.innerHTML = "Bom!<br>";
        preencher.innerHTML += "<img class=\"emoji\" width=60 src=\"../assets/img/bom.png\">";
    }
    else if (pontosLocal < 9) {
        preencher.innerHTML = "Muito Bom!<br>";
        preencher.innerHTML += "<img class=\"emoji\" width=60 src=\"../assets/img/muitobom.png\">";
    }
    else {
        preencher.innerHTML = "Excelente!<br>";
        preencher.innerHTML += "<img class=\"emoji\" width=60 src=\"../assets/img/excelente.png\">";
    }
    preencher.innerHTML+= "\
    <br><br>Acertaste "+ pontosLocal +" de "+ totalLocal +" desafios\
    ";
}

function mostrarSugestoes() {
    pointsBox.style.display = 'none';
    suggestionBox.style.display = 'block';
}