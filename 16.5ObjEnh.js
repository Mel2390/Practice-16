A-
const createInstructor = (firstName, lastName) => ({
  firstName,
  lastName
});

B-

const favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};


C- 

const instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return `${this.firstName} says bye!`;
  }
};

D - 

const generateAnimal = (species, verb, noise) => ({
  species,
  [verb]() {
    return noise;
  }
});

