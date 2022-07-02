// const lista = [2,3,5,7];

// lista.map(x=> x*x).forEach(x => console.log(x));

// let array = [...lista, 8]

class RandomColor {
  constructor(red, blue, green) {
      this.red= red;
      this.blue= blue;
      this.green = green;
  }

  getRandomColor(red, blue, green) {
      this.red = red;
      this.blue = blue;
      this.green = green;
      return this;
  }
}

module.exports = RandomColor;
