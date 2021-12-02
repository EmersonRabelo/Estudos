
let titulo = document.querySelector("#titulo");

titulo.textContent = 'Aparecida nutricionista';

// Mostra e esconde o header(com addEventListener)    
let showHeader = document.querySelector('.headerShow');
let bntShowBar = document.querySelector('.bntHiddBar');

// showHeader.addEventListener('click', function(){
//     showHeader.classList.add('header-hidden');
//     bntShowBar.classList.add('bntShowBar');
// });
// bntShowBar.addEventListener('click', function(){
//     showHeader.classList.remove('header-hidden');
//     bntShowBar.classList.remove('bntShowBar');
// });




let pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    let pesoPaciente = paciente.querySelector('.info-peso').textContent;
    let alturaPaciente = paciente.querySelector('.info-altura').textContent;
    let resultIMC = paciente.querySelector('.info-imc');
    let classificacao = paciente.querySelector('.info-class');
    let pesoValid = true;
    let altValid = true;

    if (pesoPaciente <= 0 || pesoPaciente >= 200) {
        // alert('Peso inválido');
        console.log('Peso inválido');
        pesoValid = false;
        resultIMC.textContent = 'Peso inválido';
        paciente.classList.add('paciente-invalido');
    }
    if (alturaPaciente <= 0 || alturaPaciente >= 3) {
        // alert('Altura inválida');
        console.log('Altura inválida');
        altValid = false;
        resultIMC.textContent = 'Altura inválida';
        paciente.classList.add('paciente-invalido');
    }
    if (pesoValid && altValid) {
        console.log('Altura: ', alturaPaciente, '- Peso: ', pesoPaciente);
        var imc = calculaImc(pesoPaciente, alturaPaciente);
        console.log('Resultado IMC: ', imc);

        // Passando diretamente ao conteudo de texto o resultado da nossa função, que recebeu como parametro o peso e a altura.
        resultIMC.textContent = calculaImc(pesoPaciente, alturaPaciente);

        // EXIBE A CLASSIFICAÇÃO DO RESULTADO DO IMC
        classificacao.textContent = classification(imc);
    }

}

function classification(imc) {
    let classificacao = paciente.querySelector('.info-class');
    this.imc = imc;

    ClassImc = (imc < 20) ? classificacao.textContent = 'ABAIXO DO PESO' : classificacao.textContent;
    ClassImc = (imc >= 20 && imc < 25) ? classificacao.textContent = 'PESO NORMAL' : classificacao.textContent;
    ClassImc = (imc >= 25 && imc < 30) ? classificacao.textContent = 'EXCESSO DE PESO' : classificacao.textContent;
    ClassImc = (imc >= 30 && imc < 35) ? classificacao.textContent = 'OBESIDADE' : classificacao.textContent;
    ClassImc = (imc >= 35) ? classificacao.textContent = 'SUPER OBESIDADE' : classificacao.textContent;

    return ClassImc;
}


function calculaImc(peso, altura) {
    return (peso / (Math.pow(altura, 2))).toFixed(2);
    // toFixed(x) - Recebe um valor X, que representa o numero de casas após a virgula.

}
