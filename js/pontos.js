let pointsBox = document.getElementById('pontosAval');
let suggestionBox = document.getElementById('sugestoes');

suggestionBox.style.display = 'none';

function processarPontos() {
    let pontosLocal = localStorage.getItem("pontos");
    let totalLocal = localStorage.getItem("total");
    let preencher = document.getElementById("preencher");
    preencher.innerHTML = 'TESTE'
    if (pontosLocal < 2) {
        preencher.innerHTML = "Muito Mau!<br>";
        preencher.innerHTML += "<img class=\"emoji\" width=60 src=\"../assets/img/muitomau.png\">";
    }
    else if (pontosLocal < 4) {
        preencher.innerHTML = "Mau!";
        preencher.innerHTML += "<img class=\"emoji\" width=60 src=\"../assets/img/mau.png\">";
    }
    else if (pontosLocal < 6) {
        preencher.innerHTML = "Bom!";
        preencher.innerHTML += "<img class=\"emoji\" width=60 src=\"../assets/img/bom.png\">";
    }
    else if (pontosLocal < 9) {
        preencher.innerHTML = "Muito Bom!";
        preencher.innerHTML += "<img class=\"emoji\" width=60 src=\"../assets/img/muitobom.png\">";
    }
    else {
        preencher.innerHTML = "Excelente!";
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