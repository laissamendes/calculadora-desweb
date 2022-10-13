let visor = document.getElementById('visor');
let valor_salvo = null;
let operador_salvo = null;

let btnNumeros = document.getElementsByClassName('numeros');
for (let botao of btnNumeros) {
    botao.addEventListener('click', clica_numero);
}

function clica_numero(event) {
    if (visor.innerHTML.length <= 15) {
        if (isNaN(visor.innerHTML) === true) {
            visor.innerHTML = event.target.innerHTML;
        } else {
            visor.innerHTML = visor.innerHTML + event.target.innerHTML;
        }
    }

}

let btnOperadores = document.getElementsByClassName('operacao');
for (let botao of btnOperadores) {
    botao.addEventListener("click", clica_operador);

}
function clica_operador(event) {
    if (isNaN(visor.innerHTML) === false) {
        if (valor_salvo === null) {
            valor_salvo = Number(visor.innerHTML);
        } else {
            let result = executa_operacao(valor_salvo, operador_salvo, Number(visor.innerHTML));
            valor_salvo = result;
        }
    }
    visor.innerHTML = event.target.innerHTML;
    operador_salvo = event.target.innerHTML;
}

let btnC = document.getElementById('C');
btnC.addEventListener("click", limpa_visor);
function limpa_visor(event) {
    visor.innerHTML = "";
    valor_salvo = null;
    operador_salvo = null;
}

let btnIgual = document.getElementById('igual');
btnIgual.addEventListener("click", calcula_resultado);

function calcula_resultado(event) {
    if (valor_salvo != null && operador_salvo != null && isNaN(visor.innerHTML) === false) {
        let result = executa_operacao(valor_salvo, operador_salvo, Number(visor.innerHTML));
        visor.innerHTML = result;
        valor_salvo = null;
        operador_salvo = null;

    }
}
let btnporcentagem = document.getElementById('porcentagem');
btnporcentagem.addEventListener("click", calcula_porcentagem);
function calcula_porcentagem(event) {
    if (isNaN(visor.innerHTML) === false) {
        visor.innerHTML = Number(visor.innerHTML) / 100;

    }
}

function executa_operacao(valor1, operacao, valor2) {
    if (operacao === "+") {
        return valor1 + valor2
    }
    else if (operacao === "-") {
        return valor1 - valor2
    }
    else if (operacao === "/") {
        return valor1 / valor2
    }
    else if (operacao === "*") {
        return valor1 * valor2
    }

}

let btnPonto = document.getElementById('ponto');
btnPonto.addEventListener("click", clica_ponto);

function clica_ponto(event) {
    if (isNaN(visor.innerHTML) === true) {
        visor.innerHTML = ".";
    } else if (isNaN(visor.innerHTML + ".") === false) {
        visor.innerHTML = visor.innerHTML + ".";

    }
}

let body = document.getElementsByTagName('body')[0];

body.addEventListener("keydown", pressionou_tecla);

function pressionou_tecla(event) {
    if (event.key === "*") {
        document.getElementById("multiplicacao").click();
    } else if (event.key === "Escape") {
        document.getElementById("C").click();
    } else if (event.key === "/") {
        document.getElementById("divisao").click();
    } else if (event.key === "+") {
        document.getElementById("soma").click();
    } else if (event.key === "%") {
        document.getElementById("porcentagem").click();
    } else if (event.key === "=" || event.key === "Enter") {
        document.getElementById("igual").click();
    } else if (event.key === ".") {
        document.getElementById("ponto").click();
    } else if (event.key === "0") {
        document.getElementById("zero").click();
    } else if (event.key === "1") {
        document.getElementById("um").click();
    } else if (event.key === "2") {
        document.getElementById("dois").click();
    } else if (event.key === "3") {
        document.getElementById("tres").click();
    } else if (event.key === "4") {
        document.getElementById("quatro").click();
    }
    else if (event.key === "5") {
        document.getElementById("cinco").click();
    } else if (event.key === "6") {
        document.getElementById("seis").click();
    } else if (event.key === "7") {
        document.getElementById("sete").click();
    } else if (event.key === "8") {
        document.getElementById("oito").click();
    } else if (event.key === "9") {
        document.getElementById("nove").click();
    }
}