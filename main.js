const botoes= document.querySelectorAll(".botão")
console.log(botoes)
const textos = document.querySelectorAll(".aba-conteudo")
console.log(textos)

for (let i = 0; i < botoes .length; i++){                                    
    botoes [i].onclick  = function (){
        for(let j=0; j<botoes.length;i++){
            botoes[j].classList.remove("ativo")
            textos[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativoi")
        textos[i].classList.add("ativo")
    }  
}