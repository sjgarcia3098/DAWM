const cargarPersonajes = () => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((characters) => {
        let arrPersonajes = characters.results;
        /*const container = document.getElementById("container_characters");*/
        arrPersonajes.forEach((personaje) => {
            document.getElementById("container_characters").innerHTML += `
                <div class="card">
                    <img src="${personaje['image']}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${personaje.name}</h5>
                    </div>
                </div>  
            ` 
        });  
    })
    .catch((error) => console.log(error));
}

document.addEventListener("DOMContentLoaded", () => {
    cargarPersonajes();
});


    