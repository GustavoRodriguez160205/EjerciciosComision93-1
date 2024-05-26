// Ejercicio 1
let auto={
  color:'Rojo',
  marca:'Toyota',
  modelo:'Etios',
  motor:false,
  encenderAuto(){
      this.motor=true;
  },

  apagarAuto(){
      this.motor=false;
  }
}

console.log('Color: '+auto.color);
console.log('Marca: '+auto.marca);
console.log('Modelo: '+auto.modelo);
console.log('Estado del auto: '+((auto.motor)?'Encendido':'Apagado'));

// encender el auto
auto.encenderAuto();
console.log('Estado del auto: '+((auto.motor)?'Encendido':'Apagado'));

// apago el auto
auto.apagarAuto();
console.log('Estado del auto: '+((auto.motor)?'Encendido':'Apagado'));



// Ejercicio 2


// class Cuenta{
//   constructor(titular){
//       this.titular=titular
//       this.saldo=0;
//   }

//   ingresar(monto){
//       this.saldo+=monto;
//       document.write(`<p>Ingreso $${monto}</p>`);
//   }

//   extraer(monto){
//       if(this.saldo >= monto){
//           this.saldo-=monto;
//           document.write(`<p>Extraccion de $${this.saldo}</p>`);
//       }else{
//           document.write('<br>Fondos insuficientes');
//       }
//   }

//   informar(){
//       document.write(`<p>La cuenta de ${this.titular}, posee un saldo de $${this.saldo}</p>`);
//   }
// }

// let cuenta= new Cuenta('Alex');
// cuenta.informar();
// cuenta.ingresar(10000);
// cuenta.informar();
// cuenta.extraer(5000);
// cuenta.informar();

// Ejercicio 3
class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    mostrarDetalle() {
      return document.write(`<ul>
              <li>Codigo: ${this.codigo}</li>
              <li>Producto: ${this.nombre}</li>
              <li>Precio: $${this.precio}</li>
          </ul>`);
    }
  }
  
  let Productos = [];
  
  let leche = new Producto("LS245", "Leche de almendras silk", 400);
  let chocolate = new Producto("AB213", "Block 300gr", 350);
  let galleta = new Producto("GS223", "Granix sin sal", 160);
  
  Productos.push(leche);
  Productos.push(chocolate);
  Productos.push(galleta);
  
  for (let i = 0; i < Productos.length; i++) {
   Productos[i].mostrarDetalle();
  }
  





// Ejercicio 5

// class Persona {
//     constructor(nombre, edad, sexo, peso, altura, fechaNacimiento) {
//       this.nombre = nombre;
//       this.edad = edad;
//       this.dni = this.generaDNI();
//       this.sexo = sexo;
//       this.peso = peso;
//       this.altura = altura;
//       this.fechaNacimiento = fechaNacimiento;
//     }
  
//     mostrarDetalleGeneracion(generacion, marcoTemporal, historia, rasgo) {
//       return `<ul>
//       <li> Generación: ${generacion}</li>
//       <li> Marco temporal:  ${marcoTemporal} </li>
//       <li> Circunstancia histórica:  ${historia}</li>
//       <li> Rasgo característico: ${rasgo} </li>
//     </ul>
//     `;
//     }
//     mostrarGeneracion() {
//       if (this.fechaNacimiento >= 1930 && this.fechaNacimiento <= 1948) {
//         return this.mostrarDetalleGeneracion(
//           "Silent Generation",
//           "1930-1948",
//           "Conflictos bélicos",
//           "Austeridad 😐"
//         );
//       } else if (this.fechaNacimiento >= 1949 && this.fechaNacimiento <= 1968) {
//         return this.mostrarDetalleGeneracion(
//           "baby Boom",
//           "1949-1968",
//           "Paz y explosión demográfica",
//           "Ambicion 🤑"
//         );
//       } else if (this.fechaNacimiento >= 1969 && this.fechaNacimiento < 1980) {
//         return this.mostrarDetalleGeneracion(
//           "Generación X",
//           "1969 - 1980",
//           "Crisis del 73 y transición española",
//           "Obsesión por el exito 😎"
//         );
//       } else if (this.fechaNacimiento >= 1981 && this.fechaNacimiento < 1993) {
//         return this.mostrarDetalleGeneracion(
//           "Generación Y (Millenials)",
//           "1981 - 1993",
//           "Inicio de la digitalización",
//           "Frustración 😕"
//         );
//       } else if (this.fechaNacimiento >= 1994 && this.fechaNacimiento < 2010) {
//         return this.mostrarDetalleGeneracion(
//           "Generación Z (Centennials)",
//           "1994 - 2010",
//           "Expansión masiva de internet",
//           "Irreverencia 😋"
//         );
//       } else if (this.fechaNacimiento >= 2011) {
//         return this.mostrarDetalleGeneracion(
//           "Generación Alfa",
//           "2011 - Actualidad",
//           "Nativos Digitales al 100%",
//           "Son predilectos 😜"
//         );
//       } else {
//         return '<p>No se posee datos para la fecha seleccionada</p>';
//       }
//     }
  
