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
    var classTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso, altura);
    // classTd.textContent = classification(imcTd.textContent);
    //VER DEPOIS(DEBITO TÉCNICO)
    

    // Colocando as tags criadas(td) dentro da tag pai Tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    pacienteTr.appendChild(classTd);
    console.log(pacienteTr);

    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);


});