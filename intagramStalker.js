function robarImagenes(maximo){
  var nombreDeImagen = "pImage_";
  for (var i = 11; i < maximo + 11; i++){
    var imagen = document.getElementById(nombreDeImagen + i).src;
    if(imagen != null){
        console.log(imagen);
    }
  }
}