//     esMayorDeEdad() {
//       if (this.edad >= 21) {
//         return true;
//       } else {
//         return false;
//       }
//     }
  
//     mostrarDatos() {
//       return `<ul>
//         <li>Persona</li>
//         <li>Nombre: ${this.nombre}</li>
//         <li>Edad: ${this.edad}</li>
//         <li>DNI: ${this.dni}</li>
//         <li>Genero: ${this.sexo}</li>
//         <li>Peso: ${this.peso} Kg</li>
//         <li>Altura: ${this.altura} Cm</li>
//         <li>Año de nacimiento: ${this.fechaNacimiento}</li>
//         </ul>
//         `;
//     }
  
//     generaDNI() {
//       return parseInt(Math.random() * 99999999);
//     }
//   }
  
//   let nombre = prompt("Ingrese un nombre");
//   let edad = prompt("Ingrese una edad");
//   let genero = prompt("Ingrese un genero : H(hombre), M(Mujer)");
//   let peso = prompt("Ingrese un peso en kg");
//   let altura = prompt("Ingrese una altura cm");
//   let anioNac = prompt("Ingrese el año de nacimiento");
//   let personaNueva = new Persona(nombre, edad, genero, peso, altura, anioNac);
  
//   document.write(personaNueva.mostrarDatos());
//   document.write(
//     `<p>La persona es mayor de edad: ${
//       personaNueva.esMayorDeEdad ? "Si" : "No"
//     }</p>`
//   );
//   document.write(personaNueva.mostrarGeneracion());

// Ejercicio 6

// class Libro {
//     constructor(isbn, titulo, autor, cantPaginas) {
//       this.isbn = isbn;
//       this.titulo = titulo;
//       this.autor = autor;
//       this.cantPaginas = cantPaginas;
//     }
  
//     set cambiarTitulo(tituloNuevo) {
//       this.titulo = tituloNuevo;
//     }
  
//     set cambiarIsbn(isbnNuevo) {
//       this.isbn = isbnNuevo;
//     }
  
//     set cambiarAutor(autorNuevo) {
//       this.autor = autorNuevo;
//     }
  
//     set cambiarCantPaginas(cantPaginasNuevo) {
//       this.cantPaginas = cantPaginasNuevo;
//     }
  
//     get mostrarIsbn() {
//       return this.isbn;
//     }
  
//     get mostrarTitulo() {
//       return this.titulo;
//     }
  
//     get mostrarAutor() {
//       return this.autor;
//     }
  
//     get mostrarCantPaginas() {
//       return parseInt(this.cantPaginas);
//     }
  
//     mostrarLibro() {
//       return `<p>El libro ${this.mostrarTitulo}, con ISBN N° ${this.mostrarIsbn}, creado por el autor ${this.mostrarAutor}, tiene ${this.mostrarCantPaginas} paginas.</p>`;
//     }
//   }
  
//   function compararLibros(libro1, libro2) {
//     if (libro1.mostrarCantPaginas > libro2.mostrarCantPaginas) {
//       return `<p>El libro ${libro1.mostrarTitulo} tiene mas paginas</p>`;
//     } else if (libro1.mostrarCantPaginas == libro2.mostrarCantPaginas) {
//       return `<p>El libro ${libro1.mostrarTitulo} y el libro ${libro2.mostrarTitulo}, tienen la misma cantidad de paginas</p>`;
//     } else {
//       return `<p>El libro ${libro2.mostrarTitulo} tiene mas paginas</p>`;
//     }
//   }
  
//   let theLordOfTheRings = new Libro(9788445003022,"El señor de los anillos","J.R.R. Tolkien",1392
//   );
//   let HarryPotter = new Libro(108478885196, "Harry Potter y el Prisionero de Azkaban", "Rowling, J.K.", 360);
  
//   document.write(theLordOfTheRings.mostrarLibro());
//   document.write(HarryPotter.mostrarLibro());
//   document.write(compararLibros(theLordOfTheRings, HarryPotter));


//   Ejercicio 7

