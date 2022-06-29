function atualizar(){
    var mensagem = window.document.getElementById('mensagem');
    var imagem = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    mensagem.innerHTML = `<p>Agora são <strong>${hora}</strong> horas.`;

    if (hora >=0 && hora < 12){
        mensagem.innerHTML += `<p>Tenha um bom dia &#x1F60A;<p>`;
        imagem.src = 'imagens/manha.png';
        document.body.style.background = '#b0c4de';
    } else if (hora >= 12 && hora < 18){
        mensagem.innerHTML += `<p>O dia está ótimo. Boa Tarde &#x1F603;<p>`;
        imagem.src = 'imagens/tarde.png';
        document.body.style.background = '#cd853f';
    } else if(hora >=18 && hora < 24){
        mensagem.innerHTML += `<p>Foi um bom dia. Boa Noite &#x1F634;<p>`;
        imagem.src = 'imagens/noite.png';
        document.body.style.background = '#4682b4';
    } else{
        window.alert('[ERRO] Horário invalido!');
        mensagem.innerHTML = `<p>Houve um erro e seu horário não foi reconhecido &#x2639;&#xFE0F;<p>`;
        mensagem.innerHTML += `<p>Verifique se o relógio do sistema está correto e tente novamente!`;
        imagem.src = 'imagens/erro.png';
        document.body.style.background = '#cd5c5c';
    }
}