const biblioteca = [];

function Libro(libro, autor) {
   this.libro = libro;
   this.autor = autor;
   this.id = crypto.randomUUID();
}

function aniadirLibro(libro, autor) {
   const nuevoLibro = new Libro(libro, autor)
   biblioteca.push(nuevoLibro);
}

//Insercion de libros
aniadirLibro("El Hobbit", "Tolkien", 1)
aniadirLibro("El dragon rojo", "Thomas Harris", 2)


//Creacion botones abrir/cerrar
var dialogo = document.querySelector(".dialogo")
var btnAbrir = document.querySelector("#abrir")
var btnCrear = document.querySelector("#cerrar")
btnAbrir.addEventListener("click", function () {
   dialogo.showModal();
});

//Obtener datos del formulario
btnCrear.addEventListener("click", function (event) {
   var nombre = document.querySelector("#libro").value
   var autor = document.querySelector("#autor").value
   if (nombre == "" || autor == "") {
      console.log("Ingresa los campos necesarios");
      
   }else{
      event.preventDefault();

      aniadirLibro(nombre, autor)
      //Antes de cerrar la ventana
      //Se crea otro div cartaLibro
      crearCartaLibro(nombre, autor);

      document.querySelector("#libro").value = ""
      document.querySelector("#autor").value = ""

      //Cerrar ventana
      dialogo.close();
   }

});


//Crear el contenedor para los libros
const container = document.createElement("div")
container.class = "container";

//Lo hacemos grid
container.style.display = "grid";
container.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr";
container.style.gap = "35px";

//Insertar el contenedor en el body
const body = document.querySelector("body")
body.appendChild(container)


//Le agregamos unos div dependiendo de los elementos en biblioteca
function crearCartaLibro(libro, autor){
   const cartaLibro = document.createElement("div")
   cartaLibro.class = "cartaLibro"
   cartaLibro.style.width = "100%"
   cartaLibro.style.height = "200px"
   cartaLibro.style.backgroundColor = "white";

   console.log(libro);
   console.log(autor);

   //Agregarlos al dom
   const libroLibro = document.createElement("h3")
   libroLibro.textContent = libro;

   const autorLibro = document.createElement("p")
   autorLibro.textContent = autor 

   //Aqui añadir los textos
   cartaLibro.appendChild(libroLibro)
   cartaLibro.appendChild(autorLibro)

   container.appendChild(cartaLibro)
}

biblioteca.forEach(libro => {
   return crearCartaLibro(libro.libro, libro.autor)
})
