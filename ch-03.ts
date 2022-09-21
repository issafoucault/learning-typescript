// Union Types
let mathematician = Math.random() > 0.5
  ? undefined
  : "Mark Goldberg";

// Declaring Union Types
let thinker: string | null = null;

if (Math.random() > 0.5) {
  thinker = "Susanne Langer"; // Ok
}

// Union Properties
let physicist = Math.random() > 0.5
  ? "Marie Curie"
  : 84;

physicist.toString(); // Ok

physicist.toUpperCase();
// type 'number' does not have this property, hence the error

physicist.toFixed();
// type 'string' does not have this property, hence the error

// Narrowing
// Assignment Narrowing
let admiral: number | string
admiral = "Grace Hopper";

admiral.toUpperCase(); // Ok: string

admiral.toFixed(); // Error: property 'to fixed' does not exist on type 'string'
