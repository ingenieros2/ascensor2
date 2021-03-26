var contenido = document.getElementById('contenido');
var pisos = [];
var edificio = null;

function generarLayout() {
    var campo = document.getElementById('numero').value;
    edificio = new Edificio(campo);
    var nuevaVista = 
`
<div class="container-fluid">
    <div class="row">
        <div class="border border-dark bg-dark col-6 m-0 p-0 d-flex flex-row">
            <div id="edificio" class="edificio">
            
            </div>
            <div id="ascensor" style="top: 500px;">
                <img src="./img/ascensorabierto.png" alt="">
            </div>
        </div>   
        
        <div class="col-6 m-0 p-0">    
        </div>
    </div>
</div>
`
    contenido.innerHTML = nuevaVista;
    edificio.generarPisos();

    var ascensor = new Ascensor(campo);
    var cantidad = ascensor.filaLlamadas.length
    for (var i = 0; i < cantidad; i++) {
        setTimeout(function() {
            ascensor.moverAscensor()
        }, 4000 * i)
        
    }
}