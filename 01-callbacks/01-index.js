function saludar(nombre) {
    console.log('hola '+nombre);
}

function despedirse(nombre) {
    console.log('adios '+nombre);
}

function imprimeMensaje(callback) {
    let nombre = 'Martin';
    callback(nombre);
}

imprimeMensaje(saludar);
imprimeMensaje(despedirse);

function resultado(callback, num1, num2) {
    return callback(num1,num2); 
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

console.log(resultado(multiplicacion,2,4));

let segundos = 10;

function miContador(onTimeChanged) {
    setInterval(() => {
       segundos--;
       onTimeChanged(); 
    }, 1000);
}

function imprimeSegundos() {
    console.log(segundos);
}

miContador(imprimeSegundos);

setTimeout(() => {
    console.log("Ejec 1");
    setTimeout(() => {
        console.log("Ejec 2");
        setTimeout(() => {
            console.log("Ejec 3");
            setTimeout(() => {
                console.log("Ejec 4");
                console.log("Callbacks hasta el infinito");
                setTimeout(() => {
                   setTimeout(() => {
                      setTimeout(() => {
                          
                      }, timeout); 
                   }, timeout); 
                }, timeout);
                setTimeout(() => {
                    setTimeout(() => {
                        
                    }, timeout); 
                }, timeout); 
            }, 1000);
        setTimeout(() => {
            console.log("Ejec 3");
            setTimeout(() => {
                console.log("Ejec 4");
                console.log("Callbacks hasta el infinito");
                setTimeout(() => {
                   setTimeout(() => {
                      setTimeout(() => {
                          
                      }, timeout); 
                   }, timeout); 
                }, timeout);
                setTimeout(() => {
                    setTimeout(() => {
                        
                    }, timeout); 
                }, timeout); 
            }, 1000);
        }, 4000);
    }, 2000);
}, 1000);