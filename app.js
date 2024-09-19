let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';


//função com parâmetros, vai fazer a mesma coisa que as linhas comentadas acima.
function exibirTestoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:0.95});
}

//função para exibir a mensagem inicial, la na função reiniciar jogo.
function exibirMensagemInicial(){
    exibirTestoNaTela('h1','Jogo do Número Secreto');
    exibirTestoNaTela('p','Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

//Função exibirNaTela é chamada e é declarado os parêmetros, tag='h1', texto= 'texto digitao'
//na tag h1 vai exibir no titulo, na tag p vai exibir no parágrafo.
exibirTestoNaTela('h1','Jogo do Número Secreto');
exibirTestoNaTela('p','Escolha um número entre 1 e 10');

//função sem parâmetro.
function verificarChute(){
    let chute = document.querySelector('input').value;
//faz a comparação entre chute e numeroSecreto.
    if(chute == numeroSecreto){
        exibirTestoNaTela('h1','Acertou');

// palavraTentativa = se tentativas maior que 1, então tentativas
//se não tentativa
//tentativas > 1 ? 'tentativas' : 'tentaiva';
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//` ` crase é template string.
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTestoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if( chute > numeroSecreto){
            exibirTestoNaTela('p','O número secreto é menor');
        }else{
            exibirTestoNaTela('p','O número secreto é maior');
        } 
        tentativas++;
        limparCampo();
    }
}

//função com retorno.
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
//push inclue elementos no array, pop remove elementos do array.
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}