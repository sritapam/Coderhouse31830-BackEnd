export default class Dado {
  constructor() {
    this.tirar();
  }

  
  tirar() {
    this._valor = Math.floor(Math.random() * 6) + 1;
  }

  get valor() {
    return this._valor;
  }
}
