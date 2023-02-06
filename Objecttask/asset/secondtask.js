// task 2
let sumArray = (numarray) => {
  let total = 0;
  for (let i = 0; i < numarray.length; i++) {
    total = total + numarray[i];
  }
  console.log("Total is " + total);
};

sumArray([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]);

//  //Task 3
let grade = 95;
switch (true) {
  case grade >= 90:
    console.log("Grade A");
    break;
  case grade >= 80 && grade <= 89:
    console.log("Grade B");
  case grade >= 70 && grade <= 79:
    console.log("Grade C");
  case grade >= 60 && grade <= 69:
    console.log("Grade d");
  case grade >= 50 && grade <= 59:
    console.log("Grade f");
  default:
    console.log("Enter a valid output");
    break;
}
//Taask 1
let movie = [
  {
    title: "spidermain",
    director: "Stan lee",
    alreadyWatched: true,
  },
  {
    title: "Inception",
    director: "Chrispoter novel",
    alreadyWatched: false,
  },
];

for (let i = 0; i < movie.length; i++) {
  if (movie[i].alreadyWatched === true) {
    console.log(`you have watched ${movie[i].title} by ${movie[i].director}`);
  } else {
    console.log(
      `you stiil have to watched not watched ${movie[i].title} by ${movie[i].director}`
    );
  }
}

console.log("hello");
