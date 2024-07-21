import "./Main.css"

const template = () =>
    `
<h2 id="message" class="hidden"></h2>
<ul id="gallery"></ul>

`

const Main = () =>{
    document.querySelector("main").innerHTML = template();
}

export default Main;