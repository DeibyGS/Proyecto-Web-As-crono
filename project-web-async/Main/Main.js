import "./Main.css"

const template = () =>
    `
<h2 id="message"></h2>
<ul id="gallery"></ul>
<div id="pagination" class="pagination">
    <button id="prevPage" class="pagination-btn" disabled>&laquo; Anterior</button>
    <span id="pageInfo" class="pagination-info"></span>
    <button id="nextPage" class="pagination-btn">Siguiente &raquo;</button>
</div>

`

const Main = () =>{
    document.querySelector("main").innerHTML = template();
}

export default Main;