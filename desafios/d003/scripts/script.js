function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var nascimento = window.document.getElementById('ano_txt');
    var resultado = window.document.getElementById('resultado');
    var imagem = window.document.getElementById('imagem');

    if (nascimento.value > ano || nascimento.value <= 1900){
        window.alert('[Erro] Verifique o ano de nascimento e tente novamente!');
    } else{
        var sexo = document.getElementsByName('radsex');
        var idade = ano - Number(nascimento.value);
        var gênero = '';
        

        if (sexo[0].checked){

            gênero = 'homem';
        } else if (sexo[1].checked){
            gênero = 'mulher';
        }

        resultado.innerHTML = `<p>Detectamos que você é ${gênero} e tem ${idade} anos<p>`;

        if (idade >= 0 && idade < 10){
            imagem.src = `imagens/crianca_${gênero}.png`;
        } else if (idade >= 10 && idade < 20){
            imagem.src = `imagens/adolescente_${gênero}.png`;
        } else if (idade >= 20 && idade < 30){
            imagem.src = `imagens/jovem_${gênero}.png`;
        } else if (idade >= 30 && idade < 50){
            imagem.src = `imagens/adulto_${gênero}.png`;
        } else if (idade >= 50){
            imagem.src = `imagens/idoso_${gênero}.png`;
        }
    }
}