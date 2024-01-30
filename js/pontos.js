let pointsBox = document.getElementById('pontosAval');
let suggestionBox = document.getElementById('sugestoes');

suggestionBox.style.display = 'none';

function processarPontos() {
    let pontosLocal = localStorage.getItem("pontos");
    let totalLocal = localStorage.getItem("total");
    let preencher = document.getElementById("preencher");
    preencher.innerHTML = 'TESTE'
    if (pontosLocal < 2) {
        preencher.innerHTML = "<img class=\"emoji\" width=30% src=\"../assets/img/muitomau.png\">";
    }
    else if (pontosLocal < 4) {
        preencher.innerHTML = "<img class=\"emoji\" width=30% src=\"../assets/img/mau.png\">";
    }
    else if (pontosLocal < 6) {
        preencher.innerHTML = "<img class=\"emoji\" width=30% src=\"../assets/img/bom.png\">";
    }
    else if (pontosLocal < 9) {
        preencher.innerHTML = "<img class=\"emoji\" width=25% src=\"../assets/img/muitobom.png\">";
    }
    else {
        preencher.innerHTML = "<img class=\"emoji\" width=30% src=\"../assets/img/excelente.png\">";
    }
    preencher.innerHTML+= "<h2>\
    <span style=\"font-weight: 900\"><font color=\"#0F3866\">"+ pontosLocal +"</font></span>/"+ totalLocal +"\
    </h2><br>";
}

function mostrarSugestoes() {
    pointsBox.style.display = 'none';
    suggestionBox.style.display = 'block';
}