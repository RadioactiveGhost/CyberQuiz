let pointsBox = document.getElementById('pontosAval');
let suggestionBox = document.getElementById('sugestoes');

suggestionBox.style.display = 'none';

function processarPontos() {
    let pontosLocal = localStorage.getItem("pontos");
    let totalLocal = localStorage.getItem("total");
    let preencher = document.getElementById("preencher");
    preencher.innerHTML = 'TESTE'
    if (pontosLocal < 2) {
        preencher.innerHTML = "DAMN";
    }
    else if (pontosLocal < 4) {
        preencher.innerHTML = "Meh";
    }
    else if (pontosLocal < 6) {
        preencher.innerHTML = "Nice";
    }
    else if (pontosLocal < 9) {
        preencher.innerHTML = "Whoa!";
    }
    else {
        preencher.innerHTML = "Congrats!!";
    }
    preencher.innerHTML+= "\
    <br>Acertaste "+ pontosLocal +" de "+ totalLocal +" perguntas\
    ";
}

function mostrarSugestoes() {
    pointsBox.style.display = 'none';
    suggestionBox.style.display = 'block';
}