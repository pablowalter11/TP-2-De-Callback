//1. Multiplicar números con un callback:
//o Crea una función multiplicar que acepte dos números y un callback.
//o Usa el callback para mostrar el resultado de multiplicar los dos números.

   export function multiplicar(a,b,callback) { 
        callback(a*b);
    }

   export function mostrarResultado(valor) {
        console.log(valor);
    }
