/*
    Função que mostra um relógio digital no canto inferior direito da "janela".
    O texto é formatado de maneira a mostrar um 0 antes de valores de hora/minuto com um único algarismo. (linha 12)
    Atualiza a cada cinco segundos. (linha 16)
*/

let c1 = document.getElementById("clock");
function tempus () {
    const tempo = new Date();
    let hora = tempo.getHours();
    let minuto = tempo.getMinutes();
    c1.innerText = (hora).toString().padStart(2 ,"0")+":"+(minuto).toString().padStart(2, "0");
    
}
tempus();
setInterval(tempus, 5000);
/*--------------------------------------------------------------------*/


/*
    Função usada para apresentar as diferentes atividades do quiz.
    As atividades são guardadas dentro de um Array - as quebras de linha são para leitura mais fácil - em formato HTML.
    A função quiz (linha 77) altera a atividade em ativo.

*/
let ele = document.getElementById("quiz");
let quizAtual = 0;
let quizArray = [
    "<div id='passb'><div id='pass'>\
        <i class='fa-solid fa-user icon-left'>\
        </i><input type='text' width=20 value='Utilizador' disabled>\
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
    </div></div>",

    "<div id='smsb'>\
        <div id='sms' class='messagewindow'>\
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
                <div class='txt'>E-mail</div><input type='text' width=60 value='global@via.com' disabled>\
                <br><br>\
                <div class='txt'>Password</div><input type='password' width=60 value='testepass' disabled>\
                <br><br><input type='button' value='Login' class='spoofdownload' onclick='submitSpoof(0)'>\
            </div>\
        </div>\
        <div id='download' onclick='submitSpoof(0)'>\
        <i class=' fa-solid fa-download' ></i> Descarregue aqui a aplicação\
        </div>\
    </div>",

    "<div id='engsocial' class='messagewindow'>\
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
        <div class='message'>Estou aqui na cidade e preciso de 10€ para almoçar. Podes mandar por mbway? Já agora, guarda este número que é o novo. Beijinhos, mãe 😘</span></div>\
        <div class='message warning'>Este número não se encontra guardado nos seus contactos.\
        <input type='button' value='Adicionar aos contactos' onclick='submitEng(0)'></div>\
        <div id='sms-bottom'>\
            <input type='text' id='sms-input' disabled><i class='fa-solid fa-paperclip sms-send'></i><i class='fa-solid fa-message sms-send'></i>\
        </div>\
    </div>",

    "<div id='email'>\
        <div id='emailtopbar'>\
            <span><i class='fa-solid fa-envelope-open-text'></i> E-Mail</span>\
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
                <p>Exmo(a) NOME,<br><br>\
                É com urgência que entramos em contacto consigo referente a uma contraordenação fiscal associada à sua declaração de IRS.<br>\
                Após uma análise minuciosa, detectamos irregularidades que exigem a sua imediata atenção. O não cumprimento das orientações que se seguem poderá resultar numa coima substancial.<br>\
                Para resolver a sua situação, solicitamos que clique no botão abaixo para aceder ao portal da Autoridade Tributária e proceder à validação dos seus dados fiscais:<br>\
                <div id='emailimg' class='imail' onclick='submitEmail(0)'><img src='../assets/img/clique.png'><br></div>\
                Agradecemos a sua colaboração e compreensão neste assunto delicado.<br><br>\
Com os melhores cumprimentos,<br>\
Gabinete da Autoridade Tributária de Portugal\
                </p>\
                <div id='signimg' class='imail'><img src='../assets/img/atea.png'><br></div>\
                <div id='emailimghover'>\
                http://www.portaldasfinancas-portugal.pt/validacaoIRS.php\
                </div>\
            </div>\
            <input type='button' value='Responder' class='emailb' onclick='submitEmail(0)'><input type='button' value='Denunciar' class='emailb' onclick='submitEmail(1)'>\
        </div>\
    </div>",

    "<div id='uacb'>\
        <div id='uac'>\
            <div id='uactopbar'>\
                <span>Controlo de Conta de Utilizador</span><br>\
                <span id='uactitle'>Pretende permitir que esta aplicação faça alterações ao seu dispositivo?</span>\
            </div>\
            <div id='uaccontent'>\
                <span id='uacprogram'><i class='fa-solid fa-file-word'></i> Microsoft Word 2023/24 ® Microsoft</span><br><br><br>\
                <span>Editor verificado: Free MS Word for Everyone<br>Origem do ficheiro: Disco neste computador</span><br><br>\
                <span id='uaclink' onclick='uacdetalhes()'>Mostrar mais detalhes</span>\
                <span id='uacaddress'><br>C:\\Users\\NOME\\Transferencias\\Wormzy.exe</span>\
            </div>\
            <div id='uacbottombar'>\
                <input type='button' value='Sim' onclick='submitUAC(0)'><input type='button' value='Não' onclick='submitUAC(1)'>\
            </div>\
        </div>\
    '</div>'",

    "<div id='browser'>\
        <div id='wifi'>\
            <div class='wifientry'>\
                <i class='fa-solid fa-wifi'></i><i class='fa-solid fa-lock'></i> CFPVR-5\
            </div>\
            <div class='wifientry' onclick='submitWifi(0)'>\
                <i class='fa-solid fa-wifi'></i> Cafe-Gratis\
            </div>\
            <div class='wifientry' onclick='submitWifi(1)'>\
                <i class='fa-solid fa-wifi'></i><i class='fa-solid fa-lock'></i> Hotspot-Pessoal\
            </div>\
        </div>\
    </div>"
];

