//Importación de Clientes

import Cliente from "./clientes";

// Nuevas Instancias

let cliente1 = new Cliente("Diego" ,{montoBrutoAnual: 100000, deducciones: 20000});
let cliente2 = new Cliente("Martín" ,{montoBrutoAnual: 450000, deducciones: 120000});
let cliente3 = new Cliente("Lucía" ,{montoBrutoAnual: 320000, deducciones: 60000});



console.log(cliente1.presentacion());
console.log(cliente2.presentacion());
console.log(cliente3.presentacion());
