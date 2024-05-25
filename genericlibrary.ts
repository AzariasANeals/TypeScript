// Part 1 : Generic Identity Function
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("Hello");
console.log(output); //Output: hello

let output2 = identity<number>(1);
console.log(output2);

// Part 2: Generic Array Reversal Function
function reverseArray<T>(array: T[]): T[]{
    return array.reverse();
}

let numbers: number[] = [1,2,3,4,5];
let reversedNumbers: number[] = reverseArray(numbers);
console.log(reversedNumbers); // Output: [5,4,3,2,1]

// Part 3: Generic Object Mapper
// function mapObject<K, V, U>

//Part 4: Generic Filtering Function
/*function filterArray<T>(array: T[]): T[]{
    return 
}
*/

/*
function start(){
    return console.log(Car)
};

class Car {
    private engine: string;
    public color: string;

    constructor(engine: string, color: string){
        this.engine = engine;
        this.color = color;

    start() 
        console.log(`Started engine: ${this.engine}, Color: ${this.color}`);
        ;
    };
};
*/