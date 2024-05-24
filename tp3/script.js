
// Ejercicio 1

// let ciudades = [];
// function solicitarCiudades() {
//   let ciudad;
//   while (ciudad = prompt("Introduce el nombre de una ciudad:")) {
//     ciudades.push(ciudad);
//   }
// }


// function mostrarInformacion() {
  
//   console.log("Arreglo generado: ", ciudades);
  
  
//   console.log("Longitud del arreglo: ", ciudades.length);
  
  
//   document.body.innerHTML += "<p>Primera ciudad: " + ciudades[0] + "</p>";
//   document.body.innerHTML += "<p>Tercera ciudad: " + ciudades[2] + "</p>";
//   document.body.innerHTML += "<p>Última ciudad: " + ciudades[ciudades.length - 1] + "</p>";
  
  
//   ciudades.push('París');
//   console.log("Se añadió París en la última posición.");
  
//   console.log("Elemento en la segunda posición: ", ciudades[1]);
  
  
//   ciudades[1] = 'Barcelona';
//   console.log("Se ha sustituido la segunda posición por Barcelona.");
// }

// solicitarCiudades();
// mostrarInformacion();


// Ejercicio 2
// function lanzarDados() {
//   let frecuencias = new Array(12).fill(0); 
//   for (let i = 0; i < 50; i++) {
//     let dado1 = Math.floor(Math.random() * 6) + 1;
//     let dado2 = Math.floor(Math.random() * 6) + 1; 
//     let suma = dado1 + dado2;
//     frecuencias[suma - 2]++;
//   }
//   return frecuencias;
// }

// let resultado = lanzarDados();
// console.log(resultado);

// Ejercicio 3

// function parOImpar(numero) {
//     if (numero % 2 === 0) {
//         return "El Numero es Par";
//     }else{
//         return "El numero es Impar";
//     }
// }


// console.log(parOImpar(3));
// console.log(parOImpar(4));


// Ejercicio 4

// function analizarCadenas(texto) {
//       if (texto ==  texto.toUpperCase()) {
//          return "El texto esta con mayuscula";
//       }else if(texto == texto.toLowerCase()){
//          return "El texto esta en minusculas";
//       }else{
//             return "La cadena esta formada por mayusculas y minusculas";
//       }

// }


// console.log(analizarCadenas("VAMOS RIVER"));
// console.log(analizarCadenas("vamos RIVER"));
// console.log(analizarCadenas("vamos los deca"));


// Ejercicio 6

// function calcularPerimetro() {
//      let ladoA = prompt("Por favor , ingresa un numero para calcular el lado A");
//      let ladoB = prompt("Por favor , ingresa un numero para calcular el lado B");



// ladoA = parseFloat(ladoA);
// ladoB = parseFloat(ladoB);

// if (!isNaN(ladoA) && !isNaN(ladoB)) {
//     let perimetro = 2 * (ladoA + ladoB);
//     alert("El perimetro del lado A" + perimetro);
// }else{
//      alert("Por favor ingresa valores numericos");
// }


// }

// calcularPerimetro();


