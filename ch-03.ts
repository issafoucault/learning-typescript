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

// Conditional Checks

// Type of scientist: number | string
let scientist = Math.random() > 0.5
  ? "Rosalind Franklin"
  : 51;

if (scientist === "Rosalind Franklin") {
  // Type of scientist: string
  scientist.toUpperCase(); // Ok
}

// Type of scientist: number | string
scientist.toUpperCase();
// ~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.

// Typeof Checks

let researcher = Math.random() > 0.5
  ? "Rosalind Franklin"
  : 51;

if (typeof researcher === "string") {
  researcher.toUpperCase(); // Ok: string
}

if (!(typeof researcher === "string")) {
  researcher.toFixed(); // Ok: number
} else {
  researcher.toUpperCase(); // Ok: string
}

typeof researcher === "string"
  ? researcher.toUpperCase() // Ok: string
  : researcher.toFixed(); // Ok: number

// Literal types
const philosopher = "Hypatia";

// Literal Assignability

let specificallyAda: "Ada";

specificallyAda = "Ada"; // Ok

specificallyAda = "Byron";
// Error: Type 'Byron' is not assignble to type 'Ada'

let someString = ""; // Type: string

specificallyAda = someString;
// Error: Type 'string' is not assignable to type '"Ada"'.

someString = ":)";