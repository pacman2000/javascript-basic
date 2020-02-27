/*Exercici 1:
L'exercici consisteix a crear un fitxer anomenat ciber.html i mostrar per consola un 'Hola mundo' */
console.log("Hola mundo!!!");


//Exercici 2: Crea un alert que mostri el teu nom
alert("Me llamo Amparo");


/* Exercici 3:
Crea una variable que contingui el teu nom i un altre que contingui el teu cognom. */
var firstName = "Amparo";
var lastName = "Garcia";
document.write("<h3>Ejercicio 3: nombre amb variables</h3> Mi nombre es " + firstName + " " + lastName);

document.write("<br>");
/* Exercici 4:
Crea dos variables amb dos números i fes una suma entre ells. */
var n1 = 15;
var n2 = 18;
var sum = n1 + n2;
document.write("<h3>Ejercicio 4: suma amb variables</h3> La suma de " + n1 + " + " + n2 + " es igual a " + sum);


/*  Exercici 5:
Crea una variable nota_examen juntament amb un alert que ens digui si l’examen ha estat aprovat o no juntament amb la nota. */
function resultadoExamen(){  
  var examNote = document.getElementById("nota").value;

  if(examNote >=5){
      alert("Felicidades! Has aprobado con un " + examNote);
  }else{
      alert("Lo siento! Has suspendido con un " + examNote);
  }
}


/*  Exercici 6:
Reemplaça la paraula blau per la paraula verd a la següent cadena de text Tinc un cotxe de color blau.
Després intenta fer-ho remplaçant les o per les u */

function changeColor(){  
  var carString = document.getElementById("cotxe").innerHTML;
  var greenCar = carString.replace("blau","verd"); 
  document.getElementById("color").innerHTML = greenCar;
}

function changeLetter(){ 
  var carString = document.getElementById("cotxe").innerHTML;
  carString = carString.replace(/o/gi,"u");
  document.getElementById("lletra").innerHTML = carString;  
}

                    /* Sintaxis del métode REPLACE:       var carString = carString.replace(/u/gi, "*");
                    /o/ hem d'indicar la lletra/valor que volem canviar en mig de //
                    g significa  global. Per que canviï totes les lletres com la de l'exemple (o)
                    i indica "insensitive" per no distingir MAY o MIN. Es opcional
                    "u" el segon parámetre es el nou valor que volem. Entre " " */


/*  Exercici 7:
Donat el seguit llistat d’objectes ‘taula’, ‘cadira’, ‘ordinador’, ‘libreta’, per un bucle que mostri per pantalla cada objecte i la save posició al llistat. */

var obj = ["taula", "cadira", "ordinador", "llibreta"];

function llistarObjectes(){ 
  for (var i = 0; i < obj.length; i++) {
    var objeto = obj[i];
    document.getElementById("llistaObjectes").innerHTML += "L'objecte " + objeto + " està a la posició " + [i] + "<br/>";    
  } 
}


/*  Exercici 8:
Crea una funció anomenada calculadora que tingui com a entrada els següents paràmetres: operador, valor1 i valor2.
Estructura de la funció que faci sumes, restes i multiplicacions. El resultat haurà de ser mostrar per pantalla. */

function calcularOperacion(){
    var result;
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    var operador = document.getElementById("op").value;

    switch (operador){
      case "+":
        result = valor1 + valor2;
        break;
      case "-":
        result = valor1 - valor2;
        break;
      case "*":
        result = valor1 * valor2;
        break;
      case "/":
        result = valor1 / valor2;
        break;
      default:
        result = "NO VÀLID";
        break;
    }
    document.getElementById("resultadoCalculadora").innerHTML = "Resultat de " + valor1 + " " + operador + " " + valor2 + " es igual a " + result;
}
