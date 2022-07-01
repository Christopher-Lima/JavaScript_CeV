function tabuada(){
    var tabuada = window.document.getElementById('tabuada');
    var numero = window.document.getElementById('numero').value;
    var mult = 0;
    var resultado = 0;

    tabuada.innerHTML = '';

    do{
        resultado = numero*mult;
        tabuada.innerHTML += `<option>${numero} * ${mult} = ${resultado}</option>`;
        mult++
    } while (mult <= 10)
}