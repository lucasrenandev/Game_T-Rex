// SELECIONANDO A PUNTUAÇÃO DO JOGO
const score = document.getElementById("score")

// SELECIONANDO PERSONAGEM
const dino = document.getElementById("dino")

// SELECIONANDO OBSTÁCULO
const cacto = document.getElementById("cacto")

// VARIÁVEL PARA O PULO DO PERSONAGEM(INICIANDO COM FALSE)
let ToJump = false

// VARIÁVEL PARA O CONTAGEM DA PONTUAÇÃO
let counter = 0

// ADICIONANDO EVENTO DE TECLADO
document.addEventListener("keydown", (e) => {
    if((e.code === "ArrowUp") || e.code === "Space") {
        jump()
    }
})

// FUNÇÃO PARA O PERSONAGEM PULAR
function jump() {
    if(!dino.classList.contains("jump")) {
        dino.classList.add("jump")
        ToJump = true 
        
        setTimeout(() => {
            dino.classList.remove("jump")
            ToJump = false
        }, 1000)
    }
}

// GAME OVER
setInterval(() => {
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"))
    let cactoLeft = parseInt(window.getComputedStyle(cacto).getPropertyValue("left"))
    
    if(cactoLeft > 40 && cactoLeft < 270 && dinoBottom <= 50 && !ToJump) {
        window.alert("GAME OVER!")
        counter = 0
    }
    
    counter ++  
    score.innerHTML = `SCORE: ${counter}`

}, 10) 