
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var id = getParameterByName('id');

console.log(id)



window.onload = function () {
    getPokeById(id);
}

function getPokeById(id) {

    var imagen = document.getElementById("imagen");
var name = document.getElementById("name");
var peso = document.getElementById("peso");
var altura = document.getElementById("altura");
    
    fetch('https://pokeapi.co/api/v2/pokemon/'+id)
        .then(response => response.json())
        .then(json =>{ console.log(json)
            console.log( json.name)
            name.innerHTML = json.name;
            peso.innerHTML = json.weight;
            altura.innerHTML = json.height;
            imagen.setAttribute('src',json.sprites.front_default)
        
        })

}




