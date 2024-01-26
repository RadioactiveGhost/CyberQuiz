let pointsBox = document.getElementById('pontosAval');
let suggestionBox = document.getElementById('sugestoes');

suggestionBox.style.display = 'none';

function processarPontos() {
    let pontosLocal = localStorage.getItem("pontos");
    let totalLocal = localStorage.getItem("total");
    let preencher = document.getElementById("preencher");
    preencher.innerHTML = 'TESTE'
    if (pontosLocal < 2) {
        preencher.innerHTML = "Muito Mau!";
    }
    else if (pontosLocal < 4) {
        preencher.innerHTML = "Mau!";
    }
    else if (pontosLocal < 6) {
        preencher.innerHTML = "Bom!";
    }
    else if (pontosLocal < 9) {
        preencher.innerHTML = "Muito Bom!";
    }
    else {
        preencher.innerHTML = "Excelente!";
    }
    preencher.innerHTML+= "\
    <br><br>Acertaste "+ pontosLocal +" de "+ totalLocal +" desafios\
    ";
}

function mostrarSugestoes() {
    pointsBox.style.display = 'none';
    suggestionBox.style.display = 'block';
}