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

    "<div id='sms' class='messagewindow'>\
        <div id='sms-head'>\
            <span id='mess-number'>(+351) 913071981</span>\
            <div class='sms-drop'>\
                <i class='fa-solid fa-ellipsis-vertical mess-menu dropbtn' onclick='dropdown()'></i>\
                <div id='dropdown' class='dropdown-content'>\
                    <p href='#'>Denunciar</p>\
                    <p href='#'>Eliminar</p>\
                </div>\
            <div>\
        </div>\
        <div class='message'>Aviso importante: confirme os detalhes para entrega do pacote hoje. Caso contrario, ele sera devolvido ao remetente:  <span class='link'>http://cttxpresso.com/RTiLJOD</span></div>\
        <div id='sms-bottom'>\
            <input type='text' id='sms-input' placeholder='Não é possível responder' disabled><i class='fa-solid fa-message sms-send'></i>\
        </div>\
    </div>",

    "<div id='pen'>\
    </div>",

    "<div id='webspoofing'>\
        <div id='urlbar'>\
            <i class='fa-solid fa-lock-open lock'></i><input type='text' value='http://faceb00k.com' disabled>\
            <i class='fa-solid fa-bars hammenu'></i>\
        </div>\
        <div id='spoofing-content'>\
            <img src='../assets/img/facebook.png'>\
            <div id='login'>\
                <div class='txt'>E-mail</div><input type='text' width=60 disabled>\
                <br><br>\
                <div class='txt'>Password</div><input type='text' width=60 disabled>\
                <br><br><input type='button' value='Login' id='spoofdownload'>\
            </div>\
        </div>\
        <div id='download'>\
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
                    <p href='#'>Denunciar</p>\
                    <p href='#'>Eliminar</p>\
                </div>\
            <div>\
        </div>\
        <div class='message'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat turpis nulla, sed posuere dui tempor et. <span class='link'>http://www3.ctt.pt.t/encomenda.php</span></div>\
        <div class='message'>Suspendisse nec felis bibendum, varius tortor vitae, sodales tellus.</div>\
        <div id='sms-bottom'>\
            <input type='text' id='sms-input' disabled><i class='fa-solid fa-paperclip sms-send'></i><i class='fa-solid fa-message sms-send'></i>\
        </div>\
    </div>",

    "<div id='email'>\
        <div id='emailtopbar'>\
            <span>E-Mail</span>\
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
                <div id='emailimg' class='imail'><img src='../assets/img/clique.png'><br></div>\
                Agradecemos a sua colaboração e compreensão neste assunto delicado.<br><br>\
