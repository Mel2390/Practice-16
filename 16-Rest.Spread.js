A-

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);


B- 

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

C- 

const findMin = (...args) => {
  return Math.min(...args);
}

D- 

const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
}

E- 

const doubleAndReturnArgs = (arr, ...args) => {
  const doubledArgs = args.map(arg => arg * 2);
  return [...arr, ...doubledArgs];
}

D- 

const removeRandom = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
}

const extend = (array1, array2) => {
  return [...array1, ...array2];
}


const addKeyVal = (obj, key, val) => {
  return { ...obj, [key]: val };
}


const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
}


const update = (obj, key, val) => {
  return { ...obj, [key]: val };
}







