// Este array é o conjunto de desafios no HTML (definidos pela classe qframe)
let qArray = document.getElementsByClassName("qframe");

// Variável que guarda a posição atual
let positione = 0;

// Esta função esconde todos os desafios menos o primeiro,
// uma vez que o objetivo é mostrar um a um
function onStart() {
    for (i = 0; i < qArray.length; i++) {
        if (i != positione) {
            qArray[i].style.display = "none";
        }
    }
}
onStart()
let start = Date.now();
//
let points = 0;


// Esta função é usada para a mudança de desafios, sempre
// para o seguinte
function changeQuiz() {
    positione++;
    if (positione < qArray.length) {
        for (i = 0; i < qArray.length; i++) {
            if (i == positione) {
                qArray[i].style.display = "flex";
    
            } else {
                qArray[i].style.display = "none";
            }
        }
    }
}

// Variável e função para modo de botão
// 0 Passa de Pop para Balões/Sabias que, 1 passa do anterior para vazio
let buttonmode = 0;
function nextButton(n) {
    //console.log(buttonmode);
    if (n == 0 && buttonmode != 0) {
        buttonmode--;
    }
    if (n == 1 && buttonmode !=3) {
        buttonmode++;
    }
    if (n == 1 && buttonmode == 3) {
        if (positione == qArray.length-1) {
            localStorage.setItem('finished', 'set');
            mostrarPaginaPontos();
            return;
        }
        //quiz(1);
        changeQuiz();
        buttonmode = 0;
        block.style.display = 'none';
        balao1.style.display = 'none';
        balao2.style.display = 'none';
        sabias.style.display = 'none';
        helpt.innerHTML = desafioArray[positione];
        mostrarQuebra();
        //mostrarJanelaDesafio(positione);
        return;
    }
    //window.alert(buttonmode);
    if (buttonmode == 0) {
        popup.style.display = 'block';
        balao1.style.display = 'none';
        balao2.style.display = 'none';
        sabias.style.display = 'none';
        sabias1.style.display = 'none';
        sabias2.style.display = 'none';
        prevb.setAttribute('disabled', true);
        nextb.value = 'Seguinte';
        return;
    }
    if (buttonmode == 1) {
        popup.style.display = 'none';
        balao1.style.display = 'block';
        balao2.style.display = 'none';
        sabias.style.display = 'block';
        sabias1.style.display = 'block';
        sabias2.style.display = 'none';
        prevb.removeAttribute('disabled');
        nextb.value = 'Seguinte';
        return;
    }
    if (buttonmode == 2) {
        popup.style.display = 'none';
        balao1.style.display = 'none';
        balao2.style.display = 'block';
        sabias.style.display = 'block';
        sabias1.style.display = 'none';
        sabias2.style.display = 'block';
        nextb.value = 'Próximo';
        if (positione == qArray.length-1) {
            nextb.value = 'Finalizar';
        }
        return;
    }
}

// Array aonde são guardados as especificações de cada
// desafio
let desafioArray = [
    "Entraste num website e tens que te registar.<br><h3 style=\"margin-top: 5px;\">Seleciona as 2 palavras&#x2011;passe que consideras mais seguras!</h3>",
    "Pesquisas-te pela Netflix para fazer download.<br><h3 style=\"margin-top: 5px;\"><b>Entra no website</b> que achares mais seguro para descarregar!</h3>",
    "Recebeste esta mensagem no teu telemóvel.<br><h3 style=\"margin-top: 5px;\">Denuncia ou clica no link!</h3>",
    "Pesquisaste facebook e entraste no website.<br><h3 style=\"margin-top: 5px;\">Se achares seguro faz login, se não sai da rede social!</h3>",
    "Recebeste este email depois de submeter o IRS.<br><h3 style=\"margin-top: 5px;\">Se achares seguro responde, se não denuncia!</h3>",
    "Recebeste esta mensagem numa aplicação de chat.<br><h3 style=\"margin-top: 5px;\">Se confiares adiciona aos contactos, se não denuncia!</h3>",
    "Entraste nesta página de login.<br><h3 style=\"margin-top: 5px;\">Procede se achares seguro, se não sai!</h3>",
    "Descarregaste a aplicação \"Microsoft Word grátis\".<h3 style=\"margin-top: 5px;\">Instala, só se achares seguro!</h3>",
    "Foste a um café e precisas de ir ao email. Tens o hotspot ligado.<h3 style=\"margin-top: 5px;\">Conecta-te à rede que achares mais segura!</h3>",
    "Recebeste mais um email, desta vez em nome da empresa.<h3 style=\"margin-top: 5px;\">Descarrega o anexo se achares seguro, se não denuncia!</h3>"
]

// Variáveis para balão de ajuda
let helpi = document.getElementById('helpi');
let helpt = document.getElementById('helpt');
helpt.innerHTML = desafioArray[positione];