Com os melhores cumprimentos,<br>\
Gabinete da Autoridade Tributária de Portugal\
                </p>\
                <div id='signimg' class='imail'><img src='../assets/img/atea.png'><br></div>\
                <div id='emailimghover'>\
                http://www.portaldasfinancas-portugal.pt/validacaoIRS.php\
                </div>\
            </div>\
        </div>\
    </div>",

    "<div id='uac'>\
        <div id='uactopbar'>\
            <span>Controlo de Conta de Utilizador</span><br>\
            <span id='uactitle'>Pretende permitir que esta aplicação faça alterações ao seu dispositivo?</span>\
        </div>\
        <div id='uaccontent'>\
            <span id='uacprogram'><i class='fa-solid fa-file-word'></i> Microsoft Word 2023/24 ® Microsoft</span><br><br><br>\
            <span>Editor verificado: Free MS Word for Everyone<br>Origem do ficheiro: Disco neste computador</span><br><br>\
            <span id='uaclink' onclick='uacdetalhes()'>Mostrar mais detalhes</span>\
            <span id='uacaddress'>C:\Users\NOME\Transferencias\Wormzy.exe</span>\
        </div>\
        <div id='uacbottombar'>\
            <input type='button' value='Sim'><input type='button' value='Não'>\
        </div>\
    </div>",

    "<div id='browser'>\
        <div id='wifi'>\
            <div class='wifientry'>\
                <i class='fa-solid fa-wifi'></i><i class='fa-solid fa-lock'></i> CFPVR-5\
            </div>\
            <div class='wifientry'>\
                <i class='fa-solid fa-wifi'></i> Café-CIDADE\
            </div>\
            <div class='wifientry'>\
                <i class='fa-solid fa-wifi'></i><i class='fa-solid fa-lock'></i> Hotspot-NOME\
            </div>\
        </div>\
    </div>"
];
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
    if (quizAtual == 3) {
        centerDownload();
    }
    if(quizAtual == 6) {
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

function centerDownload() {
    if (quizAtual == 3) {
        let downloadPrompt = document.getElementById('download');
        let quizArea = document.getElementById('quiz');
        let dWidth = (quizArea.clientWidth/2) - (downloadPrompt.clientWidth/2);
        downloadPrompt.style.marginLeft = dWidth+"px";
    }
    
}
centerDownload();
window.onresize = centerDownload;

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
let balao1 = document.getElementById('balao1');
let balao2 = document.getElementById('balao2');
let nextb = document.getElementById('nextb');
let sabiasque = document.getElementById('sabiasque');
let sabias = document.getElementById('sabias');
let sabias1 = document.getElementById('sabias1');
let sabias2 = document.getElementById('sabias2');
// 0 Passa de Pop para Balões/Sabias que, 1 passa do anterior para vazio
let buttonmode = 0;
block.style.display = 'none';
balao1.style.display = 'none';
balao2.style.display = 'none';
sabias.style.display = 'none';

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

function submitPass() {
    let pass = document.getElementsByClassName('pass');
    let messagePop = '';
    balao1.innerHTML = '<h3>O que poderia ter acontecido?</h3><br>\
    <i class="fa-solid fa-caret-right"></i> A tua palavra-passe poderia ser usada para tentar entrar noutros websites onde tens registo\
    <br><i class="fa-solid fa-caret-right"></i> Ficarias sem acesso à tua conta. Os invasores tendem a mudar a palavra-passe assim que conseguem entrar\
    <br><i class="fa-solid fa-caret-right"></i> Os teus dados e informações pessoais poderiam ser roubados e vendidos';
    balao2.innerHTML = '<h3>Como me prevenir?</h3><br>\
    Ao criares uma palavra-passe, tem em atenção os seguintes pontos:\
    <br><i class="fa-solid fa-caret-right"></i> Pelo menos 12 caracteres\
    <br><i class="fa-solid fa-caret-right"></i> Uma combinação de letras maiúsculas, minúsculas, números e símbolos\
    <br><i class="fa-solid fa-caret-right"></i> Não utilizes uma palavra que se encontre no dicionário\
    <br><i class="fa-solid fa-caret-right"></i> Usa uma palavra-passe diferente para cada website\
    <br><i class="fa-solid fa-caret-right"></i> Utiliza autenticação multifator\
    ';
    sabias1.innerHTML = '<span class="squote">Sabias que?</span><br>“81% dos casos de fuga de informação em empresas são causados por palavras-passe fracas” - <i>Microsoft</i>';
    sabias2.innerHTML = '<span class="squote">Sabias que?</span><br>“As palavras-passe mais utilizadas em Portugal são admin, 123456 e user” - <i>JN, 2023</i>';
    if (pass[1].checked && pass[3].checked) {
        messagePop += '<center><h2 class="right">Estás em segurança!</h2></center><br><br>\
        Escolheste as duas palavras-passe mais seguras: ';
    } else {
        messagePop += '<center><h2 class="wrong">NÃO ESTÁS EM SEGURANÇA!</h2></center><br><br>\
        As duas palavras-chave mais seguras seriam: ';
    }
    messagePop += '<br><b>!LiK3MySch001#*??</b> e <b>!--Am@z0Pa55--!</b><br><br>\
    Sabes quanto tempo levaria um hacker a descobrir estas palavras-chave?<br><b><i>Mais de mil anos!</i></b> As restantes palavras-passe seriam descobertas em <b><i>menos de um mês!</i></b>';
    popup.innerHTML = messagePop;
    popup.style.display = 'block';
    block.style.display = 'block';
}

