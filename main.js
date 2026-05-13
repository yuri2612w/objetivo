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
    let segundos = Math.floor(tempofinal / 1000)
    let minutos = Math.floor(minutos / 60)
    let horas = Math.floor(horaas / 60 )
    let dias = Math.floor(dias / 24)
      

    segundos %= 60
    minutos %=60
    horas %=24
    if (tempofinal >0) {
        return [dias,horas,minutos,segundos] 
    }else{   
        return [0,0,0,0]
    }
}
function atualizaCronometro(){
    for(let i=0; i<contadores.length;i++){
        document.getElementById("dias" +i).textContent = calculaTempo(tempos[i])[0]
    }
}
calculaTempo(tempoObjetivo1)