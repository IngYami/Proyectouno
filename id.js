//module.exports = persona;

/// cabecero ticket

let star = "⭐️";
let avion = "✈️";
let nube = "☁️";

function MapaAvion(){
    let MapaAvion = [
      ["E", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "E"],
      [2,0, 1,"BIENVENIDOS AEROLINEA CHARLIE".blue.bold,1,0,2, 2, 2,2,2 ,2, 2, 2,2,2,2,2,2,2],
      ["E", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "E"],
     
    ]
    
    for(let fila = 0 ; fila < MapaAvion.length ; fila++){
      let col = 0;
      for(; col < 28;col++){
         if(MapaAvion[fila][col] == "E"){
            MapaAvion[fila][col] = star;  
         }   
         if(MapaAvion[fila][col] == 0){
            MapaAvion[fila][col] = nube;  
         }   
         if(MapaAvion[fila][col] == 1){
            MapaAvion[fila][col] = avion;  
         }   
         if(MapaAvion[fila][col] == 2){
            MapaAvion[fila][col] = "";  
          }   
       }
     }
     for (let fila = 0 ; fila < MapaAvion.length ; fila++){
        console.log(MapaAvion[fila][0],MapaAvion[fila][1], MapaAvion[fila][2], MapaAvion[fila][3] , MapaAvion[fila][4], MapaAvion[fila][5],
          MapaAvion[fila][6], MapaAvion[fila][7],MapaAvion[fila][8], MapaAvion[fila][9],MapaAvion[fila][10],MapaAvion[fila][11], MapaAvion[fila][12],
          MapaAvion[fila][13], MapaAvion[fila][14],MapaAvion[fila][15],MapaAvion[fila][16], MapaAvion[fila][17], MapaAvion[fila][18],MapaAvion[fila][19]);
        }
    
    }


function salir(){
   personal.close();
}
// definicion

var colors = require('colors');
let = persona;
var readLineSync = require('readline-sync');
let nacionalidad = ['Espana','Argentina','Bolivia','Brasil','Chile','Colombia','Costa Rica','Cuba','Ecuador','El Salvador','Guayana Francesa','Granada','Guatemala','Guayana','Haiti','Honduras','Jamaica','Mexico','Nicaragua','Paraguay','Panama','Peru','Puerto Rico','Republica Dominicana','Surinam','Uruguay','Venezuela'];
let ocupacion = ['Estudiante', 'Arte', 'Negocios', 'Salud', 'Politica', 'tecnologia', 'Educacion', 'Comunicacion', 'Ingenieria', 'Alternativo', 'Desempleado','Otro'];
let motivoviaje =['Negocios', 'Turismo','Educacion','Trabajo','Reunion familiar', 'Otro'];
let estatusMig =['Ciudadano', 'Residente permanente', 'Asilado/refugiado', 'turista', 'investor', 'otro'];

// Obtener los datos

function persona(){

nombre = readLineSync.question('Por Favor, ingrese su nombre y apellido para iniciar: '.bold.blue);
console.clear();
console.log('Hola '.blue.bold + nombre .blue.bold+', a continuacion se le haran unas preguntas de informacion personal'.bold.blue);
var id = readLineSync.question('*Ingrese su numero de identificacion: '.bold.blue, salir);
var pass = readLineSync.question('*Numero de pasaporte: '.bold.blue, salir);
var naci = readLineSync.keyInSelect(nacionalidad, '*Indique nacionalidad: '.bold.blue, salir);
const ocu = readLineSync.keyInSelect(ocupacion, '*Seleccione la industria a la que se dedica: '.bold.blue, salir);
var mot = readLineSync.keyInSelect(motivoviaje,'*Indique su motivo de viaje: '.bold.blue, salir);
var mig = readLineSync.keyInSelect(estatusMig,'*Seleccione su estatus migratorio: '.bold.blue), salir;



// seleccion de las listas

let bandera = nacionalidad[naci];
let trab = ocupacion[ocu];
let via = motivoviaje[mot];
let imi = estatusMig[mig];

// retorno objeto

return {
   name: [nombre],
   Ced: [id],
   pasaporte: [pass],
   nacional: [bandera],
   trabajo: [trab],
   viaje: [via],
   migra: [imi],

}

}


MapaAvion();
//persona();

let personaExport = persona()
module.exports = personaExport;