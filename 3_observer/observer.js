const EventEmitter = require('events');

class Usuario{
    constructor(nombre) {
        this.nombre = nombre;
    }

    escribirEnTema(tema, mensaje) {
        tema.publicar(mensaje, this);
    }

    suscribirseATema(tema){
        tema.suscribe(this);
    }
    notificar(mensajes){
        console.log(mensajes);
    }

    
}

// 
class Tema extends EventEmitter {
    constructor() {
        this.suscritos = [];
        this.mensajes = [];
    }

    suscribe(usuario){
        this.suscritos.push(usuario);
    }

    publicar(texto, usuario){
        this.mensajes.push({
            usuario: usuario.nombre,
            mensaje: texto
        });
        this.notificar();        
    }

    notificar() {
        for (let usuario of this.suscritos) {
            usuario.notificar(this.mensajes);
        }
    }

}

const tema1 = new Tema();
const user1 = new Usuario("Luis");
const user2 = new Usuario("Toni");
const user3 = new Usuario("cucu");
user1.suscribirseATema(tema1);
user3.suscribirseATema(tema1);
user2.escribirEnTema(tema1, "Holiwi de kiwi");

/*
Escriu una aplicació que creï diferents objectes Usuari. 
L'aplicació podrà crear diferents Temes i subscriure els usuaris a ells. 
Quan un Usuari afegeixi un missatge a un Tema s'enviarà una alerta per 
la consola des del Tema. També ho mostraran per consola cadascun dels Usuaris 
que estiguin subscrits al Tema (rebran el missatge). 
Crea un Tema amb un Usuari i un altre amb dos i mostra la recepció dels 
missatges pels usuaris. Utilitza el mòdul events.
*/