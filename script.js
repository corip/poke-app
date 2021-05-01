function getPokeList() {


    var res;


    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => res = response.json())
        .then(json => {
            res = json
            console.log(json)

            var tablePrueba = document.getElementById("lsPoket");
            var id=1;
            res.results.forEach(element => {
                    
                var newDiv = document.createElement("tr");
                newDiv.innerHTML =
                    '<td>' + element.name + '</td>' +
                    '<td> <button onclick="window.location=\'./detalle.html?id='+id+'\'">Ver detalle</button></td>';

                    
                id++;


                tablePrueba.appendChild(newDiv);

                
                var btnDetalle = document.getElementById('detail');


            });
        })

    


}

window.onload = function () {
    getPokeList();
}








