class MarcadorPrivado {
    equipos = [];
    
    constructor() {
        this.msg = "Holiwi";
    }

    marcarPunto(jugador){
        console.log(`Punto del jugador ${jugador.nombre} del equipo ${jugador.equipo}`);
        
        // crea equipo si no existe
        let indexEquipo = this.equipos.findIndex( elem => elem.equipo  === jugador.equipo);
        if ( indexEquipo === -1){
            this.anadirEquipo(jugador.equipo);
            indexEquipo = this.equipos.findIndex( elem => elem.equipo  === jugador.equipo);
        }
        // añade punto        
        this.equipos[indexEquipo].puntos ++;
    }

    anadirEquipo (equipo) {
        this.equipos.push({ 
            equipo,
            puntos: 0 
        });
    }

    mostrarMarcador () {
        this.equipos.sort( (a, b) => b.puntos - a.puntos );
        let posicion = 0;
        let ultimosPuntos = 0;

        console.log("### CLASIFICACIÓN ###")

        for (let equipo of this.equipos) {
            if (equipo.puntos !== ultimosPuntos) {
                posicion++;
            }
            console.log(`${posicion}. ${equipo.equipo} (${equipo.puntos} puntos)`);
            //console.log("holi: ", equipo.puntos, ultimosPuntos);
            
            ultimosPuntos = equipo.puntos;            
        }

        console.log("#####################");
    }
}

class Marcador {
    constructor() {
        throw new Error("Utiliza el método Marcador.getInstance()")
    }

    static getInstance() {
        if (!Marcador.instance) {
            Marcador.instance = new MarcadorPrivado();
        }
        return Marcador.instance;
    }
}










module.exports = Marcador;

/*
let prueba = Marcador.getInstance();
console.log(prueba.msg);
prueba.msg = "Holiwi de kiwi";
let prueba2 = Marcador.getInstance();
console.log(prueba2.msg);
*/