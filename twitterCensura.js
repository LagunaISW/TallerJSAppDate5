function censura(palabraProhibida, palabraChida) {
    var tweets = document.getElementsByClassName("tweet-text");

    for (var i = 0; i < tweets.length; i++){
      var texto = tweets[i].innerHTML;

      if(texto.toUpperCase().includes(palabraProhibida.toUpperCase())){
        //tweets[i].innerHTML = texto.replace(palabraProhibida, palabraChida);
        tweets[i].innerHTML = texto.toUpperCase().replace(palabraProhibida.toUpperCase(), palabraChida);
      }
    }
}
