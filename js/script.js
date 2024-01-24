/*quiz
    Função usada para apresentar as diferentes atividades do quiz.
    As atividades são guardadas dentro de um Array - as quebras de linha são para leitura mais fácil - em formato HTML.
    A função quiz (linha 77) altera a atividade em ativo.

*/
//COMENTARIO NOVO
const helpi = document.getElementById('helpi');
let helpt = document.getElementById('helpt');

helpi.addEventListener(
    "mouseenter",
    (event) => {
        helpt.style.display = 'block';
    },
    false,
);

helpi.addEventListener(
    "mouseleave",
    (event) => {
        helpt.style.display = 'none';
    },
    false,
);

let ele = document.getElementById("quiz");
let quizAtual = 5;
let quizArray = [
    "<div id='passb' class='background'>\
        <img src='../assets/img/bg1.jpg'>\
        <div id='pass' class='center-vert'>\
            <i class='fa-solid fa-user icon-left'>\
            </i><input type='text' width=20 value='Utilizador' id='login' disabled>\
            <br>\
            <i class='fa-solid fa-key icon-left'>\
            </i><input type='text' width=20>\
            <div id='passchecks'>\
                <input type='checkbox' class='pass' id='pass1' name='pass1' value='Password123**'>\
                <label for='pass1'>Password123**</label>\
                <br>\
                <input type='checkbox' class='pass' id='pass2' name='pass2' value='!LiK3MySch001#*??'>\
                <label for='pass2'>!LiK3MySch001#*??</label>\
                <br>\
                <input type='checkbox' class='pass' id='pass3' name='pass3' value='*Apr1l012000*'>\
                <label for='pass3'>*Apr1l012000*</label>\
                <br>\
                <input type='checkbox' class='pass' id='pass4' name='pass4' value='!--Am@z0n55--!'>\
                <label for='pass4'>!--Am@z0n55--!</label>\
                <br>\
                <input type='checkbox' class='pass' id='pass5' name='pass5' value='1q2w3e4r'>\
                <label for='pass5'>1q2w3e4r</label>\
                <br>\
                <input type='checkbox' class='pass' id='pass6' name='pass6' value='John@1981.Google'>\
                <label for='pass6'>John@1981.Google</label>\
                <br>\
                <input type='button' value='Submeter' onclick='submitPass()'>\
            </div>\
        </div>\
    </div>",

    "<div id='smsb' class='background'>\
        <img src='../assets/img/bg2_company.jpg'>\
        <div id='sms' class='messagewindow center-vert'>\
            <div id='sms-head'>\
                <span id='mess-number'>(+351) 913071981</span>\
                <div class='sms-drop'>\
                    <i class='fa-solid fa-ellipsis-vertical mess-menu dropbtn' onclick='dropdown()'></i>\
                    <div id='dropdown' class='dropdown-content'>\
                        <p href='#' onclick='submitSMS(1)'>Denunciar</p>\
                        <p href='#'>Eliminar</p>\
                    </div>\
                <div>\
            </div>\
            <div class='message'>Aviso importante: confirme os detalhes para entrega do pacote hoje. Caso contrario, ele sera devolvido ao remetente:  <span class='link' onclick='submitSMS(0)'>http://cttxpresso.com/RTiLJOD</span></div>\
            <div id='sms-bottom'>\
                <input type='text' id='sms-input' placeholder='Não é possível responder' disabled><i class='fa-solid fa-message sms-send'></i>\
            </div>\
        </div>\
    </div>",

    "<div id='webspoofing'>\
        <div id='urlbar'>\
            <i class='fa-solid fa-lock-open lock' id='lock'></i><input type='text' value='http://faceb00k.com' disabled>\<i class='fa-solid fa-right-from-bracket hammenubar' onclick='submitSpoof(1)'></i>\
            <i class='fa-solid fa-bars hammenubar'></i>\
        </div>\
        <div id='spoofing-content'>\
            <img src='../assets/img/facebook.png'>\
            <div id='login'>\
                <div class='txt'>Email</div><input type='text' width=60 value='global@via.com' disabled>\
                <br><br>\
                <div class='txt'>Password</div><input type='password' width=60 value='testepass' disabled>\
                <br><br><input type='button' value='Login' class='spoofdownload' onclick='submitSpoof(0)'>\
            </div>\
        </div>\
        <div id='download' onclick='submitSpoof(0)'>\
            <i class=' fa-solid fa-download' ></i> Descarregue aqui a aplicação\
        </div>\
        <div id='downloadhover'>\
            http://www.faceb00k.com/eheheh/jafoste/facebok.exe\
        </div>\
    </div>",

    "<div id='engb'>\
        <div id='engsocial' class='messagewindow'>\
            <div id='sms-head'>\
                <i class='fa-solid fa-circle-user icon'></i>\
                <span id='mess-number'>(+351) 913071981</span>\
                <div class='sms-drop'>\
                    <i class='fa-solid fa-ellipsis-vertical mess-menu dropbtn' onclick='dropdown()'></i>\
                    <div id='dropdown' class='dropdown-content'>\
                        <p href='#' onclick='submitEng(1)'>Denunciar</p>\
                        <p href='#'>Eliminar</p>\
                    </div>\
                <div>\
            </div>\
            <div class='message'>Olá <span id='engNome'></span>, estou aqui em <span id='engCidade'></span> e preciso de 10€ para almoçar. Podes mandar por mbway? Já agora, guarda este número que é o novo. Beijinhos, mãe 😘</span></div>\
            <div class='message warning'>Este número não se encontra guardado nos seus contactos.\
            <input type='button' value='Adicionar aos contactos' onclick='submitEng(0)'></div>\
            <div id='sms-bottom'>\
                <input type='text' id='sms-input' disabled><i class='fa-solid fa-paperclip sms-send'></i><i class='fa-solid fa-message sms-send'></i>\
            </div>\
        </div>\
    </div>",

    "<div id='email'>\
        <div id='emailtopbar'>\
            <span><i class='fa-solid fa-envelope-open-text'></i> GlobalMail</span>\
            <input type='text' width=60 disabled>\
            <i class='fa-solid fa-magnifying-glass'></i>\
            <i class='fa-solid fa-circle-user'></i>\
        </div>\
        <div id='emailcontent'>\
            <span id='assunto'>Assunto: Contraordenação Fiscal - Declaração de IRS</span><br><br>\
            <div id='emailheader'>\
                <div id='iremetente'><i class='fa-regular fa-user'></i></div>\
                <div id='remetente'>\
                    Autoridade Tributária Portuguesa <i class='fa-solid fa-caret-down'></i>\
                    <div id='emailhover'>governo_de_portugal@outlouk.com</div>\
                </div>\
            </div>\
            <div id='text'>\
                <p>Exmo(a) <span id='emailNome'></span>,<br><br>\
                É com urgência que entramos em contacto consigo referente a uma contraordenação fiscal associada à sua declaração de IRS.<br>\
                Após uma análise minuciosa, detectamos irregularidades que exigem a sua imediata atenção. O não cumprimento das orientações que se seguem poderá resultar numa coima substancial.<br>\
                Para resolver a sua situação, solicitamos que clique no botão abaixo para aceder ao portal da Autoridade Tributária e proceder à validação dos seus dados fiscais:<br>\
                <div id='emailimg' class='imail' onclick='submitEmail(0)'><img src='../assets/img/clique.png'><br></div>\
                Agradecemos a sua colaboração e compreensão neste assunto delicado.<br><br>\
Com os melhores cumprimentos,<br>\
Gabinete da Autoridade Tributária de Portugal\
                </p>\
                <div id='signimg' class='imail'>\
                    <img src='../assets/img/atea.png'><br>\
                </div>\
                <div id='emailimghover'>\
                    http://www.portaldasfinancas-portugal.pt/validacaoIRS.php\
                </div>\
            </div>\
            <div id='buttons'>\
                <button class='emailb' onclick='submitEmail(0)'><i class='fa-solid fa-reply'></i> Responder</button><button class='emailb' onclick='submitEmail(1)'><i class='fa-solid fa-flag'></i> Denunciar</button>\
            </div>\
        </div>\
    </div>",

    "<div id='uacb' class='background'>\
        <img src='../assets/img/bg7.jpg'>\
        <div id='uac'>\
            <div id='uactopbar'>\
                <span>Controlo de Conta de Utilizador</span><br>\
                <span id='uactitle'>Pretende permitir que esta aplicação faça alterações ao seu dispositivo?</span>\
            </div>\
            <div id='uaccontent'>\
                <span id='uacprogram'><i class='fa-solid fa-file-word'></i> Microsoft Word 2023/24 ® Microsoft</span><br><br>\
                <span id='uacorigin'>Editor verificado: Free MS Word for Everyone<br>Origem do ficheiro: Disco neste computador</span><br><br>\
                <span id='uaclink' onclick='uacdetalhes()'>Mostrar mais detalhes</span>\
                <span id='uacaddress'>C:\\Users\\NOME\\Transferencias\\Wormzy.exe</span>\
            </div>\
            <div id='uacbottombar'>\
                <input type='button' value='Sim' onclick='submitUAC(0)'><input type='button' value='Não' onclick='submitUAC(1)'>\
            </div>\
        </div>\
    '</div>'",

    "<div id='browser'>\
        <div id='browsererror'>\
            <img src='../assets/img/dino.png'>\
            <h2>Sem Internet</h2><br>\
            <p class='error'>Experimente: <br>\
                <pre class='error'>       - Rever os cabos de rede, o modem e o router</pre>\
                <pre class='error'>       - Ligar novamente à rede Wi-Fi</pre>\
                <pre class='error'>       - <span class='diaglink'>Enviar o Diagnóstico de rede do Windows</span></pre>\
                <br><span class='err'>ERR_INTERNET_DISCONNECTED</span>\
            </p>\
        </div>\
        <div id='wifi'>\
            <div class='wifientry' onclick='showWifi(0)'>\
                <i class='fa-solid fa-wifi'></i><i class='fa-solid fa-lock'></i> CFPVR-5\
                <div class='extra'>\
                    Não sabes a palavra-passe desta rede\
                </div>\
            </div>\
            <div class='wifientry' onclick='showWifi(1)'>\
                <i class='fa-solid fa-wifi'></i> Cafe-Gratis\
                <div class='extra'>\
                    <input type='button' value='Prosseguir' onclick='submitWifi(0)'>\
                </div>\
            </div>\
            <div class='wifientry' onclick='showWifi(2)'>\
                <i class='fa-solid fa-wifi'></i><i class='fa-solid fa-lock'></i> Hotspot-<span id='wifiNome'></span>\
                <div class='extra'>\
                    Vais gastar os teus dados móveis\
                    <input type='button' value='Prosseguir' onclick='submitWifi(1)'>\
                </div>\
            </div>\
        </div>\
    </div>"
];

