var num = window.document.getElementById('numero');
var tabela = window.document.getElementById('tabela');
var numeros = [];

function novo_numero(){
    let valor = Number(num.value);
    resultado.innerHTML = '';
    if (valor <= 0 || valor >= 101){
        alert('[ERRO] Número invalido. Adicione um número entre 1 e 100');
    } else if (numeros.indexOf(valor) == -1){
        let item = document.createElement('option');
        item.innerHTML += `Valor ${valor} adicionado`;
        tabela.appendChild(item);
        numeros.push(valor);
    } else{
        alert('[ERRO] O número digitado já foi adicionado.');
    }
    num.value = '';
    num.focus();
}

function finalizar(){
    if (numeros != ''){
        let num_cad = numeros.length;
        numeros.sort((a,b)=>a-b);

        function somar(total, number) {
            return total + number
        }

        resultado.innerHTML += `<p>Ao todo, temos <strong>${num_cad}</strong> números cadastrados</p><p>O maior valor informado foi <strong>${numeros[numeros.length-1]}</strong></p><p>O menor valor informado foi <strong>${numeros[0]}</strong></p><p>Somando todos os valores, temos <strong>${numeros.reduce(somar, 0)}</strong></p><p>A média dos valores digitados é <strong>${numeros.reduce(somar, 0)/numeros.length}</strong></p>`;
    } else{
        alert('[ERRO] Nenhum valor informado.');
    }
}
function limpar(){
    numeros = [];
    tabela.innerHTML = '';
    resultado.innerHTML = '';
}