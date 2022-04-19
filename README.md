# Sprint 3.1 Patrones
## Nivel 1. Callback hell
Fichero **1_callback_hell/callback_hell.js**.

Ejercicio solucionado de 2 modos:
- Con funciones sincronas de fs, función **darLaVuelta**.
- Con funciones de fs que implementan promesas y async / await, función **darLaVueltaAsync**.

Es necesario tener creadas las carpetas inbox y outbox para que funcione.
```
npm run cbhell
```
## Nivel 2. Singleton
Ficheros:
- **2_singleton/app.js**, contiene archivo principal.
- **2_singleton/Jugador.js**, contiene clase jugador.
- **2_singleton/Juego.js**, implementa la lógica del Juego.
- **2_singleton/Marcador.js**, contiene las clases que implementan el singleton Marcador.
```
npm run singleton
```
## Nivel 3. Observer
Ficheros:
- **3_observer/app.js**, contiene archivo principal.
- **3_observer/pruebas/pruebaEmitter.js**, contiene pruebas de funcionamiento de EventEmitter (no forma parte de la app).
- **3_observer/Tema.js**, clase que contiene la lógica de publicación y susbscripción a temas, utilizando EventEmitter.
- **3_observer/Usuario.js**, clase que contiene la lógica de los usuarios y su interacción con los temas.
```
npm run observer
```