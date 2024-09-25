//4. Filtrar números pares con un callback:
//o Define una función filtrarPares que acepte un array de números y un callback.
//o Usa el callback para filtrar solo los números pares.

/*export function arrayAFiltrar(array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}*/

export function arrayAFiltrar(array, callback) {
    array.forEach(e=>callback(e))
}

export function mostrarPares(valor) {
    if(valor % 2 == 0) {
        console.log(valor);
    }
    
}