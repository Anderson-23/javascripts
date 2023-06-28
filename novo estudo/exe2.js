function iniciar(){
  document.getElementById("nome1").focus()
  //window.alert("BEM VINDO AO JOGO DA VELHA")
}
const caixa = document.querySelector(".caixa")
const div0 = document.querySelector(".div0")
function jogar(){
let nome1 = document.getElementById("nome1")
let nome2 = document.getElementById("nome2")
let divnome = document.getElementById("divnome")
nome1 = String(nome1.value)
nome2 = String(nome2.value)

if(document.getElementById("nome1").value == "" || document.getElementById("nome2").value == "")
{
    window.alert("preencha os campos dos jogadores")
    document.getElementById("nome1").focus()
}
else{
window.alert(`bem vindo ${nome1} - ${nome2}`)
divnome.innerText = `${nome1} - ${nome2}`

caixa.style.display = "none"
div0.style.display = "flex"
}

div1.addEventListener('click', clicar)

function clicar(){

    div1.document.innerText = "ola"
}
}



