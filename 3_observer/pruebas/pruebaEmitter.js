// PRUEBA DE FUNCIONAMIENTO EventEmitter
const EventEmitter = require('events');

const prueba = () => {
    console.log("Holiwi");
}


const myEmitter = new EventEmitter();

/*
myEmitter.on('event', () => {
    console.log("Eventooooooo!");
});
*/

myEmitter.addListener('event',prueba);

myEmitter.emit('event');




