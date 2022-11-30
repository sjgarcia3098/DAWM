//const urlRM = `https://rickandmortyapi.com/api/character`
let = arrEstados = [];
let = arrU_Estados = [];
let = arrEspecies = [];
let = arrU_Especies = [];
let cantidadEstados = [];
let cantidadEspecies = [];

const cargarDatosAPI = (url) => {
    fetch(url)
    .then((response) => response.json())
    .then((characters) => {
        let cantIdPersonajes = parseInt(characters.info.count);
        let arEst = []
        for(let id=1; id<10+1;id++){
            fetch(url+`/${id}`)
            .then((response) => response.json())
            .then(character => {
                let estado = character.status;
                let especie = character.species;
                arrEstados.push(estado);
                arEst.push(estado);
                arrEspecies.push(especie);
                if(!(arrU_Estados.includes(estado))){
                    arrU_Estados.push(estado)
                }
                if(!(arrU_Especies.includes(especie))){
                    arrU_Especies.push(especie)
                }
            })

        }
        arrCantidadEstados(arrU_Estados,arrEstados);
        arrCantidadEspecies(arrU_Especies,arrEspecies);
    })
    .catch((error) => console.log(error));
}

const arrCantidadEstados = (arrayU,array) => {
    let contador = 0;
    for(i=0;i<3;i++){
        for(j=0;j<10;j++){    
            if(arrayU[i]===array[j]){
            contador+=1;       
            };
        };
        cantidadEstados.push(contador);
        contador = 0;
    };
    /*arrayU.forEach(elementU => {
        array.forEach(element => {
            console.log(elementU)
            elementU===element?++contador:contador;
        });
        console.log(contador)
        cantidadEstados.push(contador);
        contador = 0;
    });*/  
} 

const arrCantidadEspecies = (arrayU,array) => {
    let contador = 0;
    for(i=0;i<2;i++){
        for(j=0;j<10;j++){    
            if(arrayU[i]===array[j]){
            contador+=1;       
            };
        };
        cantidadEspecies.push(contador);
        contador = 0;
    };
} 

const barChart = (arrayU,arrayC) => {
    console.log(arrayC);
    const data = {
        labels: arrayU,
        datasets: [{
            label: "Estado de Personajes",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
              ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)'
              ],
            borderWidth: 1,
            data: arrayC,
        }]
    };
    const config = {
        type: 'bar',
        data,
        options:{
            indexAxis: 'y',
            scales: {
                y: {
                  ticks: {
                    crossAlign: 'far',
                  }
                }
              }
            }
    };
    let bar_chart = new Chart(
        document.getElementById("barChart"),config
    );

}

document.addEventListener("DOMContentLoaded", () => {
    cargarDatosAPI(urlRM);
    //arrCantidadEstados(arrU_Estados,arrEstados);
    //arrCantidadEspecies(arrU_Especies,arrEspecies);
    //console.log(cantidadEstados)
    barChart(arrU_Estados,cantidadEstados);
})

