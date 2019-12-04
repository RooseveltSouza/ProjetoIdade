function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var anoNasc = document.getElementById('ano').value
    var resposta = document.getElementById('resposta')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    resposta.appendChild(img)
    
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
            }else if(idade < 21) {
                // jovem
            }else if(idade < 50 ){
                // adulto

            }else{
                // idoso
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // Criança
            }else if(idade < 21){
                // Jovem
            }else if(idade <50){
                // Adulto
            }else{
                // Idoso
            }
        }
        resposta.style.textAlign = "center"
        resposta.innerText = `Detectamos o gênero ${genero} e tem ${idade} anos.`
    }
}
