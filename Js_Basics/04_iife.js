// Immediately Invoked Function Expression (IIFE)

(function chai() {
    // Named iife chai
    console.log ('DB Connected ')
})();

// to avoid pollution of globla variable use iife


// ( () => {
    // unnamed iife
//     console.log(`DB CONNECTED `);
// })()


( (name) => {
    console.log(`DB CONNECTED ${name} `);
})('Ravishankar')