class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  
    mostrarDatos() {
      document.write(`Nombre: ${this.nombre} Telefono: ${this.telefono}`);
    }
  
    get obtenerNombre() {
      return this.nombre;
    }
    get obtenerTelefono() {
      return this.telefono;
    }
  
    set modificarNombre(nuevoNombre) {
      this.nombre = nuevoNombre;
    }
    set modificarTelefono(nuevotelefono) {
      this.telefono = nuevotelefono;
    }
  }
  
  class Agenda {
    constructor(tamanio) {
      this.contactos = [];
      this.tamanio = tamanio;
    }
  
    set modificarTamanio(cantidad) {
      this.tamanio = cantidad;
    }
  
    agregarContacto(contacto) {
      // verificar si el contacto existe
      if (this.existeContacto(contacto)) {
        console.log("El contacto ya existe no se puede agregar");
      } else {
        // verificar si la agenda esta llena
        if (!this.agendaLlena()) {
          this.contactos.push(contacto);
          console.log("contacto añadido");
          this.listarContactos();
        }
      }
    }
  
    existeContacto(contacto) {
      const exist = this.contactos.find(
        (contactoExistente) => contactoExistente.nombre === contacto.nombre
      );
        if (exist) {
        console.log("El contacto existe");
        return true;
      } else {
        console.log("El contacto no existe");
        return false;
      }
    }
  
    listarContactos() {
      for (let i = 0; i < this.contactos.length; i++) {
        console.log(
          `Contacto: ${this.contactos[i].obtenerNombre} - Telefono: ${this.contactos[i].obtenerTelefono}`
        );
      }
    }
  
    buscarContacto(contacto) {
      const encontrado = this.contactos.find(
        (existentes) => existentes.nombre === contacto
      );
      if (encontrado) {
        console.log(`contacto encontrado, Telefono: ${contacto.telefono}`);
      } else {
        console.log("Este contacto no existe");
      }
    }
  
    eliminarContacto(contacto) {
      let contactosFiltrados = this.contactos.filter(
        (contactoExistente) => contactoExistente.nombre != contacto
      );
      this.contactos = contactosFiltrados;
      console.log("contactos almacenados en la agenda" + this.contactos);
    }
  
    agendaLlena() {
      if (this.contactos.length === this.tamanio) {
        console.log("agenda llena");
        return true;
      } else {
        console.log("queda espacio");
        return false;
      }
    }
  
    huecosLibres() {
      let cantidadEspacios = this.tamanio - this.contactos.length;
      if (cantidadEspacios > 0)
        console.log("Cantidad de espacio disponible " + cantidadEspacios);
      else console.log("La agenda no tiene espacios libres");
    }
  }
  
  let agendaPrueba = new Agenda(10);
  
  do {
    let opcion = parseInt(
      prompt(
        `Seleccione una opcion: 
        1- agregar contacto,
        2- consulta si existe un contacto,
        3- listar contactos, 
        4- buscar contacto, 
        5- eliminar contacto
        6- consulta si la agenda esta llena
        7- consultar si la agenda tiene huecos libres
        8- cambiar el tamaño de la agenda`
      )
    );
  
    switch (opcion) {
      case 1:
        agendaPrueba.huecosLibres();
  
        let nombre = prompt("ingrese un nombre");
        let telefono = prompt("ingrese un telefono");
        let nuevoContacto = new Contacto(nombre, telefono);
  
        agendaPrueba.agregarContacto(nuevoContacto);
        break;
      case 2:
        let nombreBuscado = prompt("ingrese un nombre");
        let contacto = new Contacto(nombreBuscado, 0);
        agendaPrueba.existeContacto(contacto);
  
      case 3:
        // listar contactos
        agendaPrueba.listarContactos();
        break;
      case 4:
        // buscar contacto
        let contactoBuscado = prompt("ingrese el nombre que busca");
        agendaPrueba.buscarContacto(contactoBuscado);
        break;
      case 5:
        // Eliminar contacto
        let contactoParaEliminar = prompt("ingrese el nombre que desea eliminar");
        agendaPrueba.eliminarContacto(contactoParaEliminar);
        break;
      case 6:
        // Agenda llena
        agendaPrueba.agendaLlena();
        break;
      case 7:
        // huecos llena
        agendaPrueba.huecosLibres();
        break;
      case 8:
        // cambiar tamaño
        let nuevoTamanio = parseInt(
          prompt("ingrese la cantidad de contactos que desea tener")
        );
        agendaPrueba.modificarTamanio = nuevoTamanio;
        console.log(
          "Tamaño de agenda modificado, cantidad actual: " + nuevoTamanio
        );
        break;
      default:
        document.write("Ingreso una opcion invalida");
    }
  } while (confirm("quiere realizar otra operacion?"));