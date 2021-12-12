const sum = (a: string, b: number) => {
    return a+b
}

console.log(sum('4', 6))

let val: boolean
val = true

let h: string[]


type Person = {
    name: string
    age: number
}

let person: Person

person = {
    name: '4',
    age: 21
}

// person = {
    // isEmployee: true
// }

let people: Person[]

// Type interface

let course = 'React'

// course = 1243


let course2: string | number | boolean = 'React'
course2 = 124

let hobbies: string[] 
hobbies = ['Sports', 'Cooking']

// Function & types

function add(a: number, b: number): number {
    return a + b
}

function printOutput(value: any): void {
    console.log(value)
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray
}

const demoArray = [1, 2, 4]

const updatedArray = insertAtBeginning(demoArray, -1) // [-1, 1, 2, 4]
const updatedArray1 = insertAtBeginning(['a', 'b'], 'd') // [-1, 1, 2, 4]

// updatedArray[0].split('')
updatedArray1[0].split('')

