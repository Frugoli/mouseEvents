const area = document.getElementById("bloco")
area.addEventListener("click", clicar)
area.addEventListener("mouseenter", entrou)
area.addEventListener("mouseout", saiu)

function clicar()   {
    area.innerHTML = "Clicou!"
    area.style.background = "lime"
    document.body.style.background = "black"
}
function entrou()   {
    area.innerHTML = "Entrou!"
    area.style.background = "purple"
    document.body.style.background = "white"
}
function saiu() {
    area.innerHTML = "Saiu!"
    area.style.background = "green"
    document.body.style.background = "orange" 
}