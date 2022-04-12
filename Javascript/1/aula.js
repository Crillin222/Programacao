//Sempre começar as variaveis e constantes com minusculo.
//Variaveis (valores variaveis).
let idade = 5;
console.log(idade);
let altura = 180;
altura = 175;
console.log(altura);
let nomeCompleto = 'Ronaldo Santos';
console.log(nomeCompleto);

////Constantes (não redefine o valor).
const valorIngressoAdulto = 20;
console.log(valorIngressoAdulto);

////Tipos Primitivos (Referencia).
let nome = 'Rafael'; //String literal.
let idade1 = 25; //Number literal.
let estaAprovado = true; //Boolean.
let sobrenome ; //Undefined.
let corSelecionada = null; //Redefinir um valor.

////Objetos (Junta informações em um lugar só).
let pessoa = {
    nome: 'Rafael',
    idade1: 25,
    estaAprovado: true,
    sobrenome: 'de Souza',
    altura: 175,
    
};
console.log(pessoa);

////Arrays (Conjunto de dados que pode ser acessado por um indice.)
let familia = [26,45,50,17];
console.log(familia[2]); //2 é o indice que indica o 50.
//Pode ser usado outros tipos de referencia no array.
console.log(familia.length); //lenght mostra a quantidade de indices.

////Função (Verbo + Substantivo).
let corSite = "azul";
function resetaCor(cor,tonalidade){  //reseta é o verbo, cor é o substantivo.
    corSite = cor + ' ' + tonalidade; //esse ' ' é um espaço para printar como verde claro e nao verdeclaro.

} 

console.log(corSite);
resetaCor("verde","claro");
console.log(corSite);

////Tipos de funções
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

////Operadores lógicos
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

////Operadores atribuição
let valorTecladoGamer = 100;
console.log(valorTecladoGamer);
valorTecladoGamer += valorTecladoGamer //valortecladogamer = valortecladogamer + valortecladogamer
//valorTecladoGamer -= valorTecladoGamer (exemplo)

////Operadores de igualdade
//1 - Igualdade estrita
console.log( 1 === 1); //Alem de comparar o valor compara o tipo, nesse caso true
console.log( '1' === 1 ); //Neste caso seria false pois o '1' é uma string e não um numero

//2 - Igualdade solta
console.log ( 1 == 1 ); //Ignora o tipo e compara apenas o numero.
console.log ( '1' == 1);

////Operadores de comparação
//Operador ternário
//Tem um cliente, se esse cliente tiver mais que 100 pontos ele sera premium, caso contrario sera comum
let pontos = 100;
let tipo = pontos >100 ? 'premium' : 'comum';
console.log(tipo);

////Operadores lógicos
//e (&&) retorna true se os dois operandos forem true
console.log(true && true); //resultado sera true
console.log(false && true); //resultado sera false

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(podeAplicar);

//ou (||) retorna true se um dos operandos for true
let podeAplicar2 = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log(podeAplicar2);

// NOT (!)
let candidatoRecusado = !podeAplicar;
console.log(candidatoRecusado);


////Comparador não booleano
//Falsy
//undefined
//null
// 0
// false
// ''
// NaN - not a number

//Truthy
let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);


//// Condicionais
// If..Else
  //Se a hora estiver entre 06:00 ate 12:00 : Bom dia!
  //Se estiver entre 12:00 ate a18:00 : Boa tarde!
  //Caso contrário : Boa noite!

  //if (condicao) {
      // codigo a ser executado

  //}
  //else if (outraCondicao) {
      // codigo a ser executado
  //}
  //else {
      // codigo a ser executado
  //}

  let hora = 10;

  if (hora > 6 && hora < 12) {
      console.log("Bom dia!");
  }
  else if (hora > 12 && hora < 18) {
      console.log("Boa tarde!");
  }
  else {
      console.log("Boa noite!");
  }

  //Switch..Case
  let permissao; // comum,gerente,diretor
  permissao = 'diretor'
  switch (variavel){
    case 'comum':
    console.log('usuario comum');
    break;

    case 'gerente':
    console.log('usuario gerente');
    break;

    case 'diretor':
    console.log('usuario diretor');
    break

    default:
    console.log('usuario não reconhecido');
  }

////Loops
    // 1.For

    
    // 2.While
    // 3.Do..while
    // 4.For..In
    // 5.For..of  







