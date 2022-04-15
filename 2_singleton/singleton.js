class Jugador {
    constructor(nombre, equipo){
        this.nombre = nombre;
        this.equipo = equipo
    }
    marcarPunto() {
        let num = Math.random();
        if (num > 0.50) marcador.marcarPunto(this);
    }
}

// singleton usando objeto (sin usar clase) FINES EDUCATIVOS
/*
const marcador = {
    equipos: [],
    marcarPunto (jugador){
        console.log(`Punto del jugador ${jugador.nombre} del equipo ${jugador.equipo}`);
        
        // crea equipo si no existe
        let indexEquipo = this.equipos.findIndex( elem => elem.equipo  === jugador.equipo);
        if ( indexEquipo === -1){
            this.anadirEquipo(jugador.equipo);
            indexEquipo = this.equipos.findIndex( elem => elem.equipo  === jugador.equipo);
        }
        // añade punto
        
        this.equipos[indexEquipo].puntos ++;
    },
    anadirEquipo (equipo) {
        this.equipos.push({ 
            equipo,
            puntos: 0 
        });
    },
    mostrarMarcador () {
        for (let equipo of this.equipos) {
            console.log(equipo);
        }
    }
}
*/

// Singleton usando clase (en fichero Marcador.js)
const Marcador = require("./Marcador.js");
const marcador = Marcador.getInstance();

const arrayJugadores = [];
arrayJugadores.push(new Jugador("luis", "Rojo"));
arrayJugadores.push(new Jugador("cris", "Azul"));
arrayJugadores.push(new Jugador("Lechuguino", "verde"));
arrayJugadores.push(new Jugador("peter", "Rojo"));
arrayJugadores.push(new Jugador("luci", "Azul"));
arrayJugadores.push(new Jugador("Brocolino", "verde"));
arrayJugadores.push(new Jugador("Bea", "Rojo"));
arrayJugadores.push(new Jugador("Albert", "Azul"));
arrayJugadores.push(new Jugador("Marciano", "verde"));

const ronda = () => {
    for (let jugador of arrayJugadores) {
        jugador.marcarPunto();
    }
}

// El primer equipo en llegar a 10 puntos al finalizar la ronda gana
let juegoFinalizado = false;
let rondaJuego = 1;
while (!juegoFinalizado){
    console.log("RONDA " + rondaJuego + " ###############");
    ronda();
    marcador.mostrarMarcador();

    for (let equipo of marcador.equipos){
        if (equipo.puntos >= 10) {
            juegoFinalizado = true;
        }
    }
    rondaJuego ++;
}


