function contar(){
    var valor = window.document.getElementById('valor_inicio').value;
    var valori = Number(valor);
    var final = window.document.getElementById('valor_final').value;
    var passo = window.document.getElementById('valor_passo').value;
    var resultado = window.document.getElementById('resultado');

    if (valori == '' || Number(valori) < 0 || Number(passo) <= 0){
        window.alert('[ERRO] Verifique os valores inseridos e tente novamente.');
    } else{
        resultado.innerHTML = '<p>Contando: </p>';

        if (Number(valori) >= Number(final)){
            while ( valori >= final){
                resultado.innerHTML += `${valori} &#x1F449;`;
                valori-= Number(passo);
            }
        } else{
            while ( final >= valori){
                resultado.innerHTML += `${valori} &#x1F449;`;
                valori+= Number(passo);
            }
        }
        resultado.innerHTML += `&#x1F3F4;`;
    }
}