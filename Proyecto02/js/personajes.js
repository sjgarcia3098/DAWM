const urlRM = "https://rickandmortyapi.com/api/character"
let = nextPage = "";
let = prevPage = "";

const prev = () => {
    cargarPersonajes(prevPage);
}

const next = () =>  {
    cargarPersonajes(nextPage);
}

const cargarPersonajes = (url) => {
    fetch(url)
    .then((response) => response.json())
    .then((characters) => {
        let arrPersonajes = characters.results;
        mostrarPersonajes(arrPersonajes);
        nextPage = characters.info.next;
        prevPage = characters.info.prev;
        /*const container = document.getElementById("container_characters");*/
         
    })
    .catch((error) => console.log(error));
}

const mostrarPersonajes = (array) => {
    document.getElementById("container_characters").innerHTML = "";
    array.forEach((personaje) => {
        document.getElementById("container_characters").innerHTML += `
            <div id="card" class="card bigEntrance">
                <img src="${personaje['image']}" class="card-img-top" alt="...">
                <div id="card-body" class="card-body">
                    <h5 class="card-title">${personaje.name}</h5>
                </div>
            </div>  
        ` 
    }); 
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
    cargarPersonajes(urlRM);
    filtrarPersonajes();
    prev();
    next();

});


    