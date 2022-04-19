class MarcadorPrivado {
    equipos = [];
    
    constructor() {
        this.equipos = [];
    }

    anadirPunto(equipo) {
        // crea equipo si no existe
        let indexEquipo = this.equipos.findIndex( elem => elem.equipo  === equipo);
        if ( indexEquipo === -1){
            this.anadirEquipo(equipo);
            indexEquipo = this.equipos.findIndex( elem => elem.equipo  === equipo);
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
        const consoleColor = '\x1b[36m%s\x1b[0m';

        console.log(consoleColor,"### CLASIFICACIÓN ###")

        for (let equipo of this.equipos) {
            if (equipo.puntos !== ultimosPuntos) {
                posicion++;
            }
            console.log(consoleColor,`${posicion}. ${equipo.equipo} (${equipo.puntos} puntos)`);
            //console.log("holi: ", equipo.puntos, ultimosPuntos);
            
            ultimosPuntos = equipo.puntos;            
        }

        //console.table(this.equipos);

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