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
            <div id="ascensor">
                <img src="./img/ascensorabierto.png" alt="">
            </div>
        </div>   
        
        <div class="col-6 m-0 p-5">
            <div class="panel">
                <div class="pantalla" id="pantalla">
                    <h2 class="up"> PB </h2>
                </div>
                
                <div class="botones" id="btn">                   
                </div>
            </div>
        </div>
    </div>
</div>
`
    contenido.innerHTML = nuevaVista;
    edificio.generarPisos();
  
}