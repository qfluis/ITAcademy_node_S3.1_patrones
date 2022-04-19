const Marcador = require("./Marcador.js");
const Jugador = require("./Jugador.js");

class Juego {
    constructor(puntosParaGanar){
        this.puntosParaGanar = puntosParaGanar;
        this.arrayJugadores = [];
        this.equipos =[];
        //Singleton usando clase (en fichero Marcador.js)
        this.marcador = Marcador.getInstance();
    }

    anadirJugador(nombre, equipo){
        const jugador = new Jugador(nombre, equipo);
        this.arrayJugadores.push(jugador);
    }

    intentarMarcarPunto(jugador) {
        let num = Math.random();
        if (num > 0.50) {
            console.log(`Punto del jugador ${jugador.nombre} del equipo ${jugador.equipo}`);
            this.marcador.anadirPunto(jugador.equipo);
        }
    }

    ronda() {
        for (let jugador of this.arrayJugadores) {
            this.intentarMarcarPunto(jugador);
        }
    }

    jugar() {
        let juegoFinalizado = false;
        let rondaJuego = 1;
        while (!juegoFinalizado){
            console.log("RONDA " + rondaJuego + " ###############");
            this.ronda();
            this.marcador.mostrarMarcador();

            for (let equipo of this.marcador.equipos){
                if (equipo.puntos >= this.puntosParaGanar) {
                    juegoFinalizado = true;
                }
            }
            rondaJuego ++;
        }
    }
}

module.exports.Juego = Juego;