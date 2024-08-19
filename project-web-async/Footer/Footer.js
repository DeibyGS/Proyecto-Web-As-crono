    import "./Footer.css"

    const template = ()=>`
        <p>Unsplash - 2024</p>

    `
    
    const Footer = () =>{
        const footerElement = document.createElement("footer");
        footerElement.innerHTML = template();
        document.body.appendChild(footerElement);
        
    }

    export default Footer;