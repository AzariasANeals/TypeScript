/* Part 1 : Generic Identity Function
This is a simple identity function that takes an argument
of type T and returns a value of type T.

The outputs below for output and output 2 are 

Hello
1
*/

function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("Hello");
console.log(output); //Output: Hello

let output2 = identity<number>(1);
console.log(output2); // Output: 1

/* Part 2: Generic Array Reversal Function
This is a simple function that takes in an array of elements
and returns the array with the elements in reverse order

The output for the reverseArray is [5,4,3,2,1]
*/
function reverseArray<T>(array: T[]): T[]{
    return array.reverse();
}

let numbers: number[] = [1,2,3,4,5];
let reversedNumbers: number[] = reverseArray(numbers);
console.log(reversedNumbers); // Output: [5,4,3,2,1]



/* Part 3: Generic Object Mapper
This function is taking a class numeric object and returning a 
class alpha object with the same value for the key. 

Output is:
Original class value for key 14 is 23
Value in new class object for key 14 is 23
*/
interface Mapper<T>{
    getItem(key: string): T;
    setItem(key: string, item: T): void;
}

class numeric implements Mapper<number>{
    private value: {[key: string]: number} = {};
    getItem(key: string): number{
        return this.value[key];
    }
    setItem(key: string, item: number): void {
        this.value[key] = item;
    }
}

class alpha implements Mapper<string>{
    private value: {[key: string]: string} = {};
    getItem(key: string): string{
        return this.value[key];
    }
    setItem(key: string, item: string): void {
        this.value[key] = item;
    }
}



function mapObject<V, U>(key: string, value: Mapper<V>, newValue: Mapper<U>): Mapper<U> {
    let buf: Mapper<U> = newValue ;
    let retrieved: V = value.getItem(key);
    buf.setItem(key, retrieved as undefined as U);
    newValue = buf;
    return newValue;
}

let key: string = "14";
let k: numeric = new numeric();
let v: alpha = new alpha();

k.setItem(key, 23);
let nv = mapObject(key, k, v);
console.log(`Original class value for key ${key} is ${v.getItem(key)}`);
console.log(`Value in new class object for key ${key} is ${nv.getItem(key)}`);


/*Part 4: Generic Filtering Function
This function takes in an array of elements and will
divide the array by 2 and will only return those who have a remainder of 0.
*/
let numberOne = [1,2,3,4,5,6];

function filterArray<T>(array: T[]){
    let newFilter = array.filter((x) => x as number % 2 ===0);
    console.log(newFilter)
}
filterArray(numberOne);

// Output: [2, 4, 6]