let largura = 0;
let altura = 0;
let posicaoX = 0;
let posicaoY = 0;


function getTamanhoTela() {
    largura = window.innerWidth
    altura = window.innerHeight
}

function setPosicaoRand() {
    posicaoX = Math.floor(Math.random() * largura) - 90
    posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 10 ? 10 : posicaoX
    posicaoY = posicaoY < 10 ? 10 : posicaoY
}

function removerBotao() {
    document.getElementById('nao').remove()
}

function criarBotao() {
    getTamanhoTela();
    setPosicaoRand();
    let botao = document.createElement('button')
    botao.id = 'nao'
    botao.style.left = posicaoX + 'px'
    botao.style.top = posicaoY + 'px'
    botao.style.position = 'absolute'
    botao.innerHTML = 'Não !'
    botao.onmouseover = () => {
        mudarBotao()
    }

    document.body.appendChild(botao)
}

function tocarSomTeletraporte() {
    let audio = document.getElementById('audioTeletransporte')
    let song = setTimeout(() => {
        audio.play()
    }, 200)
    audio.remove()

    audioNovo = document.createElement('audio')
    audioNovo.id = 'audioTeletransporte'
    audioNovo.src = 'song/som-de-teleport.mp3'
    document.body.appendChild(audioNovo)

}

function mudarBotao() {
    removerBotao();
    criarBotao();
    tocarSomTeletraporte();
}

function limparTela() {
    let content = document.getElementById('content')
    let pergunta = document.getElementById('textPergunta')
    let nao = document.getElementById('nao')
    let sim = document.getElementById('sim')



    content.classList.add('fade')
    pergunta.classList.add('sumir')
    nao.classList.add('sumir')
    sim.classList.add('sumir')

}

function iniciarAudioFinal() {
    let audioFinal = document.getElementById('audioFinal')
    audioFinal.play()

}


function textoTeAmo() {
    let texto = document.getElementById('teAmo')
    texto.classList.add('exibirFinal')
    let elementos = ['eu', 'te', 'amo', 'exclamacao']

    /*elementos.forEach(elements => {
        document.getElementById(elements).classList.add('fadeIn')
        wait(1000)
    })*/


    let interval = 500; // how much time should the delay between two iterations be (in milliseconds)?
    let promise = Promise.resolve();
    elementos.forEach(function (el) {
        promise = promise.then(function () {
            document.getElementById(el).classList.add('fadeIn')
            return new Promise(function (resolve) {
                setTimeout(resolve, interval)
            })
        })
    })



}

function exibirFundoFinal() {
    let fundoFinal = document.getElementById('fundoFinal')
    fundoFinal.classList.add('exibirFinal')
    textoTeAmo()
}


function iniciarSim() {
    limparTela()
    iniciarAudioFinal()
    exibirFundoFinal()
}