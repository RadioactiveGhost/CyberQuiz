// Este array é o conjunto de desafios no HTML (definidos pela classe qframe)
let qArray = document.getElementsByClassName("qframe");

// Esta função esconde todos os desafios menos o primeiro,
// uma vez que o objetivo é mostrar um a um
function onStart() {
    for (i = 1; i < qArray.length; i++) {
        qArray[i].style.display = "none";
    }
}
onStart()

//
let points = 0;

// Variável que guarda a posição atual
let positione = 0;
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
    console.log(buttonmode);
    if (n == 0 && buttonmode != 0) {
        buttonmode--;
    }
    if (n == 1 && buttonmode !=3) {
        buttonmode++;
    }
    if (n == 1 && buttonmode == 3) {
        if (positione == qArray.length-1) {
            mostrarPontos();
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
    "Seleciona as <b>2 palavras&#x2011;passe mais seguras </b> para o teu registo",
    "<b>Recebeste esta mensagem</b>! O que vais fazer?",
    "Se achares seguro, <b>faz login na rede social</b>",
    "Estás numa aplicação de mensagens. <b>Toma uma decisão!</b>",
    "<b>Recebeste este email</b> 2 semanas depois de submeter o IRS. O que fazer?",
    "<b>Fizeste uma pesquisa</b> por \"Microsoft Word download grátis\" <b>e descarregaste a aplicação.</b>\n Proceder com a instalação?",
    "Foste a um café e precisas de consultar o email. <b>Conecta a uma rede.</b>"
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
let cidade = '';
function startQuiz() {
    nomeP = document.getElementById('nomeP').value;
    nomeS = document.getElementById('nomeS').value;
    cidade = document.getElementById('cidade').value;
    if (!(nomeP == '' || nomeP == null) && !(nomeS == '' || nomeS == null) && !(cidade == '' || cidade == null)) {
        block.classList.toggle('registo');
        block.style.display = 'none';
        registo.style.display = 'none';
        document.getElementById("login").value = nomeP;
        document.getElementById('engNome').innerText = nomeP;
        document.getElementById('engCidade').innerText = cidade;
        document.getElementById('emailNome').innerText = nomeP + " " + nomeS;
        document.getElementById('uacaddress').style.display = 'none';
        document.getElementById('wifiNome').innerText = nomeP;
        document.getElementById('searchuser').innerText = nomeP;
    } else {
        window.alert("Hey");
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

// /!\ O primeiro desafio não tem quebra /!\
quebraA = ['2',
        '3',
        '4',
        '5',
        '6',
        '7'];

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
            block.style.backgroundImage = "url(../assets/img/bg2_company.jpg)";
        }
        if (positione == 2) {
            block.style.backgroundImage = "linear-gradient(120deg, #1e66f5 0%, rgb(241,205,1) 100%)";
        }
        if (positione == 3) {
            block.style.backgroundImage = "linear-gradient(45deg, #0f3866 , #94e8bf)";
        }
        if (positione == 4) {
            block.style.backgroundColor = "#0f3866";
        }
        if (positione == 5) {
            block.style.backgroundImage = "url(../assets/img/bg7.jpg)";
        }
        if (positione == 3) {
            block.style.backgroundImage = "linear-gradient(45deg, #ffffff , #767676)";
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
}

function esconderJanelaDesafio() {
    block.style.display = 'none';
    desafio.style.display = 'none';
}

function mostrarPontos() {
    balao1.style.display = 'none';
    balao2.style.display = 'none';
    sabias.style.display = 'none';
    popwindow.style.display = 'none';
    document.getElementById('quiz').style.display = 'none';
    pontos.style.display = 'block';
    let mensagem = '';
    let percen = points/qArray.length;
    if (percen < .5) {
        mensagem += '<h2>Que pena!</h2><br>Não conseguiste acertar nem a metade!<br>Levavas umas lambadas.';
    }
    else if (percen < .9) {
        mensagem += '<h2>Parabéns '+ nomeP +'!</h2><br>Conseguiste acertar à maior parte das perguntas!';
    }
    else {
        mensagem += '<h2>Muitos Parabéns '+ nomeP +'!</h2><br>Superaste as espectativas!';
    }
    mensagem += '<br><br>Acertaste ' + points + ' de ' + qArray.length + ' perguntas.';
    pontost.innerHTML = mensagem;
}

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

function putCaret(){
    return('<br><i class="fa-solid fa-caret-right"></i>');
}

function putSabiasQue(t1, t2){
    let texto =
        '<span class="squote">\
            Sabias que?\
        </span>\
        <br>\
        <span class="tquote">'
        + t1 + '<br><i>- ' + t2 + '</i></span>';
    
    return(texto);
}

function submitSearch(n) {
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
            '<b>Atualiza o browser e anti-vírus</b> sempre que possível'
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
            '<b>Utiliza um antivirus</b> que seja bom e confiável';
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
    }

    mPH += 
        '<center><h4>\
        <font color=\"#0F3866\">\
            Hotspot-' + nomeP + 
        '</font>\
        </center></h4>\
        <br><br>\
        <small><center>\
            Apesar de gastar dados móveis, <b>é mais seguro conectar a um hotspot pessoal</b> do que a uma rede Wi-Fi pública.\
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
    let wifiExtras = document.getElementsByClassName('extra');
    for (i = 0; i < wifiExtras.length; i++) {
        if (i == n) {
            wifiExtras[i].style.display = 'block';
        } else {
            wifiExtras[i].style.display = 'none';
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
        document.getElementById('debugPrev').style.display = 'none';
        document.getElementById('debugNext').style.display = 'none';
    }
}

debugging(1);