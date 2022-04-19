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

module.exports = Usuario;