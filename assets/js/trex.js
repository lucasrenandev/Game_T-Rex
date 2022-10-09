const score = document.getElementById("score")
const dino = document.getElementById("dino")
const cacto = document.getElementById("cacto")
let alReadyJump = false
let counter = 0

document.addEventListener("keydown", (e) => {
    if((e.code === "ArrowUp") || e.code === "Space") {
        jump()
    }
})

function jump() {
    if(!dino.classList.contains("jump")) {
        dino.classList.add("jump")
        alReadyJump = true 
        
        setTimeout(() => {
            dino.classList.remove("jump")
            alReadyJump = false
        }, 1100)
    }
}

setInterval(() => {
    let dinoStyleBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"))
    let cactoStyleLeft = parseInt(window.getComputedStyle(cacto).getPropertyValue("left"))
    
    if(cactoStyleLeft > 40 && cactoStyleLeft < 270 && dinoStyleBottom <= 50 && !alReadyJump) {
        window.alert("GAME OVER!")
        counter = 0
    }
    
    counter ++  
    score.innerHTML = `SCORE: ${counter}`

}, 10) 