const EventEmitter = require('events');
class Tema {
    #ee = new EventEmitter();
    
    constructor(nombre) {
        this.nombre = nombre;
        this.mensajes = [];        
    }

    subscribe(callback, ambito){
        this.#ee.addListener(`${this.nombre}`, callback.bind(ambito));
    }

    publicar(texto, usuario){
        this.mensajes.push({
            usuario: usuario.nombre,
            mensaje: texto
        });
        console.log(`#${this.nombre.toUpperCase()}> Recibido nuevo mensaje de ${usuario.nombre}. Procedemos a notificar`);
        this.notificar();        
    }

    notificar() {
        this.#ee.emit(`${this.nombre}`,this.nombre);
    }
}

module.exports = Tema;