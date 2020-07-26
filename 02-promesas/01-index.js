


function timeout (ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
        resolve("It was resolved!");
        }, ms)
    });
    }
    
    timeout(1000).then(function (dataFromPromise) {
    // logs "It was resolved!"
    console.log(dataFromPromise);
    })
    
    console.log("waiting...");



    

function exitoCallback(resultado) {
    console.log("Archivo de audio disponible en la URL " + resultado);
}

function falloCallback(error) {
    console.log("Error generando archivo de audio " + error);
}

crearArchivoAudioAsync(audioConfig, exitoCallback, falloCallback);

// JS Moderno 
crearArchivoAudioAsync(audioConfig).then(exitoCallback, falloCallback);

// JS Moderno usando promesas
const promesa = crearArchivoAudioAsync(audioConfig);

promesa.then(exitoCallback, falloCallback);



const promesa = hazAlgo();
const promesa2 = promesa.then(exitoCallback, falloCallback);

let promesa2 = hazAlgo().then(exitoCallback, falloCallback);




hazAlgo(function (resultado) {
    hazAlgoMas(resultado, function (nuevoResultado) {
        hazLaTerceraCosa(nuevoResultado, function (resultadoFinal) {
            console.log('Obtenido el resultado final: ' + resultadoFinal
      }, falloCallback);
    }, falloCallback);
}, falloCallback);

hazAlgo().then(function (resultado) {
    return hazAlgoMas(resultado);
})
    .then(function (nuevoResultado) {
        return hazLaTerceraCosa(nuevoResultado);
    })
    .then(function (resultadoFinal) {
        console.log('Obtenido el resultado final: ' + resultadoFinal);
    })
    .catch(falloCallback);

hazAlgo()
    .then(resultado => hazAlgoMas(resultado))
    .then(nuevoResultado => hazLaTerceraCosa(nuevoResultado))
    .then(resultadoFinal => {
        console.log(`Obtenido el resultado final: ${resultadoFinal}`);
    })
    .catch(falloCallback);

new Promise((resolver, rechazar) => {
    console.log('Inicial');
    resolver();
}).then(() => {
    throw new Error('Algo falló');
}).catch(() => {
    console.log('Haz aquello');
}).then(() => {
    console.log('Haz esto sin que importe lo que sucedió antes');
});



//  Ejemplo de promise

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // if (Math.random() < 0.5) {
        if (true === true) {
            resolve("hello world");
        } else {
            reject(new Error('Hello error!'));
        }
    }, 2000);
});

promise.then(msg => msg.toUpperCase())
    .then(msg => console.log('message', msg))
    .catch(err => console.log('Error', err));
