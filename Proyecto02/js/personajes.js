const cargarPersonajes = () => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((characters) => {
        let arrPersonajes = characters.results;
        /*const container = document.getElementById("container_characters");*/
        arrPersonajes.forEach((personaje) => {
            document.getElementById("container_characters").innerHTML += `
                <div id="card" class="card">
                    <img src="${personaje['image']}" class="card-img-top" alt="...">
                    <div id="card-body" class="card-body">
                        <h5 class="card-title">${personaje.name}</h5>
                    </div>
                </div>  
            ` 
        });  
    })
    .catch((error) => console.log(error));
}

const filtrarPersonajes =  () => {
    document.getElementById('buscador').addEventListener('keyup', (e) => {
        if(e.target.matches('#buscador')){
            document.querySelectorAll("#card").forEach((character) => {
                character.querySelector("#card-body > h5").textContent.toLowerCase().includes(e.target.value)
                ? character.classList.remove("filter")
                : character.classList.add("filter");
            })

        }
    }
    
    )
}


document.addEventListener("DOMContentLoaded", () => {
    cargarPersonajes();
    filtrarPersonajes();
});


    