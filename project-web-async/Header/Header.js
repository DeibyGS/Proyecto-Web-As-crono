import "./Header.css"

const template = () =>`
<img class="imgLogo" src="https://res.cloudinary.com/dhawfyfsv/image/upload/v1721411216/proyecto%20Async/unsplash_lofjva.png" alt="unsplash logo"/>
<input type="text" id="searchInput" placeholder="Example: animals "/>
<select id="pageInput">
<option value="10">10</option>
<option value="15">15</option>
<option value="20">20</option>
</select>

<select id="orientationInput">
<option value="landscape">Horizontal</option>
<option value="portrait">Retrato</option>
<option value="squarish">Cuadrada</option>
</select>

<select id="relevantInput">
<option value="latest">Más Reciente</option> 
<option value="relevant">Más Relevante</option>
</select>

<button id="searchBtn">Buscar</button>


`

const Header = () =>{
    document.querySelector("header").innerHTML = template();
}

export default Header;