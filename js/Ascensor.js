class Ascensor {
    cantidadPisos;
    pisoActual;
    filaLlamadas;
    moviendose;

    constructor (cantidadPisos) {
        this.cantidadPisos = cantidadPisos;
        this.pisoActual = 0; 
        this.filaLlamadas = [];
        this.moviendose = false;
        
    }

    dibujarAscensor() {
        var ascensor = document.getElementById('ascensor');
        var siguientePiso = this.filaLlamadas[0];
        var posicion = (this.cantidadPisos * 100) - (siguientePiso * 100) - 100; 
        ascensor.style.top = `${posicion}px`;
    }

    //MOVER ASCENSOR ESTA MAL, HAY QUE VER EL SET TIMEOUT
    moverAscensor() {
        if (this.filaLlamadas.length === 0) {
            return false;
        }
        var siguientePiso = this.filaLlamadas[0];
        this.dibujarAscensor();
        this.filaLlamadas.splice(0, 1);

        edificio.botonera.cambiarPantalla(siguientePiso);

        var _this = this;
        setTimeout(function() {
            _this.moverAscensor()
        }, 4000)
    }

    agregarPiso(piso){
        if (this.filaLlamadas.length < 4 && !this.filaLlamadas.includes(piso)) {
            this.filaLlamadas.push(piso);
            if (!this.moviendose) {
                this.moverAscensor();
            }
            return true;
        }else{
            return false;
        }

    }
}