// Função para mostrar um elemento (s2) ao passar o rato
// em cima de outro (s1), e esconder quando o rato sai
function hover(s1, s2) {
    const se1 = document.getElementById(s1);
    const se2 = document.getElementById(s2);

    se1.addEventListener(
        "mouseenter",
        (event) => {
            se2.style.display = 'block';
        },
        false,
    );

    se1.addEventListener(
        "mouseleave",
        (event) => {
            se2.style.display = 'none';
        },
        false,
    );
}
hover("download", "downloadhover");
hover("emailimg", "emailimghover");
hover("atrem", "emailhover");
hover("emailimgnat", "anexohover");
hover("natrem", "natalinahover");
hover("helpi", "helpt");

// Variáveis das várias janelas principais
let block = document.getElementById('block');
let registo = document.getElementById('registo');
let popup = document.getElementById('pop-up');
let popwindow = document.getElementById('popwindow');
let quebra = document.getElementById('quebra');
let quebrat = document.getElementById('quebrat');
let pontos = document.getElementById('pontos');
let pontost = document.getElementById('pontost');

// Variáveis das janelas de informação
let balao1 = document.getElementById('balao1');
let balao2 = document.getElementById('balao2');

// Variáveis de botões de janelas
let nextb = document.getElementById('nextb');
let prevb = document.getElementById('prevb');
let nextbdiv = document.getElementById('nextbdiv');

// Variáveis das janelas de Sabias que
let sabiasque = document.getElementById('sabiasque');
let sabias = document.getElementById('sabias');
let sabias1 = document.getElementById('sabias1');
let sabias2 = document.getElementById('sabias2');
let desafio = document.getElementById('desafio');
let desafiot = document.getElementById('desafiot');

// Estado inicial de determinadas divs
block.style.display = 'block';
balao1.style.display = 'none';
balao2.style.display = 'none';
sabias.style.display = 'none';
desafio.style.display = 'none';
popwindow.style.display = 'none';
quebra.style.display = 'none';
pontos.style.display = 'none';

// Variáveis para janelas de informação e Sabias que
let mPH = '', b1H = '', b2H = '', s1H = '', s2H = '';

