// OPERADORES AVANZADOS ||

const usuario1 = {
  nombre: "LEANDRO",
  edad: 27,
}
console.log (usuario1 || "No hay datos del usuario");

//


let nombre = document.querySelector("#nombre");
let correo = document.querySelector("#correo");

nombre.addEventListener("input", function (e) {
  e.preventDefault();
});

correo.addEventListener("input", function (e) {
  e.preventDefault();
});

let informacion = document.querySelector(".informacion");

let datos = JSON.parse(localStorage.getItem("mensaje")) || []

const mensaje = informacion.addEventListener("submit", function (e) {
  e.preventDefault(); 



  const nombreAJson = JSON.stringify(nombre.value);
  const correoAJson = JSON.stringify(correo.value);
  localStorage.setItem("nombre", nombreAJson);
  localStorage.setItem("correo", correoAJson);
  const nombreAJson2 = localStorage.getItem ("nombre.value")
  const correoAJson2 = localStorage.getItem ("correo.value")
  
  informacionUsuario.innerHTML = `
  <div> <h5> ${nombre.value}, te informamos que se concreto con exito tu compra, estaremos enviando mas informacion al ${correo.value} para terminar la compra </h5> </div>
  `;
  
  // ASINCRONIA
  setTimeout(() => {
    console.log ("Proceso finalizado")
  }, 3000);
  //
});

let informacionUsuario = document.querySelector(".informacionUsuario");


// LIBRERIA SWEET ALERT

const enviarinfo = document.querySelector (".enviar")
enviarinfo.addEventListener("click", function () {
  Swal.fire({
    position: 'top-up',
    icon: 'success',
    title: 'Se ha enviado con exito',
    showConfirmButton: false,
    timer: 950
  })
}
)

//

let articulosCarrito = [];

const boton = document.querySelectorAll(".boton");
boton.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    productos(e.target.parentElement);
  });
});


function productos(producto) {
  const infoProducto = {
    titulo: producto.querySelector(".boton-title").textContent,
  };
  articulosCarrito = [...articulosCarrito, infoProducto];
  carritoHTML();
}


const carrito = document.querySelector("#carrito");

function carritoHTML() {
  limpiarHTML();
  articulosCarrito.forEach((producto) => {
    const row = document.createElement("p");
    row.innerHTML = `
    <div class="container">
    <h5> ${producto.titulo}</h5>
    </div>
    `;
    carrito.appendChild(row);
    vaciar ();
  });
}



function limpiarHTML() {
  carrito.innerHTML = "";
}



const vaciar = () => {
const vaciarCarrito = document.querySelector(".vaciarCarrito");
vaciarCarrito.addEventListener ("click", () => {
carrito.innerHTML = "";
});
};

// PROMESAS

const aplicarDescuento =  new Promise((resolve, reject) => {
  const descuento = true
  if (descuento) {
    resolve ("Descuento aplicado")
  }
   else {
    reject ("No se pudo aplicar el descuento")
   }
})
console.log(aplicarDescuento);

//

// AJAX JSON API

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  //




