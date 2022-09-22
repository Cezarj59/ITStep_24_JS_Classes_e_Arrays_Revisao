const select = document.getElementById("select");
const nome = document.getElementById("inputName");
const age = document.getElementById("inputIdade");
const city = document.getElementById("inputCidade");
const formulario = document.getElementById("form");
// add/remove class
const divAtendidos = document.getElementById("divAtendidos");
const divFuncionarios = document.getElementById("divFuncionarios");
const divVoluntarios = document.getElementById("divVoluntarios");
const lista = document.getElementById("lista");
const canvas = document.getElementById("canvas");

const mostrarAten = document.getElementById("canvas1");
const mostrarFunc = document.getElementById("canvas2");
const mostrarVolun = document.getElementById("canvas3");


const atendidos = [];
const funcionarios = [];
const voluntarios = [];

class Cadastro {

    constructor(nomeP, ageP, cityP) {
        this.nome = nomeP;
        this.age = ageP;
        this.city = cityP;
    }

    card = function () {
        return '<div id ="cardMode" class="card">' +
            '<p><i><strong>Nome:&nbsp</strong></i> ' + this.nome + '</p>' +
            '<p><i><strong>Idade:&nbsp</strong></i> ' + this.age + '</p>' +
            '<p><i><strong>Cidade:&nbsp</strong></i> ' + this.city + '</p>' +
            '</div>';
    }


}


function cadastrar() {

    let newP = new Cadastro(nome.value, age.value, city.value);

    switch (select.value) {
        case "at":
            atendidos.push(newP);
            alert("Cadastro efetuado com sucesso");
            exibir(atendidos, mostrarAten);
            break;
        case "fn":
            funcionarios.push(newP);
            alert("Cadastro efetuado com sucesso");
            exibir(funcionarios, mostrarFunc);
            break;
        case "vl":
            voluntarios.push(newP);
            alert("Cadastro efetuado com sucesso");
            exibir(voluntarios, mostrarVolun);
            break;
    }
    formulario.reset();
}

function exibir(param, mostrar) {
    let card = "";
    for (let i = 0; i < param.length; i++) {
        card += param[i].card();
    }
    mostrar.innerHTML = card;

}



escondeForm = function () {
    formulario.classList.add('esconder');
    divAtendidos.classList.remove('esconder');
    divFuncionarios.classList.remove('esconder');
    divVoluntarios.classList.remove('esconder');
    lista.classList.remove('esconder');
    canvas.classList.add('gradiente');

    document.getElementById("btnExibirCadastros").classList.add('esconder');
    document.getElementById("btnVoltar").classList.remove('esconder');
}

mostraForm = function () {
    formulario.classList.remove('esconder');
    divAtendidos.classList.add('esconder');
    divFuncionarios.classList.add('esconder');
    divVoluntarios.classList.add('esconder');
    lista.classList.add('esconder');
    canvas.classList.remove('gradiente');

    document.getElementById("btnVoltar").classList.add('esconder');
    document.getElementById("btnExibirCadastros").classList.remove('esconder');

}


