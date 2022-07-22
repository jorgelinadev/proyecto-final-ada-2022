//Proyecto Final
//Alumna: Jorgelina Daniela Alberti

//Recursos utilizados para este proyecto:
//https://github.com/janaipakos/ghibliapi
//API de estudio Ghibli
//La API de Studio Ghibli cataloga las personas, los lugares y las cosas que se encuentran en los mundos de Ghibli. Fue creado para ayudar a los usuarios a descubrir recursos, consumirlos a través de solicitudes HTTP e interactuar con ellos de cualquier manera que tenga sentido. La navegación se puede encontrar en la barra lateral izquierda, y la barra lateral derecha muestra ejemplos de objetos devueltos para llamadas exitosas.

const tarjetas = document.getElementById('tarjetas');

const url = 'https://ghibliapi.herokuapp.com/films'; 

fetch(url)
  .then((resp)=>resp.json())
  .then((data)=>printData(data))
  .catch((error)=> console.log(error))

  const printData = (arr) => {
    let str = '';
     for(let i = 0; i <arr.length; i++){          
      const original_title = arr[i].original_title
      const image = arr[i].image
      const original_title_romanised = arr[i].original_title_romanised      
      const director = arr[i].director
      const producer = arr[i].producer
      const release_date = arr[i].release_date      
      str = str + `
      <div class="tarjeta">
      <p> ${original_title}</p>
      <figure>
        <img src="${image}" alt="${director}"width="260px">
      </figure>
      <p>Título original: ${original_title_romanised}</p>
      <p>Director: ${director}</p>
      <p>Productor: ${producer}</p>
      <p>Año: ${release_date}</p>          
      </div>
      `
      tarjetas.innerHTML = str; 
      }       
  }
     
 