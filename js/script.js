/*
    Função que mostra um relógio digital no canto inferior direito da "janela".
    O texto é formatado de maneira a mostrar um 0 antes de valores de hora/minuto com um único algarismo. (linha 12)
    Atualiza a cada trinta segundos. (linha 16)
*/

let c1 = document.getElementById("clock");
function tempus () {
    const tempo = new Date();
    let hora = tempo.getHours();
    let minuto = tempo.getMinutes();
    c1.innerText = (hora).toString().padStart(2 ,"0")+":"+(minuto).toString().padStart(2, "0");
    
}
tempus();
setInterval(tempus, 30000);
/*--------------------------------------------------------------------*/


/*
    Função usada para apresentar as diferentes atividades do quiz.
    As atividades são guardadas dentro de um Array - as quebras de linha são para leitura mais fácil - em formato HTML.
    A função quiz (linha 77) altera a atividade em ativo.

*/
let ele = document.getElementById("quiz");
let quizAtual = 1;
let quizArray = [
    "<div id='pass'>\
        <i class='fa-solid fa-user icon-left'>\
        </i><input type='text' width=20 value='Utilizador' disabled>\
        <br>\
        <i class='fa-solid fa-key icon-left'>\
        </i><input type='text' width=20>\
        <div id='passchecks'>\
            <input type='checkbox' id='pass1' name='pass1' value='password123'>\
            <label for='pass1'>password123</label>\
            <br>\
            <input type='checkbox' id='pass2' name='pass2' value='p@$$w0rd123'>\
            <label for='pass2'>p@$$w0rd123</label>\
            <br>\
            <input type='checkbox' id='pass1' name='pass1' value='password123'>\
            <label for='pass1'>password123</label>\
            <br>\
            <input type='checkbox' id='pass2' name='pass2' value='p@$$w0rd123'>\
            <label for='pass2'>p@$$w0rd123</label>\
            <br>\
            <input type='checkbox' id='pass1' name='pass1' value='password123'>\
            <label for='pass1'>password123</label>\
            <br>\
            <input type='checkbox' id='pass2' name='pass2' value='p@$$w0rd123'>\
            <label for='pass2'>p@$$w0rd123</label>\
            <br>\
            <input type='button' value='Submeter'>\
        </div>\
    </div>",

    "<div id='sms'>\
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
        <div class='message'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat turpis nulla, sed posuere dui tempor et.</div>\
        <div class='message'>Suspendisse nec felis bibendum, varius tortor vitae, sodales tellus.</div>\
        <div id='sms-bottom'>\
            <input type='text' id='sms-input' placeholder='Não é possível responder' disabled><i class='fa-solid fa-message' id='sms-send'></i>\
        </div>\
    </div>"];
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