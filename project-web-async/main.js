import './style.css'
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';


const init = () =>{
Header();
Main();
Footer();


}

init();

const getPhotos = async (keyword,photoNum,photoOrientation,photoRelevant) =>{

  try {
    const data = await fetch(`https://api.unsplash.com/search/photos?per_page=${photoNum}&query=${keyword}&orientation=${photoOrientation}&order_by=${photoRelevant}&client_id=${import.meta.env.VITE_CLIENT_ID}`);
    const dataJSON = await data.json();
    const photos = dataJSON.results;
    console.log(photos);
    printPhotos(photos);
  } catch (error) {
    console.error('Error al obtener las fotos:', error);
    
  }

};

const printPhotos = (photos) =>{
  
  const container = document.querySelector("#gallery");
  const message = document.querySelector("#message");
  
  
  if(photos.length === 0){
    siDisplay();
    container.innerHTML = "";
    message.textContent = "No se encontraron resultados, por favor inicia una nueva búsqueda...";
  }else{
    noDisplay();

    container.innerHTML = "";
    message.textContent = "";

    for (const photo of photos) {
      const li = document.createElement("li");
      li.innerHTML = `
      <a href="${photo.links.download}" target="_blank">
      <img class="photoGallery" src="${photo.urls.regular}" alt="${photo.alt_description}"/>
      </a>
      `
      container.appendChild(li);
    }
  }
  
 
}


document.querySelector("#searchBtn").addEventListener("click", () =>{
  const keywordValue = document.querySelector("#searchInput").value;
  const photoNumValue = document.querySelector("#pageInput").value;
  const photoOrientationValue = document.querySelector("#orientationInput").value;
  const photoRelevantValueValue = document.querySelector("#relevantInput").value;
  getPhotos(keywordValue,photoNumValue,photoOrientationValue,photoRelevantValueValue);
  document.querySelector("#searchInput").value = "";

})
getPhotos("Moon","10","landscape","relevant");


const noDisplay = () =>{
  const noDpl = document.querySelector("#message");
  noDpl.classList.add("no-display");
  
}

const siDisplay = () =>{
  const siDpl = document.querySelector("#message");
  siDpl.classList.remove("no-display");
  
}