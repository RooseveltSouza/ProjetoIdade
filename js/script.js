function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var anoNasc = document.getElementById('ano').value
    var resposta = document.getElementById('resposta')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if(anoNasc.length == 0 || anoNasc > ano) {
        alert('Preencha o formulario de forma correta e tente novamente.')
    }else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - anoNasc
        var genero = ''

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                // criança
                img.setAttribute('src', './img/criancaHomem.jpg')
            }else if(idade < 21) {
                // jovem
                img.src = './img/jovemHomem.jpg'
            }else if(idade < 50 ){
                // adulto
                img.setAttribute('src', './img/adultoHomem.jpg')
            }else{
                // idoso
                img.src = "./img/idosoHomem.jpg"
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // Criança
                img.src = './img/criancaMulher.jpg'
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', './img/jovemMulher.jpg')
            }else if(idade <50){
                // Adulto
                img.src = "./img/adultoMulher.jpg"
            }else{
                // Idoso
                img.setAttribute('src', './img/idosoMulher.jpg')
            }
        }
        resposta.style.textAlign = "center"
        resposta.innerText = `Detectamos o gênero ${genero} e tem ${idade} anos.`
        resposta.appendChild(img)
    }
}