// Função para menus de dropdown
function dropdown(n) {
    document.getElementById(n).classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// Variáveis de detalhes da pessoa
let nomeP = '';
let nomeS = '';
let email = '';
let cidade = '';
function startQuiz() {
    nomeP = document.getElementById('nomeP').value;
    nomeS = document.getElementById('nomeS').value;
    email = document.getElementById('email').value;
    cidade = document.getElementById('cidade').value;
    if (!(nomeP == '' || nomeP == null) && !(nomeS == '' || nomeS == null) && !(email == '' || email == null) &&!(cidade == '' || cidade == null)) {
        block.classList.toggle('registo');
        registo.style.display = 'none';
        document.getElementById("login").value = nomeP;
        document.getElementById('engNome').innerText = nomeP;
        document.getElementById('engCidade').innerText = cidade;
        document.getElementById('emailNome').innerText = nomeP + " " + nomeS;
        document.getElementById('uacaddress').style.display = 'none';
        //document.getElementById('wifiNome').innerText = nomeP;
        for (i = 0; i < nomeP.length; i++) {
            if (nomeP[i] == ' ' && i < 10) {
                document.getElementById('wifiNome').innerText    += '_';
            } else if (i < 10) {
                document.getElementById('wifiNome').innerText    += nomeP[i];
            }
        }
        document.getElementById('searchuser').innerText = nomeP + " " + nomeS;
        document.getElementById('locationuser').innerText = cidade;
        document.getElementById('geouser').value = '';
        for (i = 0; i < nomeP.length; i++) {
            if (nomeP[i] == ' ') {
                document.getElementById('geouser').value += '.';
            } else {
                document.getElementById('geouser').value += nomeP[i].toLowerCase();
            }
        }
        document.getElementById('geouser').value += "@globalvia.com";
        mostrarJanelaDesafio (0);
    } else {
        window.alert("Por favor, preenche todos os campos!");
    }
}

function showPopup() {
    balao1.innerHTML = b1H;
    balao2.innerHTML = b2H;
    sabias1.innerHTML = s1H;
    sabias2.innerHTML = s2H;
    popup.style.display = 'block';
    block.style.display = 'block';
    popwindow.style.display = 'block';
    prevb.setAttribute('disabled', true);
    nextb.value = 'Seguinte';

}

//PÁGINAS DE QUEBRA
quebraA = [ 
//PESQUISA DOWNLOAD PARA PASS REGISTO:
        '\
            <span class="quebrasmaller">\
                Cada resposta correta é um passo mais perto da tua\
            </span>\
            <span class="quebrabigger" style="font-size: 55px">\
                segurança online!\
            </span>\
            <div class="img1">\
                <img width="60" src="../assets/img/quebra3.png">\
                <img width="60" src="../assets/img/quebra3_2.png">\
            </div>',    
//PASS REGISTO PARA SMS:
        '\
            <span class="quebrasmaller">\
                Quanto mais avanças, menos\
            </span>\
            <span class="quebrabigger" style="font-size: 55px">\
                vulnerabilidades\
            </span>\
            <span class="quebrasmaller">\
                podem ser usadas contra ti!\
            </span>\
            <div class="img1">\
                <img width="60" src="../assets/img/quebra2_2.png">\
                <img width="80" src="../assets/img/quebra2.png">\
            </div>',
//SMS PARA LOGIN FACEBOOK:
        '\
            <span class="quebrasmaller">\
                Sempre que superares um desafio, uma\
            </span>\
            <span class="quebrabigger" style="font-size: 45px">\
                ameaça é derrotada!\
            </span>\
            <div class="img1">\
                <img width="50" src="../assets/img/quebra6.png">\
                <img width="60" src="../assets/img/quebra6_2.png">\
            </div>',
//LOGIN FACEBOOK PARA EMAIL FINANÇAS:
        '\
            <span class="quebrasmaller">\
                Segurança é o teu superpoder, usa-o\
            </span>\
            <span class="quebrabigger" style="font-size: 55px">\
                com sabedoria!\
            </span>\
            <div class="img1">\
                <img width="65" src="../assets/img/quebra4.png">\
                <img width="50" src="../assets/img/quebra4_2.png">\
            </div>',
//EMAIL FINANCAS PARA WHATSAPP:
        '\
            <span class="quebrasmaller">\
                Estás a contruir uma fortaleza contra\
            </span>\
            <span class="quebrabigger" style="font-size: 55px">\
                cibercriminosos!\
            </span>\
            <span class="quebrasmaller">\
                Continua com atenção!\
            </span>\
            <div class="img1">\
                <img width="50" src="../assets/img/quebra5.png">\
                <img width="60" src="../assets/img/quebra5_2.png">\
            </div>',
//WHATSAPP PARA LOGIN GEOMIC
        '\
            <span class="quebrasmaller">\
                Tens uma das armas mais valiosas contra o cibercrime:\
            </span>\
            <span class="quebrabigger" style="font-size: 52px">\
                A tua determinação!\
            </span>\
            <div class="img1">\
                <img width="65" src="../assets/img/quebra6_3.png">\
                <img width="60" src="../assets/img/quebra3.png">\
            </div>',
//LOGIN GEOMIC PARA USER ACCESS CONTROL
        '\
            <span class="quebrasmaller">\
                Observa, questiona e age.\
            </span>\
            <span class="quebrabigger" style="font-size: 55px">\
                O teu cuidado\
            </span>\
            <span class="quebrasmaller">\
                é mais forte do que qualquer antivírus!\
            </span>\
            <div class="img1">\
                <img width="70" src="../assets/img/quebra7.png">\
                <img width="55" src="../assets/img/quebra7_2.png">\
            </div>',
//USER ACCESS CONTROL PARA REDES WI-FI
        '\
            <span class="quebrasmaller">\
                Nível após nível, a\
            </span>\
            <span class="quebrabigger" style="font-size: 55px">\
                cibersegurança\
            </span>\
            <span class="quebrasmaller">\
                torna-se parte do teu dia-a-dia!\
            </span>\
            <div class="img1">\
                <img width="50" src="../assets/img/quebra8.png">\
                <img width="65" src="../assets/img/quebra8_2.png">\
            </div>',
//REDES WI.FI PARA EMAIL NATALINA
        '\
        <span class="quebrasmaller">\
            Estás quase a terminar e a tua\
        </span>\
        <span class="quebrabigger" style="font-size: 55px">\
            auto-proteção\
        </span>\
        <span class="quebrasmaller">\
            está mais consciencializada do que nunca!\
        </span>\
        <div class="img1">\
            <img width="65" src="../assets/img/quebra4.png">\
            <img width="50" src="../assets/img/quebra4_2.png">\
        </div>'];

function inserirQuebra() {
    quebrat.innerHTML = quebraA[positione-1];
}

function mostrarQuebra() {
    changeBG(1);
    inserirQuebra();
    block.style.display = 'block';
    quebra.style.display = 'block';
    popwindow.style.display = 'none';
}

function esconderQuebra() {
    changeBG(0);
    quebra.style.display = 'none';
    mostrarJanelaDesafio(positione);
}

function changeBG(n) {
    if (n) {
        if (positione == 1) {
            block.style.backgroundImage = "linear-gradient(120deg, #cc8073 0%, #89a7c3 40%, #96cd0f 75%)";
        }
        if (positione == 2) {
            block.style.backgroundImage = "url(../assets/img/bg2_company.jpg)";
        }
        if (positione == 3) {
            block.style.backgroundImage = "linear-gradient(120deg, #1e66f5 0%, rgb(241,205,1) 100%)";
        }
        if (positione == 4) {
            block.style.backgroundColor = "#0f3866";
        }
        if (positione == 5) {
            block.style.backgroundImage = "linear-gradient(45deg, #0f3866, #94e8bf)";
        }
        if (positione == 6) {
            block.style.backgroundImage = "linear-gradient(120deg, #858a86 0%, #453118 50%, #0a171d 100%)";
        }
        if (positione == 7) {
            block.style.backgroundImage = "linear-gradient(45deg, #5b7377, #364e4e)";
        }
        if (positione == 8) {
            block.style.backgroundImage = "linear-gradient(45deg, white 30%, #94e8bf 80%)";
        }
        if (positione == 9) {
            block.style.backgroundColor = "#0f3866";
        }
    } else {
        block.style.backgroundImage = "none";
        block.style.backgroundColor = "rgba(0, 0, 0, 0.8";
    }
}

function mostrarJanelaDesafio (n){
    desafiot.innerHTML = "<h1><center><font color=\"#0F3866\">Desafio " + (positione + 1) + "</font></center></h1><br><br>";
    desafiot.innerHTML += desafioArray[n];
    popwindow.style.display = 'none';
    block.style.display = 'block';
    desafio.style.display = 'block';
    //Retira o botão ajuda
    document.getElementById('help').style.display = "none";
}

function esconderJanelaDesafio() {
    block.style.display = 'none';
    desafio.style.display = 'none';
    //Mostra o botão ajuda
    document.getElementById('help').style.display = "block";
}

let pSize = qArray.length;
let pontosArray = [];
function contarPontos(n) {
    pontosArray.push(n);
}

function mostrarPaginaPontos() {
    let tempoTotal = Date.now() - start;
    localStorage.setItem("nomeP", nomeP);
    localStorage.setItem("nomeS", nomeS);
    localStorage.setItem("email", email);
    localStorage.setItem("tempo", tempoTotal);
    localStorage.setItem("pontos", points); 
    localStorage.setItem("pontosArray", JSON.stringify(pontosArray));
    localStorage.setItem("total", qArray.length);
    location.href = "final.html";
}

//Função para inserir um dos títulos das páginas de info
//1 para "o que poderia ter acontecido"
//2 para "como me prevenir"
function putSubtitle(n){
    
    let texto;

    if(n == 1){
        texto = '<h2 class="subtitle">\
                O que poderia ter acontecido?\
                </h2>';
    }
    else if(n == 2){
        texto = '<h2 class="subtitle">\
                Como me prevenir?\
                </h2>';
    }
    return(texto);
}

//Função para inserir bullets
function putCaret(){
    return('<br><i class="fa-solid fa-caret-right"></i>');
}

//Função para inserir "sabias que"
function putSabiasQue(t1, t2){
    let texto =
        '<span class="squote">\
            Sabias que?\
        </span>\
        <br>\
        <span class="tquote">'
        + t1 + '<br><i>Fonte: ' + t2 + '</i></span>';
    
    return(texto);
}

//FUNÇÕES COM INFORMAÇÕES DOS NÍVEIS

function submitSearch(n) {
    let mPH = '';
    //O QUE PODERIA TER ACONTECIDO --------------------------
    b1H = 
        putSubtitle(1) +
        putCaret() +
            'Ias infetar o teu <b>computador com um trojan</b>'
        + putCaret() +
            'O teu sistema iria <b>contagiar outros dispositivos</b>';
    //COMO ME PREVENIR --------------------------------------    
    b2H = 
        putSubtitle(2) +
        putCaret() +
            'Mantém o <b>antivírus ativo</b>'
        + putCaret() +
            '<b>Evita abrir links</b> de fontes desconhecidas'
        + putCaret() +
            '<b>Nunca desligues a firewall</b>, para que todo o tráfego de rede seja controlado';
    //SABIAS QUE --------------------------------------------
    s1H = 
        putSabiasQue('"Desde 2022, existem mais de 1590 domínios que replicaram os websites dos bancos líderes do Reino Unido."', 'ComputerWeekly');

    s2H = 
        putSabiasQue('“\'Spoofing\' é uma técnica de fraude online que engana os utilizadores pela mera aparência do conteúdo apresentado”', 'IBM');
    //RESPOSTAS  --------------------------------------------
    if (n == 1) {
        mPH = 
            '<h1 class="right">\
                Descarregaste uma aplicação fidedigna!\
            </h1>\
            <br><br>\
            <h3><center>\
                Esse era o website mais seguro\
            </center></h3>\
            <br>';
        contarPontos(1);
        points++;
    } else {
        mPH = 
            '<h1 class="wrong">\
                DESCARREGASTE UM VÍRUS!\
            </h1>\
            <br><br>\
            <h3><center>\
                O website mais seguro seria\
            </center></h3>\
            <br>';
        contarPontos(0);
    }
    mPH += 
            '<center><h4>\
            <font color=\"#0F3866\">\
                Microsoft Apps\
            </font>\
            </center></h4>\
            <br><br>\
            <small><center>\
                Todas as aplicações na Microsoft <b>foram previamente verificadas e testadas</b> pela própria.\
            </center></small>';

    popup.innerHTML = mPH;
    showPopup();
}

function submitPass(n) {
    let pass = document.getElementsByClassName('pass');
    let checked = 0;
    for (i = 0; i < 6; i++) {
        if(pass[i].checked) {
            checked++;
        }
    }
    if (checked < 2 || checked > 2) {
        mostrarJanelaDesafio(0);
    }
    else {
        let messagePop = '';
        //O QUE PODERIA TER ACONTECIDO --------------------------
        b1H = 
            putSubtitle(1) + 
            putCaret() + 
                'As tuas <b>informações</b> pessoais podiam ser <b>roubadas e vendidas</b>'
            + putCaret() + 
                '<b>Perdias acesso</b> a esta e a todas as contas onde o login fosse igual';
        //COMO ME PREVENIR --------------------------------------
        b2H = 
            putSubtitle(2) +
            putCaret() +
                'No mínimo <b>12 caracteres</b>'
            + putCaret() +
                'Uso de letras <b>maiúsculas</b>, <b>minúsculas</b>, <b>números</b> e <b>símbolos</b>'
            + putCaret() +
                '<b>Não utilizes</b> uma palavra que se encontre no <b>dicionário</b>'
            + putCaret() +
                'Utiliza <b>autenticação multifator</b>';
        //SABIAS QUE --------------------------------------------
        s1H = 
            putSabiasQue('“As palavras-passe mais utilizadas em Portugal são \'admin\', \'123456\' e \'user\'”', 'JN, 2023');
        s2H = 
            putSabiasQue('“A autenticação multifator bloqueia 99.9% de todos os ataques!"', 'FinancesOnline');
        //RESPOSTAS  --------------------------------------------
        if (pass[1].checked && pass[3].checked) { 
            mPH = 
                '<h1 class="right">\
                    Estás em segurança!\
                </h1>\
                <br><br>\
                <h3><center>\
                    Escolheste as palavras-passe mais seguras\
                </center></h3>\
                <br>';
                
            contarPontos(1);
            points++;
        } else {
            mPH = 
                '<h1 class="wrong">\
                    NÃO ESTÁS EM SEGURANÇA!\
                </h1>\
                <br><br>\
                <h3><center>\
                    As palavras-passe seguras são\
                </center></h3>\
                <br>';
            contarPontos(0);
        }
        mPH += 
            '<center><h4>\
            <font color=\"#0F3866\">\
                !LiK3MySch001#*??\
            <br>\
                !--Am@z0Pa55--!\
            </font>\
            </center></h4>\
            <br><br>\
            <small><center>\
                Um hacker levaria <b> mais de mil anos </b> a decifrá-las.\
            <br>\
                As outras em <b> menos de um mês.</b>\
            </center></small>';

        popup.innerHTML = mPH;
        showPopup();
    }
}

function submitSMS(n) {
    let mPH = '';
    //O QUE PODERIA TER ACONTECIDO --------------------------
    b1H = 
        putSubtitle(1) +
        putCaret() +
            'O teu <b>dispositivo ficava infetado</b> com um malware'
        + putCaret() +
            '<b>Irias perder</b> os teus <b>documentos pessoais</b> para sempre';
    //COMO ME PREVENIR --------------------------------------    
    b2H = 
        putSubtitle(2) +
        putCaret() +
            '<b>Contacta a instituição</b> através dos meios confiáveis'
        + putCaret() +
            '<b>Nunca cliques em links</b> enviados em mensagens suspeitas'
        + putCaret() +
            '<b>Repara nos detalhes</b>, como erros ortográficos e pedidos com urgência';
    //SABIAS QUE --------------------------------------------
    s1H = 
        putSabiasQue('"Em Portugal, de 2021 para 2022, as denúncias de cibercrime aumentaram 73,58%."', 'Ministério Público');

    s2H = 
        putSabiasQue('“\'Smishing\' é um tipo de ataque realizado através de SMS.”', 'IBM');
    //RESPOSTAS  --------------------------------------------
    if (n == 1) {
        mPH = 
            '<h1 class="right">\
                Estás em segurança!\
            </h1>\
            <br><br>\
            <h3><center>\
                Escolheste o mais correto a fazer\
            </center></h3>\
            <br>';
        points++;
        contarPontos(1);
    } else {
        mPH = 
            '<h1 class="wrong">\
                SOFRESTE UMA BURLA!\
            </h1>\
            <br><br>\
            <h3><center>\
                O mais correto a fazer seria\
            </center></h3>\
            <br>';
        contarPontos(0);
    }
    mPH += 
            '<center><h4>\
            <font color=\"#0F3866\">\
                Denunciar\
            </font>\
            /\
            <font color=\"#0F3866\">\
                Bloquear\
            </font>\
            </center></h4>\
            <br><br>\
            <small><center>\
                Ao <b>clicares no link</b>, estarias a correr o risco de <b>sofrer um ciberataque</b>.\
            </center></small>';

    popup.innerHTML = mPH;
    showPopup();
}

function submitSpoof(n) {
    let mPH = '';
    //O QUE PODERIA TER ACONTECIDO --------------------------
    b1H = 
        putSubtitle(1) +
        putCaret() +
            'Ao fazeres login, os <b>cibercriminosos ficariam com os teus dados</b>'
        + putCaret() +
            '<b>Perdias acesso</b> aos teus ficheiros <b>até pagares um resgate</b> por eles';
    //COMO ME PREVENIR --------------------------------------
    b2H =
        putSubtitle(2) +
        putCaret() +
            '<b>Atualiza o browser e antivírus</b> sempre que possível'
        + putCaret() +
            '<b>Tem cuidado</b> com websites iniciados <b>com o protocolo http</b>'
        + putCaret() +
            'Não faças login/registo em <b>websites enviados por email</b>';
    //SABIAS QUE --------------------------------------------
    s1H =
        putSabiasQue('"Marcas, tais como a Microsoft e a Google, são frequentemente replicadas na internet para o roubo de informação pessoal e bancária."','Blog Checkpoint');
    s2H =
        putSabiasQue('"O serviço \'Navegação Segura\' foi criado pela equipa de segurança da Google para identificar websites não seguros em toda a Web"','Google');
    //RESPOSTAS  --------------------------------------------
    if (n == 1) {
        mPH = 
            '<h1 class="right">\
                O teu computador está seguro!\
            </h1>\
            <br><br>\
            <h3><center>\
                Tomaste a decisão certa\
            </center></h3>\
            <br>';
        points++;
        contarPontos(1);
    } else {
        mPH = 
            '<h1 class="wrong">\
                O TEU COMPUTADOR ESTÁ INFECTADO!\
            </h1>\
            <br><br>\
            <h3><center>\
                O mais correto a fazer era\
            </center></h3>\
            <br>';
        contarPontos(0);
    }
    mPH += 
            '<center><h4>\
            <font color=\"#0F3866\">\
                Sair do website\
            </font>\
            </center></h4>\
            <br><br>\
            <small><center>\
                Este website era uma <b>tentativa de burla.</b>\
            <br>\
                <b>Reparaste no link?</b> Tinha zeros no lugar dos \'o\'s.\
            </center></small>';

    popup.innerHTML = mPH;
    showPopup();
}

function submitEng(n) {
    let mPH = '';
    //O QUE PODERIA TER ACONTECIDO --------------------------
    b1H = 
        putSubtitle(1) +
        putCaret() +
            '<b>Acreditares</b> que estavas a falar com alguém que conheces'
        + putCaret() +
            '<b>Partilhares informações</b> pessoais <b>ou</b> até mesmo <b>enviares dinheiro</b>';
    //COMO ME PREVENIR --------------------------------------
    b2H =
        putSubtitle(2) +
        putCaret() +
            '<b>Desconfia quando</b> números desconhecidos <b>pedem ou oferecem algo</b>'
        + putCaret() +
            '<b>Não forneças informações</b> pessoais <b>em respostas a mensagens</b> de texto'
        + putCaret() +
            '<b>Contacta diretamente a pessoa</b> pelo contacto que conheces';
    //SABIAS QUE --------------------------------------------
    s1H =
        putSabiasQue('"Em 2022, um Hacker tentou vender as informações pessoais de 500 milhões de utilizadores do WhatsApp na darkweb"','Cshub');
    s2H =
        putSabiasQue('"Entre janeiro e fevereiro de 2023, os ataques com recurso à engenharia social aumentaram 135%, correspondendo ao recente lançamento mundial do ChatGPT"','Darktrace');
    //RESPOSTAS  --------------------------------------------
    if (n == 1) {
        mPH = 
            '<h1 class="right">\
                Conseguiste deter uma burla!\
            </h1>\
            <br><br>\
            <h3><center>\
                Tomaste a decisão mais acertada\
            </center></h3>\
            <br>';
        points++;
        contarPontos(1);
    } else {
        mPH = 
            '<h1 class="wrong">\
                SOFRESTE UMA BURLA!\
            </h1>\
            <br><br>\
            <h3><center>\
                A decisão mais acertada seria\
            </center></h3>\
            <br>';
        contarPontos(0);
    }
    mPH += 
        '<center><h4>\
        <font color=\"#0F3866\">\
            Denunciar\
        </font>\
        /\
        <font color=\"#0F3866\">\
            Eliminar\
        </font>\
        </center></h4>\
        <br><br>\
        <small><center>\
            Interagir poderá levar à <b>perda de dinheiro e</b> de <b>informações pessoais.</b>\
        </center></small>';

    popup.innerHTML = mPH;
    showPopup();
}

function submitGeomic(n) {
    let mPH = '';
    //O QUE PODERIA TER ACONTECIDO --------------------------
    b1H = 
        putSubtitle(1) +
        putCaret() +
            'Caso fosse um website falso, <b>terias dado os teus dados privados</b>'
        + putCaret() +
            'Caso fosse um website falso, <b>a rede da empresa ficaria comprometida</b>';
    //COMO ME PREVENIR --------------------------------------    
    b2H = 
        putSubtitle(2) +
        putCaret() +
            '<b>Verifica cuidadosamente o url</b> na barra de endereço'
        + putCaret() +
            '<b>Repara em erros</b> de design e de gramática'
        + putCaret() +
            'Sempre que possível, <b>confirma a política de privacidade do website</b>';
    //SABIAS QUE --------------------------------------------
    s1H = 
        putSabiasQue('"Em 2007, ZeuS foi o primeiro trojan a ser descoberto. Era usado para o roubo de informação bancária."', 'SecurityIntelligence');

    s2H = 
        putSabiasQue('“70% das palavras-passe usadas em todo o mundo podiam ser decifradas em menos de um segundo”', 'Pplware, 2023');
    //RESPOSTAS  --------------------------------------------
    if (n == 1) {
        mPH = 
            '<h1 class="right">\
                Esta plataforma é de confiança!\
            </h1>\
            <br><br>\
            <h3><center>\
                Podias confiar e carregar no botão\
            </center></h3>\
            <br>';
        points++;
        contarPontos(1);
    } else {
        mPH = 
            '<h1 class="wrong">\
                ESTA PLATAFORMA É DE CONFIANÇA!\
            </h1>\
            <br><br>\
            <h3><center>\
                Podias confiar e carregar no botão\
            </center></h3>\
            <br>';
        contarPontos(0);
    }
    mPH += 
            '<center><h4>\
            <font color=\"#0F3866\">\
                Login\
            </font>\
            </center></h4>\
            <br><br>\
            <small><center>\
                Era possível confirmar a confiabilidade da plataforma <b>através do link.</b>\
            </center></small>';

    popup.innerHTML = mPH;
    showPopup();
}

function submitEmail(n) {
    let mPH = '';
    //O QUE PODERIA TER ACONTECIDO --------------------------
    b1H = 
        putSubtitle(1) +
        putCaret() +
            '<b>Perderes acesso</b> à tua conta de email'
        + putCaret() +
            '<b>Receberes emails fraudulentos</b> com mais frequência';
    //COMO ME PREVENIR --------------------------------------
    b2H =
        putSubtitle(2) +
        putCaret() +
            '<b>Evita abrir</b> mensagens de email <b>de remetentes desconhecidos</b>'
        + putCaret() +
            'Ter especial <b>cuidado com links e anexos</b>'
        + putCaret() +
            '<b>Rectifica</b> cuidadosamente <b>o endereço</b> do remetente';
    //SABIAS QUE --------------------------------------------
    s1H =
        putSabiasQue('"O Malware QBot, que se propaga através de emails spam, foi o que mais afetou o setor de cuidados de saúde em Portugal"','TVEuropa');
    s2H =
        putSabiasQue('"Em 2023, 94% das organizações do mundo tiveram incidentes de segurança através de emails"','Digit.Fyi');
    //RESPOSTAS  --------------------------------------------
    if (n == 1) {
        mPH = 
            '<h1 class="right">\
                Resististe ao ciberataque!\
            </h1>\
            <br><br>\
            <h3><center>\
                Fizeste aquilo que era mais seguro\
            </center></h3>\
            <br>';
        points++;
        contarPontos(1);
    } else {
        mPH = 
            '<h1 class="wrong">\
                SOFRESTE UM CIBERATAQUE!\
            </h1>\
            <br><br>\
            <h3><center>\
                O mais seguro a fazer seria\
            </center></h3>\
            <br>';
        contarPontos(0);
    }
    mPH += 
        '<center><h4>\
        <font color=\"#0F3866\">\
            Denunciar\
        </font>\
        </center></h4>\
        <br><br>\
        <small><center>\
            Acreditar neste tipo de mensagens leva ao pagamento de contraordenações não existentes.<br>Os cibercriminosos <b>ficam com todo o dinheiro sem deixar rastro.</b>\
        </center></small>';

    popup.innerHTML = mPH;
    showPopup();
}

function submitUAC(n) {
    let mPH = '';
    //O QUE PODERIA TER ACONTECIDO --------------------------
    b1H = 
        putSubtitle(1) +
        putCaret() +
            'Os teus <b>ficheiros seriam copiados</b> para o servidor dos cibercriminosos'
        + putCaret() +
            'A <b>performance</b> do teu computador/rede <b>ficaria afetada</b>';
    //COMO ME PREVENIR --------------------------------------
    b2H =
        putSubtitle(2) +
        putCaret() +
            '<b>Atualiza o</b> teu <b>sistema operativo</b> sempre que possível'
        + putCaret() +
            '<b>Não descarregues aplicações</b> de fontes desconhecidas'
        + putCaret() +
            '<b>Utiliza um antivírus</b> que seja bom e confiável';
    //SABIAS QUE --------------------------------------------
    s1H =
        putSabiasQue('"60% das empresas, que sofrem um ciberataque, fecham num espaço de meio ano."','ModernDiplomacy');
    s2H =
        putSabiasQue('"Em 2023 foram colocados online vários torrents de falsos Windows 10. Tinham um malware utilizado para o roubo de criptomoedas."','Techradar');
    //RESPOSTAS  --------------------------------------------
    if (n == 1) {
        mPH = 
            '<h1 class="right">\
                O teu sistema está seguro!\
            </h1>\
            <br><br>\
            <h3><center>\
                Fizeste o mais seguro perante a instalação\
            </center></h3>\
            <br>';
        points++;
        contarPontos(1);
    } else {
        mPH = 
            '<h1 class="wrong">\
                O TEU SISTEMA FOI CORROMPIDO!\
            </h1>\
            <br><br>\
            <h3><center>\
                O mais seguro a fazer perante a instalação era\
            </center></h3>\
            <br>';
        contarPontos(0);
    }

    mPH += 
        '<center><h4>\
        <font color=\"#0F3866\">\
            Não prosseguir\
        </font>\
        </center></h4>\
        <br><br>\
        <small><center>\
            Nos detalhes da instalação era possível ver que <b>o ficheiro executável não correspondia</b> ao software pretendido.</b>\
        </center></small>';

    popup.innerHTML = mPH;
    showPopup();
}

function submitWifi(n) {
    let mPH = '';
    //O QUE PODERIA TER ACONTECIDO --------------------------
    b1H = 
        putSubtitle(1) +
        putCaret() +
            'Os <b>cibercriminosos teriam total acesso</b> ao teu dispositivo'
        + putCaret() +
            'Todas as tuas <b>contas pessoais ficariam comprometidas</b>';
    //COMO ME PREVENIR --------------------------------------
    b2H =
        putSubtitle(2) +
        putCaret() +
            '<b>Desliga a ligação automática</b> às redes'
        + putCaret() +
            '<b>Utilizar uma VPN</b> encripta e dificulta a interceptação da tua informação'
        + putCaret() +
            'Navega apenas em websites com o <b>protocolo HTTPS</b>';
    //SABIAS QUE --------------------------------------------
    s1H =
        putSabiasQue('"O ataque \'Evil Twin\' acontece quando um cibercriminoso configura uma rede maliciosa para interceptar informações, com um nome aparentemente confiável."', 'Aura');
    s2H =
        putSabiasQue('"A \'NordVPN\' e a \'Surfshark\' são duas VPNs que permitem uma navegação encriptada e sem rastro."','Bleepingcomputer');
    //RESPOSTAS  --------------------------------------------
    if (n == 1) {
        mPH = 
            '<h1 class="right">\
                Estás a navegar de forma segura!\
            </h1>\
            <br><br>\
            <h3><center>\
                Conectaste à rede mais segura\
            </center></h3>\
            <br>';
        points++;
        contarPontos(1);
    } else {
        mPH = 
            '<h1 class="wrong">\
                O TEU SISTEMA FICOU COMPROMETIDO!\
            </h1>\
            <br><br>\
            <h3><center>\
                A rede mais segura para conectar seria\
            </center></h3>\
            <br>';
        contarPontos(0);
    }

    mPH += 
        '<center><h4>\
        <font color=\"#0F3866\">\
            Hotspot-' + nomeP.substring(0, 10) + 
        '</font>\
        </center></h4>\
        <br><br>\
        <small><center>\
            Apesar de gastar dados móveis, <b>é mais seguro conectar a um hotspot pessoal</b> do que a uma rede Wi-Fi pública.\
        </center></small>';

    popup.innerHTML = mPH;
    showPopup();
}

function submitEmailNatalina(n) {
    let mPH = '';
    //O QUE PODERIA TER ACONTECIDO --------------------------
    b1H = 
        putSubtitle(1) +
        putCaret() +
            'Se o email fosse falso, podias ter <b>descarregado um malware</b>'
        + putCaret() +
            'Se o email fosse falso, os <b>dados pessoais</b> da empresa <b>estariam em risco</b>';
    //COMO ME PREVENIR --------------------------------------
    b2H =
        putSubtitle(2) +
        putCaret() +
            '<b>Evita abrir anexos</b> de remetentes desconhecidos'
        + putCaret() +
            'Cria <b>filtros de spam</b> no teu email'
        + putCaret() +
            '<b>Repara na gramática</b>, por norma os emails fraudulentos cometem erros';
    //SABIAS QUE --------------------------------------------
    s1H =
        putSabiasQue('"Um famoso malware chamado \'ILOVEYOU\', foi partilhado mundialmente via email no ano 2000. Infectou mais de 10 milhões de utilizadores do sistema Windows"','Cybernews');
    s2H =
        putSabiasQue('"Em 2022, a Universidade da Beira Interior foi vitima de um ataque de ransomware."','Fccn');
    //RESPOSTAS  --------------------------------------------
    if (n == 1) {
        mPH = 
            '<h1 class="right">\
                Este email era confiável!\
            </h1>\
            <br><br>\
            <h3><center>\
                Fizeste o mais correto, que era clicar no\
            </center></h3>\
            <br>';
        points++;
        contarPontos(1);
    } else {
        mPH = 
            '<h1 class="wrong">\
                Denunciaste injustamente!\
            </h1>\
            <br><br>\
            <h3><center>\
                O mais correto a fazer era clicar no\
            </center></h3>\
            <br>';
        contarPontos(0);
    }
    mPH += 
        '<center><h4>\
        <font color=\"#0F3866\">\
            Botão de anexo\
        </font>\
        </center></h4>\
        <br><br>\
        <small><center>\
            No contexto das comunicações empresariais, o mais seguro é <b>verificar o endereço de email e o respetivo domínio associado.</b>\
        </center></small>';

    popup.innerHTML = mPH;
    showPopup();
}

// Função para mostrar o caminho do ficheiro na janela de UAC
function uacdetalhes() {
    let uacaddress = document.getElementById('uacaddress');
    if (uacaddress.style.display === 'none') {
        uacaddress.style.display = 'block';
    } else{
        uacaddress.style.display = 'none';
    }
}

// Função para mostrar opções extra nas ligações Wi-Fi
function showWifi(n) {
    let wifiEntries = document.getElementsByClassName('wifientry');
    let wifiExtras = document.getElementsByClassName('extra');
    for (i = 0; i < wifiExtras.length; i++) {
        if (i == n) {
            wifiEntries[i].classList.add('selected');
            wifiExtras[i].style.display = 'block';
        } else {
            wifiExtras[i].style.display = 'none';
            wifiEntries[i].classList.remove('selected');
        }
    }
}

function debugging(n) {
    if (n) {
        registo.style.display = 'none';
        block.classList.toggle('registo');
        mostrarJanelaDesafio(positione);
    }
    else {
        document.getElementById('debugNext').style.display = 'none';
    }
}
debugging(0);