const formulario = document.getElementById("formulario")
mostrarForm()
function mostrarForm(){
    const fieldnom = document.createElement("fieldset")
    const legend1 = document.createElement("legend")
    legend1.textContent="Informacion personal"
    const labelnom = document.createElement("label")
    labelnom.textContent="Nombre"
    formulario.appendChild(labelnom)
    const inputnom = document.createElement("input")
    inputnom.type="text"
    formulario.appendChild(inputnom)
    const labelcor = document.createElement("label")
    labelcor.textContent="Correo Electronico"
    formulario.appendChild(labelcor)
    const inputcor = document.createElement("input")
    inputcor.type="text"

    const fieldir =document.createElement("fieldset")
    const legend = document.createElement("legend")
    legend.textContent="Informacion direccion"

    const labeldir=document.createElement("label")
    labeldir.textContent="Direccion"
    const inputdir=document.createElement("input")
    inputdir.type="text"
    const labelciu=document.createElement("label")
    labelciu.textContent="Ciudad"
    const imputciu=document.createElement("input")
    imputciu.type="text"
    const espacio=document.createElement("br")
    


    fieldnom.appendChild(legend1)
    fieldnom.appendChild(labelnom)
    fieldnom.appendChild(inputnom)
    fieldnom.appendChild(labelcor)
    fieldnom.appendChild(inputcor)


    fieldir.appendChild(labeldir)
    fieldir.appendChild(legend)
    fieldir.appendChild(labeldir)
    fieldir.appendChild(inputdir)
    fieldir.appendChild(labelciu)
    fieldir.appendChild(imputciu)
    

    formulario.appendChild(fieldnom)
    formulario.appendChild(fieldir)

    const enviarButton = document.createElement("input");
    enviarButton.type = "submit";
    enviarButton.value = "Enviar";
    enviarButton.style.backgroundColor = "blue";
    enviarButton.style.color = "white";
    formulario.appendChild(enviarButton);
}




const loginform = document.getElementById("formulario")
        loginform.addEventListener("submit", evento =>{
            evento.preventDefault()
            let u = document.getElementById("user").value
            let p = document.getElementById("password").value
            // alert("usuario"+u+"contraseña"+p)
            alert(`usuario ${u} y contraseña ${p}`)
})