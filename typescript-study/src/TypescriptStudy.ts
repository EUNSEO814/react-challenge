// const nico ={
//     nickname:"nick"
// }

// nico.hello()
// Error:
// Property 'hello' does not exist on type '{ nickname: string; }'.

// [1,2,3,4] + false
// Error:
// Operator '+' cannot be applied to types 'number[]' and 'boolean'.

// function divide(a,b){
//     return a/b
// }

// Error:
// Parameter 'a' implicitly has an 'any' type.
// Parameter 'b' implicitly has an 'any' type.

// divide("hello")
// Error:
// Expected 2 arguments, but got 0.

// const player={
//     age:12
// }

// player.age =false
// Error:
// Type 'boolean' is not assignable to type 'number'.

// ---

// let a= "hello"

// a= "bye"
// ok

// a=1
// Error
// Type 'number' is not assignable to type 'string'.

// let b :boolean = "x"
// Error
// Type 'string' is not assignable to type 'boolean'.

// let b :boolean = false

// let c =[1,2,3]
// c.push("1")
// Error
// Argument of type 'string' is not assignable to parameter of type 'number'.

// let c :number[]=[]
// c.push("1")
// Error
// Argument of type 'string' is not assignable to parameter of type 'number'.

// c.push(1)

// const player ={
//     name:"nico"
// }

// player.name=1
// Error
// Type 'number' is not assignable to type 'string'.

// player.hello()
// Error
// Property 'h' does not exist on type '{ name: string; }'.
