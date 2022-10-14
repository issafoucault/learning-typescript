// Object Types

const poet = {
  born: 1935,
  name: "Mary Oliver",
};

poet['born'];
poet.name;

poet.end;

// Declaring Object Types

let poetLater: {
  born: number,
  name: string,
};

// Ok
poetLater = {
  born: 1935,
  name: "Mary Oliver",
};

poetLater = "Sappho";

// Aliased Object Types

type Poet = {
  born: number;
  name: string;
};

let poetLater: Poet;

// Ok
poetLater = {
  born: 1935,
  name: "Sara Teasdale",
};

poetLater = "Emily Dickinson";

// Structural Typing

type WithFirstName = {
  firstName: string;
};

type WithLastName = {
  lastName: string;
};

const hasBoth = {
  firstName: "Lucille",
  lastName: "Clifton",
};

// Ok: `hasBoth` contains a `firstName` property of type `string`
let withFirstName: WithFirstName = hasBoth;

// Ok: `hasBoth` contains a `lastName` property of type `string`
let withLastName: WithLastName = hasBoth

// Usage Checking

type FirstAndLastNames = {
  first: string;
  last: string;
}

// Ok
const hasBoth: FirstAndLastNames = {
  first: "Sarojini",
  last: "Naidu",
};

const hasOnlyOne: FirstAndLastNames = {
  first: "Sappho"
};
// Property 'last' is missing in type '{ first: string; }'
// but required in type 'FirstAndLastNames'.

type TimeRange = {
  start: Date;
};

const hasStartString: TimeRange = {
  start: "1879-02-13",
  // Error: Type 'string' is not assignable to type 'Date'.
};