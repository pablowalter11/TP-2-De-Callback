//2. Operación con números usando callbacks:
//o Define una función operarNumeros que acepte dos números y un callback.
//o Crea dos callbacks, uno para sumar y otro para restar los números.

export function operarNumeros(a,b,callback) {
    callback(a+b);
    callback(a-b);
}

export function mostrarOperacion(valor) {
    console.log(`${valor}`);
}