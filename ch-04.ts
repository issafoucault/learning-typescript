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