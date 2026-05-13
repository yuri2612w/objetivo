const botoes= document.querySelectorAll(".botão")
console.log(botoes)
const textos = document.querySelectorAll(".aba-conteudo")
console.log(textos)

for (let i = 0; i < botoes.length; i++){                                    
    botoes [i].onclick  = function (){
        for(let j=0; j<botoes.length;i++){
            botoes[j].classList.remove("ativo")
            textos[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        textos[i].classList.add("ativo")
    }  
}

const contadores= document.querySelectorAll(".contador")
const tempoObjetivo1 = new Date("2026-10-05T00:00:00")
const tempoObjetivo2 = new Date("2026-10-07T00:00:00")
const tempoObjetivo3 = new Date("2026-10-09T00:00:00")
const tempoObjetivo4 = new Date("2026-10-10T00:00:00")

const tempos=[tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4]

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempofinal = tempoObjetivo- tempoAtual
    console.log(tempofinal) 
}
calculaTempo(tempoObjetivo1)