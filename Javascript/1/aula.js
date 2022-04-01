//Sempre começar as variaveis e constantes com minusculo.
//Variaveis (valores variaveis).
let idade = 5;
console.log(idade);
let altura = 180;
altura = 175;
console.log(altura);
let nomeCompleto = 'Ronaldo Santos';
console.log(nomeCompleto);

//Constantes (não redefine o valor).
const valorIngressoAdulto = 20;
console.log(valorIngressoAdulto);

//Tipos Primitivos (Referencia).
let nome = 'Rafael'; //String literal.
let idade1 = 25; //Number literal.
let estaAprovado = true; //Boolean.
let sobrenome ; //Undefined.
let corSelecionada = null; //Redefinir um valor.

//Objetos (Junta informações em um lugar só).
let pessoa = {
    nome: 'Rafael',
    idade1: 25,
    estaAprovado: true,
    sobrenome: 'de Souza',
    altura: 175,
    
};
console.log(pessoa);

//Arrays (Conjunto de dados que pode ser acessado por um indice.)
let familia = [26,45,50,17];
console.log(familia[2]); //2 é o indice que indica o 50.
//Pode ser usado outros tipos de referencia no array.
console.log(familia.length); //lenght mostra a quantidade de indices.

//Função (Verbo + Substantivo).
let corSite = "azul";
function resetaCor(cor,tonalidade){  //reseta é o verbo, cor é o substantivo.
    corSite = cor + ' ' + tonalidade; //esse ' ' é um espaço para printar como verde claro e nao verdeclaro.

} 

console.log(corSite);
resetaCor("verde","claro");
console.log(corSite);

//Tipos de funções
//1 - Realiza uma tarefa e não devolve nada.
function dizerNome(){
    console.log('jhonatan');
}

dizerNome();

//2 - Faz um calculo ou operação e retorna algo.
function multiplicarPorDois(valor){
    return valor* 2;
}

//console.log(multiplicarPorDois(5));

let resultado = multiplicarPorDois(5);

console.log(resultado);

//Operadores lógicos
//Operadores Aritiméticos (+, -, *, /, **)
let salario = 100;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);

//++ -- (Incremento e decremento)
let idade2 = 18;
console.log(idade2++);
console.log(idade2);
console.log(idade2--);
console.log(idade2)

//Operadores atribuição
let valorTecladoGamer = 100;
console.log(valorTecladoGamer);
valorTecladoGamer += valorTecladoGamer //valortecladogamer = valortecladogamer + valortecladogamer
//valorTecladoGamer -= valorTecladoGamer (exemplo)

//Operadores de igualdade
//1 - Igualdade estrita
console.log( 1 === 1);
//Operadores de comparação
//Operadores lógicos
//Operadores Bitwise