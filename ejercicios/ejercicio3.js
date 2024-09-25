//3. Uso de setTimeout con callbacks:
//o Usa setTimeout para imprimir "Esto es un callback" después de 2 segundos.

export function esEstoUnaCallback(mil,callback){
    setTimeout(callback,mil);
}

export function estoEsUnaCallback() {
    console.log("Esto es un callback");
}