let desafioArray = [
    "Seleciona as <b>2 palavras&#x2011;passe mais seguras </b> para o teu registo",
    "<b>Recebeste esta mensagem</b>! O que vais fazer?",
    "Se achares seguro, <b>faz login na rede social</b>",
    "Estás numa aplicação de mensagens. <b>Toma uma decisão!</b>",
    "<b>Recebeste este email</b> 2 semanas depois de submeter o IRS. O que fazer?",
    "<b>Fizeste uma pesquisa</b> por \"Microsoft Word download grátis\" <b>e descarregaste a aplicação.</b>\n Proceder com a instalação?",
    "Foste a um café e precisas de consultar o email. <b>Conecta a uma rede.</b>"
]
let quizMax = quizArray.length;
ele.innerHTML = quizArray[quizAtual];
helpt.innerHTML = desafioArray[quizAtual];

function quiz(n) {
    let str1 = "pages/quiz";
    if (n == 0) {
        if (quizAtual > 0) {
            quizAtual--;
            ele.innerHTML = quizArray[quizAtual];
            helpt.innerHTML = desafioArray[quizAtual];
        }
    }
    if (n == 1) {
        if (quizAtual < quizMax-1) {
            quizAtual++;
            ele.innerHTML = quizArray[quizAtual];
            helpt.innerHTML = desafioArray[quizAtual];
        }
    }
    if (quizAtual == 2) {
        hover("download", "downloadhover");
    }
    if (quizAtual == 3) {
        document.getElementById('engNome').innerText = nomeP;
        document.getElementById('engCidade').innerText = cidade;
    }
    if (quizAtual == 4) {
        document.getElementById('emailNome').innerText = nomeP + " " + nomeS;
        hover("emailimg", "emailimghover");
    }
    if(quizAtual == 5) {
        document.getElementById('uacaddress').style.display = 'none';
    }
    if(quizAtual == 6) {
        document.getElementById('wifiNome').innerText = nomeP;
    }
}
/*--------------------------------------------------------------------*/


