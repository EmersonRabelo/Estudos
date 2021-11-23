
let  titulo = document.querySelector("#titulo");

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

//Mostra e esconde o header(.onclick) - TAMBÉM FUNCIONA NORMALMENTE.
    function Esconde() {
        showHeader.classList.add('header-hidden');
        bntShowBar.classList.add('bntShowBar');
    }
    function Mostra() {
        showHeader.classList.remove('header-hidden');
        bntShowBar.classList.remove('bntShowBar');
    }
    showHeader.onclick = Esconde;
    bntShowBar.onclick = Mostra;

    
let pacientes =  document.querySelectorAll('.paciente');
 for (let i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

// let pesoPaciente = paciente.querySelector('.info-peso').textContent;
let pesoPaciente = paciente.querySelector('.info-peso').textContent;
let alturaPaciente = paciente.querySelector('.info-altura').textContent;
let resultIMC = paciente.querySelector('.info-imc');
let pesoValid = true;
let altValid = true;

    if (pesoPaciente <= 0 || pesoPaciente >= 200) {
        // alert('Peso inválido');
        console.log('Peso inválido'); 
        pesoValid = false;
        resultIMC.textContent = 'Peso inválido';
        paciente.classList.add('paciente-invalido');
    } 
    if (alturaPaciente <= 0 || alturaPaciente >= 3){
        // alert('Altura inválida');
        console.log('Altura inválida');
        altValid = false;
        resultIMC.textContent = 'Altura inválida';
        paciente.classList.add('paciente-invalido');
    } 
    if (pesoValid && altValid) {
        console.log('Altura: ', alturaPaciente, '- Peso: ' ,pesoPaciente);
        var imc = (pesoPaciente / (Math.pow(alturaPaciente, 2)));
        
            console.log('Resultado IMC: ', imc);
        
            resultIMC.textContent = imc.toFixed(2);
            // toFixed(x) - Recebe um valor X, que representa o numero de casas após a virgula.
    }
}   
// MOSTRADO NA AULA.
// var pacientes = document.querySelectorAll(".paciente");

// for (var i = 0; i < pacientes.length; i++) {

//     var paciente = pacientes[i];

//     var tdPeso = paciente.querySelector(".info-peso");
//     var peso = tdPeso.textContent;

//     var tdAltura = paciente.querySelector(".info-altura");
//     var altura = tdAltura.textContent;

//     var tdImc = paciente.querySelector(".info-imc");

//     var pesoEhValido = true;
//     var alturaEhValida = true;

//     if (peso <= 0 || peso >= 1000) {
//         console.log("Peso inválido!");
//         pesoEhValido = false;
//         tdImc.textContent = "Peso inválido";
//     }

//     if (altura <= 0 || altura >= 3.00) {
//         console.log("Altura inválida!");
//         alturaEhValida = false;
//         tdImc.textContent = "Altura inválida";
//     }

//   if (alturaEhValida && pesoEhValido) {
//         var imc = peso / (altura * altura);
//         tdImc.textContent = imc;
//     }
// }

let btnAdd = document.querySelector('#adicionar-paciente');

// btnAdd.addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log('fui clicado');
// Previnir que o botaão faça sua função básica, de enviar os inputs.
// });

btnAdd.addEventListener('click', function (event) {
    // Previnir que o botaão faça sua função básica, de enviar os inputs.
    event.preventDefault();
    
    // Obtendo acesso aos inputs pelo 'name'
    let form = document.querySelector('#form-adiciona');
    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;
    console.log(nome, peso, altura, gordura);

    // Criando um elemento
    var pacienteTr = document.createElement('tr');
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = (peso / (Math.pow(altura, 2))).toFixed(2);

    // Colocando as tags criadas(td) dentro da tag pai Tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    console.log(pacienteTr);

    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);


});