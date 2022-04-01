'use strict';

/*let numero = parseInt(prompt('Ingrese un número'));

let cero = prompt('Para calcular la paridad escriba "SI" si quiere considerar el cero como numero par o "No", simplemente como cero');*/

function paridad (numero = parseInt(prompt('Ingrese un número')), cero = prompt('Para calcular la paridad escriba "SI" si quiere considerar el cero como numero par o "No", simplemente como cero')){
    if (cero == "si"){
        if (numero % 2 === 0){
            numero = 'Usted ingresó un número par';
        } else if (numero % 2 === 1){
            numero = 'Usted ingresó un número impar'
        }
    } else {
        numero = 'Usted ingresó otro valor'
    }

    alert(numero);
}

