//Importación de Impuestos

import Impuesto from "./impuestos";

class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
  //Método para calcular impuestos
  calcularImpuesto() {
    const { montoBrutoAnual, deducciones } = this._impuesto;
    return (montoBrutoAnual - deducciones) * 0.21;
  }

//   Método sobre los montos a pagar 
  presentacion() {
    return `${this._nombre} con un Monto Bruto Anual: ${
      this._impuesto.montoBrutoAnual
    } y una deducción: ${
      this._impuesto.deducciones
    }. Debe cancelar de impuestos: ${this.calcularImpuesto()}`;
  }
}

export default Cliente;
