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

  const data = await fetch(`https://api.unsplash.com/search/collections?per_page=${photoNum}&query=${keyword}&orientation=${photoOrientation}&order_by=${photoRelevant}&client_id=${import.meta.env.VITE_CLIENT_ID}`);
  const dataJSON = await data.json();
  const photos = dataJSON.results;
  printPhotos(photos);

};

const printPhotos = (photos) =>{
  const container = document.querySelector("#gallery");
  container.innerHTML = "";
  for (const photo of photos) {
    const li = document.createElement("li");
    li.innerHTML = `
    <img class="photoGallery" src="${photo.cover_photo.urls.regular}" alt="${photo.cover_photo.alt_description}"/>
    `
    container.appendChild(li);
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
getPhotos("Moon","20","squarish","relevant");