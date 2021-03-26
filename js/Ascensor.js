class Ascensor {
    cantidadPisos;
    pisoActual;
    filaLlamadas;

    constructor (cantidadPisos) {
        this.cantidadPisos = cantidadPisos;
        this.pisoActual = 0; 
        this.filaLlamadas = [5, 2, 0, 3, 4]; 
    }

    moverAscensor () {
        var ascensor = document.getElementById('ascensor');
        var siguientePiso = this.filaLlamadas[0];
        var posicion = (this.cantidadPisos * 100) - (siguientePiso * 100) - 100; 
        ascensor.style.top = `${posicion}px`;
        this.filaLlamadas.splice(0, 1);
    }
}