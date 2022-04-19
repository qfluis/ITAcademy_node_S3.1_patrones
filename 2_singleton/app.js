const { Juego } = require("./Juego.js");
const juego = new Juego(10); // 10 rondas


// Añadimos jugadores
juego.anadirJugador("Luis", "Rojo");
juego.anadirJugador("Cris", "Azul");
juego.anadirJugador("Lechuguino", "Verde");
juego.anadirJugador("Peter", "Rojo");
juego.anadirJugador("Luci", "Azul");
juego.anadirJugador("Brocolino", "Verde");
juego.anadirJugador("Bea", "Rojo");
juego.anadirJugador("Albert", "Azul");
juego.anadirJugador("Marciano", "Verde");

// Iniciamos juegos
juego.jugar();

