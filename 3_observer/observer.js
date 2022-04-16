const EventEmitter = require('events');

class Usuario{
    constructor(nombre) {
        this.nombre = nombre;
    }

    escribirEnTema(tema, mensaje) {
        tema.publicar(mensaje, this);
    }

    suscribirseATema(tema){
        tema.subscribe(this.accionCambios, this);
    }
    accionCambios(tema){
        console.log(` >${this.nombre}: he recibido la notificación del tema: ${tema}`);
    }    
}

// 
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

const tema1 = new Tema("Bonsais");
const tema2 = new Tema("Furros");
const user1 = new Usuario("Luis");
const user2 = new Usuario("Toni");
const user3 = new Usuario("cucu");
const user4 = new Usuario("Sonic");
user1.suscribirseATema(tema1);
user2.suscribirseATema(tema2);
user3.suscribirseATema(tema2);
user4.escribirEnTema(tema1, "Holiwi de kiwi");
user1.escribirEnTema(tema2, "Ola hente");
/*
user1.suscribirseATema(tema2);
user4.escribirEnTema(tema2, "Me encanta sonic la pelicula");
*/