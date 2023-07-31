function verificar(){
    // capturando ano
    var ano = document.getElementById('campo-idade').value

    // capturado data e ano
    var data = new Date()
    var anoAtual = data.getFullYear()
    
    // capturando o sexo
    var sexo = document.getElementsByName('sexo')

    
    if((ano == '') || (ano >= anoAtual)) {
        alert('[ERRO] Dados incorretos')
      
    } else {
        var result_idade = anoAtual - ano
        var result_sexo = ''


        // se for homem
        if(sexo[0].checked) {
            result_sexo = 'Homem'
            if((result_idade >= 1) && (result_idade <= 4)){
                document.getElementById('imagem').src = 'imagens/homem/crianca.jpg'
            } else if((result_idade >= 5) && (result_idade <= 14)){
                document.getElementById('imagem').src = 'imagens/homem/menino.jpg'
            } else if((result_idade >= 15) && (result_idade <= 19)) {
                document.getElementById('imagem').src = 'imagens/homem/homem-adolescente.jpg'
            } else if((result_idade >= 20 ) && (result_idade <= 29)) {
                document.getElementById('imagem').src = 'imagens/homem/homem-jovem.jpg'
            } else if((result_idade >= 30 ) && (result_idade <= 39)){
                document.getElementById('imagem').src = 'imagens/homem/homem.jpg'
            } else if((result_idade >= 40 ) && (result_idade <= 49)) {
                document.getElementById('imagem').src = 'imagens/homem/homem-velho.jpg'
            } else  {
                document.getElementById('imagem').src = 'imagens/homem/homem-mais-velho.jpg'
            }

        } 

        // se for mulher
        else {
            if(sexo[1].checked){
                result_sexo = 'Mulher'
                if((result_idade >= 1) && (result_idade <= 4)) {
                    document.getElementById('imagem').src = 'imagens/mulher/crianca.jpg'
                } else if((result_idade >= 5) && (result_idade <= 14)) {
                    document.getElementById('imagem').src = 'imagens/mulher/menina.jpg'
                } else if((result_idade >= 15) && (result_idade <= 19)) {
                    document.getElementById('imagem').src = 'imagens/mulher/mulher-adolescente.jpg'
                } else if((result_idade >= 20 ) && (result_idade <= 29)) {
                    document.getElementById('imagem').src = 'imagens/mulher/mulher-jovem.jpg'
                } else if((result_idade >= 30 ) && (result_idade <= 39)) {
                    document.getElementById('imagem').src = 'imagens/mulher/mulher.jpg'
                } else if((result_idade >= 40 ) && (result_idade <= 49)) {
                    document.getElementById('imagem').src = 'imagens/mulher/mulher-velha.jpg'
                } else {
                    document.getElementById('imagem').src = 'imagens/mulher/mulher-mais-velha.jpg'

                }
            }
        }

        document.getElementById('resultado').innerHTML = `Detectamos: ${result_sexo} com ${result_idade} anos.`
    }

}

function limpar(){
    document.getElementById('campo-idade').value = ''
    document.getElementById('resultado').innerHTML = 'Preencha os dados acima.'
    document.getElementById('imagem').src = ''
}