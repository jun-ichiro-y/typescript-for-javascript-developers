export {};

let numbers:number[] = [1, 2, 3]

let numbers2: Array<number> = [1, 2, 3] //このようにも表現できる Arrayというのはインターフェイス

let strings2:Array<string> = ["tokyo", "osaka", "nagoya"]

// 演習
let strings: string[] = ["TypeScript", "JavaScript", "CoffeeScript"]
let nijigenHairetsu: number[][] = [ //二次元配列の型
  [50,100],
  [150,300]
]

let hairetsu: (string | number | boolean)[] = [1, false, "Japan"] //順番は気にしなくてOK unionTypes