function dropdown() {
    document.getElementById("dropdown").classList.toggle("show");
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

/*--------------------------------------------------------------------*/

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

/*--------------------------------------------------------------------*/

function uacdetalhes() {
    let uacaddress = document.getElementById('uacaddress');
    if (uacaddress.style.display === 'none') {
        uacaddress.style.display = 'block';
    } else{
        uacaddress.style.display = 'none';
    }
}

/* -----------------------------------*/
let block = document.getElementById('block');
let registo = document.getElementById('registo');
let popup = document.getElementById('pop-up');
let popwindow = document.getElementById('popwindow');
let balao1 = document.getElementById('balao1');
let balao2 = document.getElementById('balao2');
let nextb = document.getElementById('nextb');
let prevb = document.getElementById('prevb');
let nextbdiv = document.getElementById('nextbdiv');
let sabiasque = document.getElementById('sabiasque');
let sabias = document.getElementById('sabias');
let sabias1 = document.getElementById('sabias1');
let sabias2 = document.getElementById('sabias2');
let desafio = document.getElementById('desafio');
let desafiot = document.getElementById('desafiot');

let nomeP = '';
let nomeS = '';
let cidade = '';

// 0 Passa de Pop para Balões/Sabias que, 1 passa do anterior para vazio
let buttonmode = 0;
block.style.display = 'block';
balao1.style.display = 'none';
balao2.style.display = 'none';
sabias.style.display = 'none';
desafio.style.display = 'none';
popwindow.style.display = 'none';

let mPH = '', b1H = '', b2H = '', s1H = '', s2H = '';

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

function start() {
    nomeP = document.getElementById('nomeP').value;
    nomeS = document.getElementById('nomeS').value;
    cidade = document.getElementById('cidade').value;
    if (!(nomeP == '' || nomeP == null) && !(nomeS == '' || nomeS == null) && !(cidade == '' || cidade == null)) {
        block.classList.toggle('registo');
        block.style.display = 'none';
        registo.style.display = 'none';
        document.getElementById("login").value = nomeP;
        mostrarDesafio(quizAtual);
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

function nextButton(n) {
    console.log(buttonmode);
    if (n == 0 && buttonmode != 0) {
        buttonmode--;
    }
    if (n == 1 && buttonmode !=3) {
        buttonmode++;
    }
    if (n == 1 && buttonmode == 3) {
        quiz(1);
        buttonmode = 0;
        block.style.display = 'none';
        balao1.style.display = 'none';
        balao2.style.display = 'none';
        sabias.style.display = 'none';
        mostrarDesafio(quizAtual);
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
        nextb.value = 'Próximo'
        return;
    }

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
        mostrarDesafio(0);
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

function mostrarDesafio (n){
    desafiot.innerHTML = "<h1><center><font color=\"#0F3866\">Desafio " + (quizAtual + 1) + "</font></center></h1><br><br>";
    desafiot.innerHTML += desafioArray[n];
    popwindow.style.display = 'none';
    block.style.display = 'block';
    desafio.style.display = 'block';
}


function esconder() {
    block.style.display = 'none';
    desafio.style.display = 'none';
}

function debugging(n) {
    if (n) {
        registo.style.display = 'none';
        block.classList.toggle('registo');
        mostrarDesafio(quizAtual);
    }
}

debugging(true);