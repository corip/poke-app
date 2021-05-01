function getPokeList() {


    var res;
    /*  $.ajax({
        url:   'https://pokeapi.co/api/v2/pokemon',
        type:  'get'
      }).done(function (response) {
          res = JSON.parse(response);     
      });
  
      res.results.forEach(element => {
          console.log(element)
      });*/

    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => res = response.json())
        .then(json => {
            res = json
            console.log(json)

            var tablePrueba = document.getElementById("lsPoket");
            var id=1;
            res.results.forEach(element => {
                    
                //for ( var i=0; i < 5; i ++) {
                var newDiv = document.createElement("tr");
                newDiv.innerHTML =
                    '<td>' + element.name + '</td>' +
                    '<td> <button onclick="window.location=\'./detalle.html?id='+id+'\'">Ver detalle</button></td>';

                    
                id++;


                tablePrueba.appendChild(newDiv);

                
                var btnDetalle = document.getElementById('detail');
               /* btnDetalle.onclick = function () {
                    
                    location.href ="./detalle.html?id="+1;

                }*/


                //}

            });
        })




    return res;


}

window.onload = function () {
    getPokeList();
}








