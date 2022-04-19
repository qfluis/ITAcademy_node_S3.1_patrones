const Usuario = require('./Usuario.js');
const Tema = require('./Tema.js')


// Creación de Temas
const tema1 = new Tema("Bonsais");
const tema2 = new Tema("Furros");
// Creación de Usuarios
const user1 = new Usuario("Luis");
const user2 = new Usuario("Toni");
const user3 = new Usuario("cucu");
const user4 = new Usuario("Sonic");
// Suscripciones de usuarios a temas
user1.suscribirseATema(tema1);
user2.suscribirseATema(tema2);
user3.suscribirseATema(tema2);
// Publicación de nueva información
user4.escribirEnTema(tema1, "Holiwi de kiwi");
user1.escribirEnTema(tema2, "Ola hente");

/*
user1.suscribirseATema(tema2);
user4.escribirEnTema(tema2, "Me encanta sonic la pelicula");
*/