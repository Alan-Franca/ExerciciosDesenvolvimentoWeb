const botaoCalcular = document.getElementById("botao-calcular");
botaoCalcular.addEventListener("click", function() {
    const campoValor1 = document.getElementById("valor1");
    const campoValor2 = document.getElementById("valor2");
    const campoResultado = document.getElementById("campo-resultado");

    if (campoValor1.value === "" || campoValor2.value === "") {
        alert("Por favor, preencha ambos os campos de valor.");
        return;
    }

    const valor1 = Number(campoValor1.value);
    const valor2 = Number(campoValor2.value);
    const operacaoSelecionada = document.querySelector(
        'input[name="operacao"]:checked'
    );

    if (operacaoSelecionada === null) {
        alert("Por favor, selecione uma operação.");
        return;  
    }

    const operacao = operacaoSelecionada.value;
    let resultado;
    switch (operacao) {
        case "soma":
            resultado = valor1 + valor2;
            break;
        case "subtracao":
            resultado = valor1 - valor2;
            break;
        case "multiplicacao":
            resultado = valor1 * valor2;
            break;
        case "divisao":
            if (valor2 === 0) {
                alert("Divisão por zero não é permitida.");
                return;
            } else {
                resultado = valor1 / valor2;
                break;
            }
    }

    campoResultado.value = resultado;
})