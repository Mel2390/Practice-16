

//Object

1

//8
//1846


2
//{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}




3

//Your name is Alejandro and you like purple
//Your name is Melissa and you like green
//Your name is undefined and you like green


//Array 

1

//Maya
//Marisa
//Chi

2

//"Raindrops on roses"
//"whiskers on kittens"
//["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

3
// [10,30,20]


//ES2015 Refactoring

1
//var a = obj.numbers.a;
//var b = obj.numbers.b;

2
const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

3
[arr[0], arr[1]] = [arr[1], arr[0]]


//Race Result

function raceResults(arr) {
  const [apple, banana, berry,...rest] = arr;
  return { apple, banana, berry, rest };
}

const raceResults = (arr) => ({ apple: arr[0], banana: arr[1], berry: arr[2], rest: arr.slice(3) });


