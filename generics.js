"use strict";
// let names: string[]= ["Tony", "Anthony"]; // one way
let names = ["Tony", "Anthony"]; // another valid way / generic way
let store = {};
store.name = "Tony";
store.isCoder = true;
// generic functions
// doing it the way below will result in the ids variable not knowing which data type is used. for instance if I want to us dot notation (if it was an object) ts will throw a syntax error saying identifier not found
// function merge(a: any, b: any) {
//   return [a, b];
// }
// const ids = merge(1, 2);
// ids[0]
// way around this problem
// function merge<T>(a: T, b: T) {
//   return [a, b];
// }
// const ids = merge<number | string>("string", 1);
// ids[0];
// console.log(ids);
// working with multiple Generic Parameters
function merge(a, b) {
    return [a, b];
}
const ids = merge("1", "string");
// const ids = merge("1", "string"); // ts can also infer the types without the types in th '<>' brackets
ids[0];
console.log(ids);
// Generics and constraints
// this will console log an empty object because numbers cant be spread into an object
// function mergeObj(a: any, b: any) {
//   return { ...a, ...b };
// }
// const merged = mergeObj(1, 2);
// console.log(merged);
// correct way to do solve this problem
function mergeObj(a, b) {
    // adds constraint using 'extends' keyword. essentially tells ts the actual type that is being used must extend another certain type of my choice. So 'T' must extend as on object.
    return { ...a, ...b };
}
const merged = mergeObj({ userId: 1 }, { userName: "SpOOkWinz" });
console.log(merged);
