//añadir al carro
const productos = []

const productoElegido1 = {
    nombre: "Remera",
    precio: 8000,
    categoria: "Deporte",
    marca: "ADADAS"
}

const remera = document.querySelector("#remera")

remera.onclick = ( infoDelEvento ) => {
    console.log(infoDelEvento.target.id)
    productos.push(productoElegido1)
    console.log(productos)
    document.querySelector(".container-mensaje").innerHTML = `
    <div class="container">
        <div>
            <span id="cerrar-notificacion">
                X
            </span>
        </div>
        <h2 class="mensaje">Tu producto ${productoElegido1.nombre} ha sido añadido al carrito. <h2>
    </div>
    `
    console.log(document.querySelector("#cerrar-notificacion"))
}

const productoElegido2 = {
    nombre: "buzo",
    precio: 10000,
    categoria: "Deporte",
    marca: "ADADAS"
}

const buzo = document.querySelector("#buzo")

buzo.onclick = ( infoDelEvento ) => {
    console.log(infoDelEvento.target.id)
    productos.push(productoElegido2)
    console.log(productos)
    document.querySelector(".container-mensaje").innerHTML = `
    <div class="container">
        <div>
            <span id="cerrar-notificacion">
                X
            </span>
        </div>
        <h2 class="mensaje">Tu producto ${productoElegido2.nombre} ha sido añadido al carrito. <h2>
    </div>
    `
    console.log(document.querySelector("#cerrar-notificacion"))
}

const productoElegido3 = {
    nombre: "gorra",
    precio: 3000,
    categoria: "headset",
    marca: "ADADAS"
}

const gorra = document.querySelector("#gorra")

gorra.onclick = ( infoDelEvento ) => {
    console.log(infoDelEvento.target.id)
    productos.push(productoElegido3)
    console.log(productos)
    document.querySelector(".container-mensaje").innerHTML = `
    <div class="container">
        <div>
            <span id="cerrar-notificacion">
                X
            </span>
        </div>
        <h2 class="mensaje">Tu producto ${productoElegido3.nombre} ha sido añadido al carrito. <h2>
    </div>
    `
    console.log(document.querySelector("#cerrar-notificacion"))
}

const productoElegido4 = {
    nombre: "llavero",
    precio: 2000,
    categoria: "chucheria",
    marca: "chiringolo"
}

const llavero = document.querySelector("#llavero")

llavero.onclick = ( infoDelEvento ) => {
    console.log(infoDelEvento.target.id)
    productos.push(productoElegido4)
    console.log(productos)
    document.querySelector(".container-mensaje").innerHTML = `
    <div class="container">
        <div>
            <span id="cerrar-notificacion">
                X
            </span>
        </div>
        <h2 class="mensaje">Tu producto ${productoElegido4.nombre} ha sido añadido al carrito. <h2>
    </div>
    `
    console.log(document.querySelector("#cerrar-notificacion"))
}

const productoElegido5 = {
    nombre: "campera",
    precio: 20000,
    categoria: "abrigo",
    marca: "ADADAS"
}

const campera = document.querySelector("#campera")

campera.onclick = ( infoDelEvento ) => {
    console.log(infoDelEvento.target.id)
    productos.push(productoElegido5)
    console.log(productos)
    document.querySelector(".container-mensaje").innerHTML = `
    <div class="container">
        <div>
            <span id="cerrar-notificacion">
                X
            </span>
        </div>
        <h2 class="mensaje">Tu producto ${productoElegido5.nombre} ha sido añadido al carrito. <h2>
    </div>
    `
    console.log(document.querySelector("#cerrar-notificacion"))
}

const productoElegido6 = {
    nombre: "vinilo",
    precio: 10000,
    categoria: "musica",
    marca: "ranger"
}

const vinilo = document.querySelector("#vinilo")

vinilo.onclick = ( infoDelEvento ) => {
    console.log(infoDelEvento.target.id)
    productos.push(productoElegido6)
    console.log(productos)
    document.querySelector(".container-mensaje").innerHTML = `
    <div class="container">
        <div>
            <span id="cerrar-notificacion">
                X
            </span>
        </div>
        <h2 class="mensaje">Tu producto ${productoElegido6.nombre} ha sido añadido al carrito. <h2>
    </div>
    `
    console.log(document.querySelector("#cerrar-notificacion"))
}




