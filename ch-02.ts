let bestSong = Math.random() > 0.5
  ? "Chain of Fools"
  : "Respect";

// let firstName = "Whitney";
//firstName.length();
//
// This expression is not callable.
//   Type 'Number' has no call signatures.

// Assignability
// let firstName = "Carole";
// firstName = "Patricia";

let lastName = "King";
// lastName = true;
// Error: Type 'boolean' is not assignable to type 'string'.

// let rocker; // Type: any

// rocker = "Joan Jett"; // Type: string
// rocker.toUpperCase(); // Ok

// rocker = 19.58; // Type: number
// rocker.toPrecision(1); // Ok

// rocker.toUpperCase()
//
// Error: 'toUpperCase does not exist on type 'number'.

// let rocker: string;
// rocker = "Joan Jett";

let rocker: string;
rocker = 19.58;
// Error: Type 'number' is not assignable to type 'string'.

// let firstName: string = "Tina";
// ~~~~~~~~ Does not change the type system...

let firstName: string = 42;
// ~~~~~~~~~
// Error: Type 'number' is not assignable to type 'string'.

let rapper = "Queen Latifah";
rapper.length; // ok

let cher = {
  firstName: "Cherilyn",
  lastName: "Sarkisian",
};
cher.middleName;
// ~~~~~~~~~~
// Property 'middleName' does not exist on type
// '{ firstName: string; lastName: string; }'.