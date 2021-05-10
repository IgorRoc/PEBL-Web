var body = document.getElementsByTagName('body')[0]
var teste = document.getElementsByClassName('testes')[0]
var filhosBody = body.children

const gabarito = ['red', 'blue', 'yellow', 'green']

var cores = ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red']
var textos = ['batata', 'quando', 'sobre', 'brocolis', 'quando', 'batata', 'sobre', 'brocolis', 'quando', 'batata', 'sobre', 'brocolis', 'sobre', 'batata', 'quando', 'quando', 'brocolis', 'batata', 'sobre', 'brocolis', 'quando', 'batata', 'sobre', 'quando']
var textos2 = ['vermelho', 'vermelho', 'vermelho', 'verde', 'amarelo', 'azul', 'vermelho', 'verde', 'amarelo', 'azul', 'vermelho', 'verde', 'amarelo', 'azul', 'vermelho', 'verde', 'amarelo', 'azul', 'vermelho', 'verde', 'amarelo', 'azul', 'vermelho', 'verde']

var resultadoFinal = {
  fase1: {
    tempo: [],
    escolhas: []
  },
  fase2: {
    tempo: [],
    escolhas: []
  },
  fase3: {
    tempo: [],
    escolhas: []
  }
}

var circulos = []
var level = 0
var i = 0
var transicionando = false
var filhos = teste.children
var informacao = document.getElementById("informacao")
var language = "br"

// INICIO DO TESTE
pegaTraducao("pretest", "instruction")
document.addEventListener('keyup', inicio)

function inicio(){
  informacao.innerHTML = ''
  let p = document.createElement('p')
  p.innerText = ""
  pegaTraducao("pretest", "training")
  p.classList.add("content")
  let div = document.createElement('div')
  div.classList.add("feedback")
  informacao.appendChild(p)
  informacao.appendChild(div)

  let comandos = document.getElementsByClassName("comandos")[0]
  comandos.style.zIndex = 1000
  comandos.style.position = "absolute"
  comandos.style.left = "50%"
  comandos.style.transform = "translateX(-50%)"

  document.removeEventListener('keyup', inicio)
  document.addEventListener('keyup', treinamento)
}

function treinamento(e){
  let escolha = gabarito[e.key - 1]
  let feedback = document.getElementsByClassName("feedback")[0]
  if(escolha){
    feedback.classList.add(`bg-${escolha}`)
  }

  for(var classe of feedback.classList){
    if(classe != "feedback" && classe != `bg-${escolha}`){
      feedback.classList.remove(classe)
    }
  }

  if (e.key == ' ') {
    informacao.innerHTML = ''
    let comandos = document.getElementsByClassName("comandos")[0]
    comandos.style = ''
    informacao.classList.add("displaynone")
    level = 1
    getTime(resultadoFinal[`fase${level}`].tempo)
    document.removeEventListener('keyup', treinamento)
    document.addEventListener('keyup', jogo)
  }
}

//FUNCOES
function alteraCorCirculos() {
  for (f of filhos) {
    circulos.push(f.children[0])
  }
  for (c of circulos) {
    c.classList.remove('bg-red')
    c.classList.remove('bg-blue')
    c.classList.remove('bg-yellow')
    c.classList.remove('bg-green')
  }
}

function alteratextoCirculos(textos) {
  var p = document.createElement("p")
  for (var j = 0; j < circulos.length; j++) {
    p.innerHTML = textos[j];
    circulos[j].appendChild(p.cloneNode(true))
  }
  for (var [k, c] of circulos.entries()) {
    c.classList.add(`cl-${cores[k]}`)
  }
}

function removetxt() {
  for (v of circulos) {
    v.removeChild(v.childNodes[0])
  }
}

function fase2() {
  alteraCorCirculos()
  alteratextoCirculos(textos)
}

function fase3() {
  removetxt()
  alteratextoCirculos(textos2)
}


//transicao-----------------------
function transition(txt) {
  var p = document.createElement('p')
  p.innerText = ""
  pegaTraducao("test", `explain_level${level+1}`)
  p.classList.add("content")
  informacao.appendChild(p)
  informacao.classList.remove("displaynone")
}

function removeTransition() {
  level++
  i = 0
  transicionando = false

  informacao.innerHTML = ''
  informacao.classList.add("displaynone")

  prox_fase()
  document.removeEventListener('keyup', inicio)
  getTime(resultadoFinal[`fase${level}`].tempo)
}

function prox_fase() {
  if (level == 2) {
    fase2()
  } else if (level == 3) {
    fase3()
  }
}

function finalizar() {
  document.removeEventListener('keyup', jogo)

  var p = document.createElement('p')
  p.innerText = ""
  pegaTraducao("ending")
  p.classList.add("content")
  
  informacao.appendChild(p)
  informacao.classList.remove("displaynone")

  console.log(resultadoFinal)
  
  console.log(resultado(resultadoFinal.fase1.tempo))
  console.log(resultado(resultadoFinal.fase2.tempo))
  console.log(resultado(resultadoFinal.fase3.tempo))
}

//--------TERMINA FUNCOES-------------

var jogo = function (e) {
  let escolha = gabarito[e.key - 1]
  if (transicionando) {
    removeTransition()
  } else {
    if (filhos[i].children[0].classList.contains(`bg-${escolha}`) || filhos[i].children[0].classList.contains(`cl-${escolha}`)) {
      getTime(resultadoFinal[`fase${level}`].tempo)
      i = i + 1
      if (i < 24) {
        filhos[i - 1].classList.remove('clique-errado')
        filhos[i - 1].classList.remove('ativo')
        filhos[i].classList.add('ativo')
      }
    } else {
      filhos[i].classList.remove('clique-errado')
      void filhos[i].offsetWidth
      filhos[i].classList.add('clique-errado')
    }


    if (i == 24 && level == 3) return finalizar()

    if (i == 24) {
      filhos[0].classList.add('ativo')
      filhos[23].classList.remove('ativo')
      filhos[23].classList.remove('clique-errado')
      transicionando = true
      transition(`Indo para fase ${level+1}.\nAperte qualquer tecla.`)
    }
  }
}