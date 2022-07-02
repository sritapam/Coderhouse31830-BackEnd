const lista:Array<number> = [2,3,5,7];

lista.map((x: number)=> x*x).forEach((x: number)=> console.log(x));

const getNum0a256 = ():number => Math.floor(Math.random() * 256)

class Color1 {
    get() : string {
        const color: string = `rgb(${getNum0a256()},${getNum0a256()},${getNum0a256()})`
        return color
    }
}

const color1: Color1 = new Color1()

console.log(color1.get())