let desafioArray = [
    "Seleciona as 2 palavras-passe mais seguras para o teu registo.",
    "Recebeste esta mensagem! O que vais fazer?",
    "Se achares seguro, faz login na rede social.",
    "Estás numa aplicação de mensagens. Toma uma decisão!",
    "Recebeste este email 2 semanas depois de submeter a declaração de IRS.\n O que fazer?",
    "Fizeste uma pesquisa por \"Microsoft Word download grátis\" e descarregaste a aplicação.\n Proceder com a instalação?",
    "Foste a um café e precisas de consultar o email de trabalho."
]
let quizMax = quizArray.length;
ele.innerHTML = quizArray[quizAtual];
function quiz(n) {
    let str1 = "pages/quiz";
    if (n == 0) {
        if (quizAtual > 0) {
            quizAtual--;
            ele.innerHTML = quizArray[quizAtual];
        }
    }
    if (n == 1) {
        if (quizAtual < quizMax-1) {
            quizAtual++;
            ele.innerHTML = quizArray[quizAtual];
        }
    }
    /*if (quizAtual == 3) {
        centerDownload();
    }*/
    if(quizAtual == 5) {
        document.getElementById('uacaddress').style.display = 'none';
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

/*function centerDownload() {
    if (quizAtual == 3) {
        let downloadPrompt = document.getElementById('download');
        let quizArea = document.getElementById('quiz');
        let dWidth = (quizArea.clientWidth/2) - (downloadPrompt.clientWidth/2);
        downloadPrompt.style.marginLeft = dWidth+"px";
    }
    
}
centerDownload();
window.onresize = centerDownload;*/

/*--------------------------------------------------------------------*/

/*const imail = document.getElementById('emailimg');
const imailtxt = document.getElementById('emailimghover');

imail.addEventListener(
    "mouseenter",
    (event) => {
        imailtxt.style.display = 'block';
    },
    false,
);

imail.addEventListener(
    "mouseleave",
    (event) => {
        imailtxt.style.display = 'none';
    },
    false,
);*/

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










/* PASSWORD QUIZ */
let block = document.getElementById('block');
let popup = document.getElementById('pop-up');
let popwindow = document.getElementById('popwindow');
let balao1 = document.getElementById('balao1');
let balao2 = document.getElementById('balao2');
//let nextb = document.getElementById('nextb');
let nextbdiv = document.getElementById('nextbdiv');
let sabiasque = document.getElementById('sabiasque');
let sabias = document.getElementById('sabias');
let sabias1 = document.getElementById('sabias1');
let sabias2 = document.getElementById('sabias2');
let desafio = document.getElementById('desafio');
let desafiot = document.getElementById('desafiot');
// 0 Passa de Pop para Balões/Sabias que, 1 passa do anterior para vazio
let buttonmode = 0;
block.style.display = 'none';
balao1.style.display = 'none';
balao2.style.display = 'none';
sabias.style.display = 'none';
desafio.style.display = 'none';
//nextbdiv.style.display = 'none';
popwindow.style.display = 'none';

let mPH = '', b1H = '', b2H = '', s1H = '', s2H = '';

function showPopup() {
    balao1.innerHTML = b1H;
    balao2.innerHTML = b2H;
    sabias1.innerHTML = s1H;
    sabias2.innerHTML = s2H;
    popup.style.display = 'block';
    block.style.display = 'block';
    popwindow.style.display = 'block';

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
        return;
    }
    if (buttonmode == 1) {
        popup.style.display = 'none';
        balao1.style.display = 'block';
        balao2.style.display = 'none';
        sabias.style.display = 'block';
        sabias1.style.display = 'block';
        sabias2.style.display = 'none';
        return;
    }
    if (buttonmode == 2) {
        popup.style.display = 'none';
        balao1.style.display = 'none';
        balao2.style.display = 'block';
        sabias.style.display = 'block';
        sabias1.style.display = 'none';
        sabias2.style.display = 'block';
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
        b1H = '<h3>O que poderia ter acontecido?</h3><br>\
        <i class="fa-solid fa-caret-right"></i> A tua palavra-passe poderia ser usada para tentar entrar noutros websites onde tens registo\
        <br><i class="fa-solid fa-caret-right"></i> Ficarias sem acesso à tua conta. Os invasores tendem a mudar a palavra-passe assim que conseguem entrar\
        <br><i class="fa-solid fa-caret-right"></i> Os teus dados e informações pessoais poderiam ser roubados e vendidos';
        b2H = '<h3>Como me prevenir?</h3><br>\
        Ao criares uma palavra-passe, tem em atenção os seguintes pontos:\
        <br><i class="fa-solid fa-caret-right"></i> Pelo menos 12 caracteres\
        <br><i class="fa-solid fa-caret-right"></i> Uma combinação de letras maiúsculas, minúsculas, números e símbolos\
        <br><i class="fa-solid fa-caret-right"></i> Não utilizes uma palavra que se encontre no dicionário\
        <br><i class="fa-solid fa-caret-right"></i> Usa uma palavra-passe diferente para cada website\
        <br><i class="fa-solid fa-caret-right"></i> Utiliza autenticação multifator\
        ';
        s1H = '<span class="squote">Sabias que?</span><br>“81% dos casos de fuga de informação em empresas são causados por palavras-passe fracas” - <i>Microsoft</i>';
        s2H = '<span class="squote">Sabias que?</span><br>“As palavras-passe mais utilizadas em Portugal são admin, 123456 e user” - <i>JN, 2023</i>';
        if (pass[1].checked && pass[3].checked) {
            mPH = '<center><h2 class="right">Estás em segurança!</h2></center><br><br>\
            Escolheste as duas palavras-passe mais seguras: ';
        } else {
            mPH = '<center><h2 class="wrong">NÃO ESTÁS EM SEGURANÇA!</h2></center><br><br>\
            As duas palavras-chave mais seguras seriam: ';
        }
        mPH += '<br><b>!LiK3MySch001#*??</b> e <b>!--Am@z0Pa55--!</b><br><br>\
        Sabes quanto tempo levaria um hacker a descobrir estas palavras-chave?<br><b><i>Mais de mil anos!</i></b> As restantes palavras-passe seriam descobertas em <b><i>menos de um mês!</i></b>';
        popup.innerHTML = mPH;
        showPopup();
    }
}

function submitSMS(n) {
    let mPH = '';
    b1H = '<h3>O que poderia ter acontecido?</h3><br>\
        <i class="fa-solid fa-caret-right"></i> Os teus dados pessoais e privados seriam roubados ou perdidos\
        <br><i class="fa-solid fa-caret-right"></i> O teu dispositivo ficaria infetado com malware\
        <br><i class="fa-solid fa-caret-right"></i> Teriam acesso ao teu dispositivo sem te aperceberes\
        <br><i class="fa-solid fa-caret-right"></i> Irias perder dinheiro para uma burla';
    b2H = '<h3>Como me prevenir?</h3><br>\
        <i class="fa-solid fa-caret-right"></i> Presta especial atenção às mensagens que fazem pedidos com urgência\
        <br><i class="fa-solid fa-caret-right"></i> Repara nos detalhes. Erros gramáticos e construção frásica errada costumam ser indicadores visíveis de burla\
        <br><i class="fa-solid fa-caret-right"></i> Nunca cliques em um link enviado \
        <br><i class="fa-solid fa-caret-right"></i> Verifica as tuas faturas de telemóvel, gastos desconhecidos podem indicar que foste vítima de um ciberataque\
        <br><i class="fa-solid fa-caret-right"></i> Contacta a instituição através dos meios confiáveis (website ou telefone) \
        <br><i class="fa-solid fa-caret-right"></i> Nenhuma instituição financeira ou comércio envia mensagens a pedir a atualização da nossa informação de conta ou dados pessoais/ bancários';
        
    s1H = '<span class="squote">Sabias que?</span><br>“Smishing é um tipo de ataque que leva as vítimas a fazerem download de malware, partilhar informação pessoal e até enviar dinheiro, através de mensagens de texto” - <i>IBM</i>';
    s2H = '<span class="squote">Sabias que?</span><br>“Em 2021 os CTT fizeram um comunicado de tentativa de burla em nome da entidade. As vítimas recebiam SMS com a informação que teriam valores por pagar. Ao clicar no link da mensagem, os dados do consumidor eram roubados.” - <i>Deco Proteste</i>';
    if (n == 1) {
        mPH = '<center><h2 class="right">Estás em segurança!</h2></center><br><br>';
    } else {
        mPH = '<center><h2 class="wrong">Sofreste uma burla!</h2></center><br><br>';
    }
    mPH += 'Denunciar ou bloquear o contacto seria o mais certo a fazer<br>\
    Ao clicares no link, estarias a correr o risco de sofrer um ciberataque.'
    popup.innerHTML = mPH;
    showPopup();
}

function submitSpoof(n) {
    let mPH = '';
    b1H = '<h3>O que poderia ter acontecido?</h3><br>\
        <i class="fa-solid fa-caret-right"></i> O teu sistema ficaria infetado com um malware\
        <br><i class="fa-solid fa-caret-right"></i> Ao fazeres login / registo, os cibercriminosos ficariam com os teus dados\
        <br><i class="fa-solid fa-caret-right"></i> Perderias acesso aos teus ficheiross\
        <br><i class="fa-solid fa-caret-right"></i> Todas as tuas informações seriam destruídas\
        <br><i class="fa-solid fa-caret-right"></i> Perderias a tua confiança na entidade real, pela qual se estão a fazer passar.';
    b2H = '<h3>Como me prevenir?</h3><br>\
        <i class="fa-solid fa-caret-right"></i> Antes de prosseguires num website, verifica sempre o link\
        <br><i class="fa-solid fa-caret-right"></i> Desconfia de websites que iniciam por http, e não por https\
        <br><i class="fa-solid fa-caret-right"></i> Atualizar, sempre que possível, o browser e o anti-vírus \
        <br><i class="fa-solid fa-caret-right"></i> Não faças registo / login em websites enviados por email\
        <br><i class="fa-solid fa-caret-right"></i> Se o preenchimento automático do browser não funcionar num website em que o costumas usar, é provável que estejas num website falso\
        <br><i class="fa-solid fa-caret-right"></i> Utiliza autenticação multi-fator.';
        
    s1H = '<span class="squote">Sabias que?</span><br>“Marcas conhecidas, tal como a Microsoft, Google e o LinkedIn, são frequentemente replicadas na internet por cibercriminosos, que tentam roubar informações pessoais e dados dos cartões bancários dos utilizadores” - <i>Blog Checkpoint</i>';
    s2H = '<span class="squote">Sabias que?</span><br>“Spoofing é uma técnica de fraude online que engana os utilizadores pela mera aparência do conteúdo apresentado” - <i>Gridinsoft</i>';
    if (n == 1) {
        mPH = '<center><h2 class="right">O teu computador está seguro!</h2></center><br><br>';
    } else {
        mPH = '<center><h2 class="wrong">O teu computador está infectado!</h2></center><br><br>';
    }
    mPH += 'O website é uma burla. Reparaste no link? Tem zeros no lugar dos “o”s.<br>\
    O botão de download iria descarregar um malware.'
    popup.innerHTML = mPH;
    showPopup();
}

function submitEng(n) {
    let mPH = '';
    b1H = '<h3>O que poderia ter acontecido?</h3><br>\
        <i class="fa-solid fa-caret-right"></i> Acreditares que estavas a falar com alguém que conheces (amigo/ familiar)\
        <br><i class="fa-solid fa-caret-right"></i> Partilhares informações pessoais e detalhes privados, até mesmo enviares dinheiro.';
    b2H = '<h3>Como me prevenir?</h3><br>\
        <i class="fa-solid fa-caret-right"></i> Desconfia sempre de números novos que se fazem passar por amigos\
        <br><i class="fa-solid fa-caret-right"></i> Desconfia quando houverem tentativas de suporte técnico, marketing, entre outros\
        <br><i class="fa-solid fa-caret-right"></i> Nunca forneças informações sensíveis, tais como números de conta ou palavras-passe, em resposta a uma mensagem de texto \
        <br><i class="fa-solid fa-caret-right"></i> Não carregues em links suspeitos\
        <br><i class="fa-solid fa-caret-right"></i> Não envies códigos recebidos por SMS a outra pessoa\
        <br><i class="fa-solid fa-caret-right"></i> Contacta diretamente a pessoa que está a enviar as mensagens de forma a perceber se se trata de um esquema\
        <br><i class="fa-solid fa-caret-right"></i> Denuncia assim que existir alguma dúvida sobre a legitimidade da mensagem\
        <br><i class="fa-solid fa-caret-right"></i> Bloquea o contacto';
        
    s1H = '<span class="squote">Sabias que?</span><br>“Em Portugal, o ataque “Olá, mãe, Olá, pai” ficou conhecido após fazer diversas vítimas pelo Whatsapp. Os atacantes faziam-se passar por familiares da vítima, mantendo uma conversa com o objetivo de receber dinheiro!” - <i>CNN Portugal</i>';
    s2H = '<span     class="squote">Sabias que?</span><br>“Entre janeiro e fevereiro de 2023, os ataques com recurso à engenharia social aumentaram 135%, correspondendo ao período de disponibilização mundial do ChatGPT” - <i>Darktrace</i>';
    if (n == 1) {
        mPH = '<center><h2 class="right">O teu computador está seguro!</h2></center><br><br>';
    } else {
        mPH = '<center><h2 class="wrong">Não estás em segurança!</h2></center><br><br>';
    }
    mPH += 'Interagir com contatos desconhecidos poderá levar à perda de dinheiro e partilha de informações pessoais.<br>\
    Quando receberes mensagens duvidosas, o aconselhado é denunciar e bloquear.'
    popup.innerHTML = mPH;
    showPopup();
}

function submitEmail(n) {
    let mPH = '';
    b1H = '<h3>O que poderia ter acontecido?</h3><br>\
        <i class="fa-solid fa-caret-right"></i> Perderes acesso à tua conta de e-mail\
        <br><i class="fa-solid fa-caret-right"></i> Os teus dados ficarem completamente exposto\
        <br><i class="fa-solid fa-caret-right"></i> Infetares o teu dispositivo com vírus\
        <br><i class="fa-solid fa-caret-right"></i> Pagares uma contraordenação que não cometeste\
        <br><i class="fa-solid fa-caret-right"></i> Receberes emails fraudulentos com mais frequência.';
    b2H = '<h3>Como me prevenir?</h3><br>\
        <i class="fa-solid fa-caret-right"></i> Atualiza o browser e o sistema operativo sempre que possível\
        <br><i class="fa-solid fa-caret-right"></i> Altera as tuas palavras-passe com regularidade\
        <br><i class="fa-solid fa-caret-right"></i> Evita abrir mensagens de email de remetentes desconhecidos \
        <br><i class="fa-solid fa-caret-right"></i> Informa-te com notícias de ciberataques com regularidade\
        <br><i class="fa-solid fa-caret-right"></i> Nos casos das empresas, os trabalhadores devem estar consciencializados sobre o assunto.';
        
    s1H = '<span class="squote">Sabias que?</span><br>“Em 2023, 94% das organizações do mundo tiveram incidentes de segurança através de emails” - <i>Digit.Fyi</i>';
    s2H = '<span class="squote">Sabias que?</span><br>“O Malware QBot, que se propaga através de e-mails spam, foi o que mais afetou o setor de cuidados de saúde em Portugal. Roubava palavras-passe e detalhes de cartões bancários” - <i>TVEuropa</i>';
    if (n == 1) {
        mPH = '<center><h2 class="right">Tomaste a decisão correta!</h2></center><br><br>Ao clicares no link, irias enviar dinheiro para uma conta desconhecida.<br>';
    } else {
        mPH = '<center><h2 class="wrong">Foste vítima de burla!</h2></center><br><br>Deverias ter denunciado como phishing e/ou bloqueado o contacto de email!<br>';
    }
    mPH += 'Ao clicares no link, irias enviar dinheiro para uma conta desconhecida'
    popup.innerHTML = mPH;
    showPopup();
}

function submitUAC(n) {
    let mPH = '';
    b1H = '<h3>O que poderia ter acontecido?</h3><br>\
        <i class="fa-solid fa-caret-right"></i> As tuas informações seriam bloqueadas/ copiadas/ modificadas/ apagadas\
        <br><i class="fa-solid fa-caret-right"></i> A tua identidade seria roubada\
        <br><i class="fa-solid fa-caret-right"></i> Terias perdas financeiras\
        <br><i class="fa-solid fa-caret-right"></i> A performance do teu dispositivo/ rede ficaria afetada\
        <br><i class="fa-solid fa-caret-right"></i> O teu computador seria utilizado como um meio de envio de emails enganosos\
        <br><i class="fa-solid fa-caret-right"></i> Irias enfrentar ações legais, depois do teu computador ser usado para atos ilegais.';
    b2H = '<h3>Como me prevenir?</h3><br>\
        <i class="fa-solid fa-caret-right"></i> Não descarregues aplicações de fontes suspeitas, utiliza preferencialmente a loja oficial do teu sistema operativo\
        <br><i class="fa-solid fa-caret-right"></i> Não aceites a instalação de uma aplicação que desconheces\
        <br><i class="fa-solid fa-caret-right"></i> Utiliza um antivírus infalível e confiável, de preferência com diferentes níveis de segurança\
        <br><i class="fa-solid fa-caret-right"></i> Lê com atenção todos os detalhes presentes nas janelas de aviso do teu sistema\
        <br><i class="fa-solid fa-caret-right"></i> Atualiza o teu sistema operativo sempre que for possível';
        
    s1H = '<span class="squote">Sabias que?</span><br>“60% das empresas que sofrem um ciberataque, fecham num espaço de meio ano.” - <i>ModernDiplomacy</i>';
    s2H = '<span class="squote">Sabias que?</span><br>“No final de 2023, foram descobertas cerca de 25 aplicações, na loja de aplicações do sistema android, que estavam a infectar smartphones com malware.” - <i>The Hacker News</i>';
    if (n == 1) {
        mPH = '<center><h2 class="right">O teu sistema está seguro!</h2></center><br><br>Nos detalhes da instalação era possível ver que o ficheiro executável não correspondia ao software pretendido<br>\
        Se tivesses instalado, todos os teus ficheiros seriam automaticamente danificados.';
    } else {
        mPH = '<center><h2 class="wrong">Foste vítima de burla!</h2></center><br><br>Nos detalhes da instalação era possível ver que o ficheiro executável não correspondia ao software pretendido<br>\
        Ao instalares, todos os teus ficheiros foram automaticamente danificados.';
    }
    popup.innerHTML = mPH;
    showPopup();
}

function submitWifi(n) {
    let mPH = '';
    b1H = '<h3>O que poderia ter acontecido?</h3><br>\
        <i class="fa-solid fa-caret-right"></i> As tuas informações pessoais teriam sido roubadas\
        <br><i class="fa-solid fa-caret-right"></i> Os atacantes teriam acesso total ao teu dispositivo\
        <br><i class="fa-solid fa-caret-right"></i> O cibercriminoso iria tomar conta de todas as tuas contas online\
        <br><i class="fa-solid fa-caret-right"></i> O teu computador ficaria infectado com um vírus.';
    b2H = '<h3>Como me prevenir?</h3><br>\
        <i class="fa-solid fa-caret-right"></i> Desliga a ligação automática às redes\
        <br><i class="fa-solid fa-caret-right"></i> Verifica se existem nomes duplicados das redes\
        <br><i class="fa-solid fa-caret-right"></i> Não uses redes com segurança WEP, apenas acima\
        <br><i class="fa-solid fa-caret-right"></i> Enquanto utilizas uma Wi-Fi pública, evita logar em contas privadas\
        <br><i class="fa-solid fa-caret-right"></i> Utiliza uma VPN, vai encriptar e dificultar a interceptação da tua informação\
        <br><i class="fa-solid fa-caret-right"></i> Navega apenas em websites com o protocolo HTTPS\
        <br><i class="fa-solid fa-caret-right"></i> Utilizares o teu hotspot pessoal, é uma ótima alternativa enquanto não podes aceder a uma rede Wi-Fi segura';
        
    s1H = '<span class="squote">Sabias que?</span><br>“O ataque Evil Twin acontece quando um cibercriminoso configura uma rede maliciosa, com um nome aparentemente confiável, para interceptar as tuas informações” - <i>Aura</i>';
    s2H = '<span class="squote">Sabias que?</span><br>“20% das pessoas usa Wi-Fi público para fazer transações financeiras” - <i>Forbes Advisor</i>';
    if (n == 1) {
        mPH = '<center><h2 class="right">O teu sistema continua protegido!</h2></center><br><br>A rede wi-fi aberta era, na realidade, uma rede fraudulenta.<br>\
        Depois da conexão, todos os teus dados ficariam expostos a tentativas de ciberataque.';
    } else {
        mPH = '<center><h2 class="wrong">O teu computador foi comprometido!</h2></center><br><br>A rede wi-fi aberta era, na realidade, uma rede fraudulenta.<br>\
        Depois de realizares a conexão, os teus dados ficaram expostos a novas tentativas de ciberataque.';
    }
    popup.innerHTML = mPH;
    showPopup();
}

function mostrarDesafio (n){
    desafiot.innerText = desafioArray[n];
    popwindow.style.display = 'none';
    block.style.display = 'block';
    desafio.style.display = 'block';
}


function esconder() {
    block.style.display = 'none';
    desafio.style.display = 'none';
}

mostrarDesafio(quizAtual);

