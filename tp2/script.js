// Ejercicio 1

// function verificarEdad() {
//   let edad = prompt("Por favor, ingresa tu edad:");
//   if (!isNaN(edad)) {
//     if (edad >= 18) {
//       alert("Ya puedes conducir.");
//     } else {
//       alert("Aún no puedes conducir.");
//     }
//   } else {
//     alert("Por favor, ingresa un número válido.");
//   }
// }

// verificarEdad();


// Ejercicio 2
// function calificarNota() {
//   let nota = prompt("Por favor, introduce una nota (número) de 0 a 10:");
//   if (!isNaN(nota) && nota >= 0 && nota <= 10) {
//     nota = Number(nota); 
//     if (nota >= 0 && nota <= 2) {
//       alert("Muy deficiente");
//     } else if (nota >= 3 && nota <= 4) {
//       alert("Insuficiente");
//     } else if (nota >= 5 && nota <= 6) {
//       alert("Suficiente");
//     } else if (nota == 7) {
//       alert("Bien");
//     } else if (nota >= 8 && nota <= 9) {
//       alert("Notable");
//     } else if (nota == 10) {
//       alert("Sobresaliente");
//     }
//   } else if (nota < 0 || nota > 10) {
//     alert("Número erróneo");
//   } else {
//     alert("Introduce un número válido");
//   }
// }

// calificarNota();


// Ejercicio 3

// function concatenarCadenas() {
//   let cadenas = [];
//   let cadena;

//   while (true) {
//     cadena = prompt("Introduce una cadena de texto:");
//     if (cadena === null) {
//       break;
//     }
//     cadenas.push(cadena);
//   }

//   alert(cadenas.join("-"));
// }

// concatenarCadenas();


// Ejercicio 4


// let suma = 0;

// while (true) {
//      let entrada = prompt("Introduce un numero o pulsa para cancelar");

//      if (entrada === null) {
//         alert(" La suma total es " + suma);
//         break;
//      }else if(isNaN(entrada)){
//         alert(" Eso no es un numero , por favor ingresa otro");        
//      }else{
//        suma += Number(entrada);
//      }
// }

// Ejercicio 5



// const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

// function calcularLetraDNI() {
//   let numeroDNI = prompt("Por favor, introduce tu número de DNI sin letra:");
//   while(numeroDNI !== null) {
//     if(!/^\d+$/.test(numeroDNI)) {
//       alert("Debes introducir un número válido.");
//     } else {
//       const numero = parseInt(numeroDNI);
//       if(numero >= 0 && numero <= 99999999) {
//         const letra = letrasDNI[numero % 23];
//         alert("La letra de tu DNI es: " + letra);
//       } else {
//         alert("El número proporcionado debe estar entre 0 y 99999999.");
//       }
//     }
//     numeroDNI = prompt("Por favor, introduce tu número de DNI sin letra:");
//   }
// }


// calcularLetraDNI();




// Ejercicio 6


// function generarPiramide() {
  
//    for (let i = 0; i < 30; i++) {
//       let piso = "";
//         for (let j = 0; j < i ; j++) {
//             piso+= 1;
          
//         }
     
//         console.log(piso);
//    }
// }

// generarPiramide();


// Ejercicio 7

// function generarPiramideInversa() {
//   let numeroMaximo = prompt("Introduce el número máximo para la pirámide (no mayor de 50):");
//   numeroMaximo = parseInt(numeroMaximo);

//   if(numeroMaximo && numeroMaximo > 0 && numeroMaximo <= 50) {
//     for(let i = numeroMaximo; i >= 1; i--) {
//       let piso = '';
//       for(let j = 0; j < i; j++) {
//         piso += i;
//       }
//       console.log(piso);
//     }
//   } else {
//     alert("Debes introducir un número válido entre 1 y 50.");
//   }
// }

// generarPiramideInversa();



// Ejercicio 8

// function generarPiramideNumerica() {
//   let numeroMaximo = prompt("Introduce el número máximo para la pirámide (no mayor de 50):");
//   numeroMaximo = parseInt(numeroMaximo);

//   if(numeroMaximo && numeroMaximo > 0 && numeroMaximo <= 50) {
//     for(let i = 1; i <= numeroMaximo; i++) {
//       let piso = '';
//       for(let j = 1; j <= i; j++) {
//         piso += j;
//       }
//       console.log(piso);
//     }
//   } else {
//     alert("Debes introducir un número válido entre 1 y 50.");
//   }
// }

// generarPiramideNumerica();




// Ejercicio 9

function listarMultiplos() {
  for (let i = 1; i <= 500; i++) {
    let texto = i;
    if (i % 4 === 0) texto += ' (Múltiplo de 4)';
    if (i % 9 === 0) texto += ' (Múltiplo de 9)';
    console.log(texto);
    if (i % 5 === 0) console.log('----------------------------------------');
  }
}

listarMultiplos();


// Ejercicio 10



// Ejercicio 11


// function encontrarMayor() {
//   let nombres = [];
//   let edades = [];
//   let edadMayor = 0;
//   let nombreMayor = "";

//   for (let  i =  0 ; i  < 3 ; i++) {
//     let nombre = prompt(`introduce el nombre de la persona ${i + 1}`);
//     let edad = parseInt(prompt(`Introduce la edad de ${nombre}:`));

//     nombres.push();
//     edades.push();

//     if (edad > edadMayor) {
//         edadMayor = edad;
//         nombreMayor = nombre;
//     }

//   }

//   alert(`La persona es mayor ${nombreMayor} con ${edadMayor}`);
// }

// encontrarMayor();


// Ejercicio 12

// function generarNumeroAleatorio() {
//     const numero = Math.floor(Math.random()* 99) + 1;
//     console.log("Numero aleatorio generado" + numero);
// }

// generarNumeroAleatorio();

// Ejercicio 13

// function mostrarTextoenMayusculas() {
//     let texto = prompt("Ingresa un Texto");
//     if (texto) {
//        alert("El texto en mayusculas es " + texto.toUpperCase());
//     }
// }

// mostrarTextoenMayusculas();

// Ejercicio 14

// function mostrarTextoConGuiones() {
//     let texto = prompt("Ingrese una cadena de texto  ");
//     let textoConGuiones = "";


//     for (let i = 0;  i < texto.length ; i++) {
//         textoConGuiones += texto[i];
      
//         if (i < texto.length -1) {
//              textoConGuiones += "-";
//         }
//     }
//     alert("El texto modificado es" + textoConGuiones);
// }

// mostrarTextoConGuiones();


// Ejercicio 15


function contarVocales(texto) {
  const vocales = 'aeiouAEIOU';
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      contador++;
    }
  }

  return contador;
}

// Ejemplo de uso:
let textoUsuario = prompt("Introduce un texto:");
let numeroDeVocales = contarVocales(textoUsuario);
alert("El número de vocales en el texto es: " + numeroDeVocales);




// Ejercicio 16

function invertirTexto() {
  let texto = prompt("Introduce una cadena de texto:");
  let textoInvertido = '';

  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
  }

  alert("El texto al revés es: " + textoInvertido);
}

invertirTexto();




// Ejercicio 17



function encontrarPrimeraVocal() {
  let texto = prompt("Introduce un texto:");
  const vocales = 'aeiouAEIOU';
  let posicion = -1;

  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      posicion = i;
      break;
    }
  }

  if (posicion !== -1) {
    alert("La primera vocal está en la posición: " + (posicion + 1));
  } else {
    alert("No se encontraron vocales en el texto.");
  }
}

encontrarPrimeraVocal();
