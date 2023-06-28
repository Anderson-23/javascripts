function calcular(){
    var data = new Date()
    var ano = data.getFullYear()
    var anonasc = document.getElementById('idade')
    anonasc = Number(anonasc.value)
    var res = document.getElementById('divres')
    var idade = 0
    if(anonasc > ano || anonasc < 1900){
        window.alert("ano incorreto")
        document.getElementById('idade').value = ""
        document.getElementById('idade').focus()
    }
    else{

        var fsex = document.getElementsByName('radsex')
        idade = ano - anonasc
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
        genero = 'Homem'
        img.setAttribute(`src`,`homemid.png`)
        res.style.textAlign = 'center'
        res.innerHTML = `Voce é um ${genero} e sua idade atual é de ${idade} anos de idade!!`
        res.appendChild(img)
        
        }
        document.getElementById('idade').value = ""
        document.getElementById('idade').focus()
    }
 
    
}