// let names: string[]= ["Tony", "Anthony"]; // one way
let names: Array<String> = ["Tony", "Anthony"]; // another valid way / generic way

/* whats special about Generics?
 * Types where multiple types need to work together with other types in order to accurately describe a certain value type
 * Two types working together (e.g. Array and string working together ^)
 * The poiint behing Generic types, Create flexible types where multiple types work together
 */

type DataStore<placeholderType> = {
  // can accept multiple placeholder types
  // [key: string]: string | number;
  [key: string]: placeholderType;
}; // benefit is a very flexible DataStore type which can be used on as many stores as we want. When its created I can decide what kind of data value can be stored in it

let store: DataStore<string | boolean> = {};
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
function merge<T, U>(a: T, b: U) {
  return [a, b];
}
const ids = merge<number | string, number | string>("1", "string");
// const ids = merge("1", "string"); // ts can also infer the types without the types in th '<>' brackets
ids[0];

console.log(ids);
