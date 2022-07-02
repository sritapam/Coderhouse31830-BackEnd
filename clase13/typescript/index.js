var lista = [2, 3, 5, 7];
lista.map(function (x) { return x * x; }).forEach(function (x) { return console.log(x); });
var getNum0a256 = function () { return Math.floor(Math.random() * 256); };
var Color1 = /** @class */ (function () {
    function Color1() {
    }
    Color1.prototype.get = function () {
        var color = "rgb(".concat(getNum0a256(), ",").concat(getNum0a256(), ",").concat(getNum0a256(), ")");
        return color;
    };
    return Color1;
}());
var color1 = new Color1();
var color2 = new Color1();
console.log(color1.get());
