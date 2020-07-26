// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/funcion_asincrona
// https://javascript.info/async-await
const promisefunction = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        // if (Math.random() < 0.5) {
        if (true === true) {
            resolve("hello world");
        } else {
            reject(new Error('Hello error!'));
        }
    }, 2000);
});


async function asyncAwait() {
    try {
        const msg = await promisefunction();
        console.log('message',msg);
    } catch (error) {
        console.log('error',error);
    }
}

asyncAwait();