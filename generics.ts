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
