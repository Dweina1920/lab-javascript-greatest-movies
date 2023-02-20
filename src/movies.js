// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

console.log(movies);

/*const getAllDirectors = movies.map((moviesArray) => {
    return moviesArray.director;
    
  });*/

function getAllDirectors(moviesArray) {
  let directores = moviesArray.map((movie) => movie.director);
  console.log(directores);
  const directorsClearList = [...new Set(directores)];
  console.log(directorsClearList);
  return directorsClearList;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergMovies = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return spielbergMovies.length;
}
console.log(howManyMovies(moviesArray));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  // part 2
  // usando reduce() method con 2 params y un valor Inical!

  const total = moviesArray.reduce((accumulator, currentValue) => {
    if (currentValue.score) {
      return accumulator + currentValue.score;
    } else {
      return accumulator;
    }
  }, 0);

  const averageScoreString = (total / moviesArray.length).toFixed(2);

  return Number(averageScoreString);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMoviesUsingIncludes = moviesArray.filter((moviesArray) =>
    moviesArray.genre.includes("Drama")
  );
  const averageDramaScores = scoresAverage(dramaMoviesUsingIncludes);
  return averageDramaScores;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
 // part 1
  // Queremos crear un "shallow" copy del array original :) - usemos el metodo map() === "crear un shallow copy" :)
  const arrayOrdenado = moviesArray.map((movie) => {
    return movie;
  });
  // part 2
  // usemos el sort() para pdoer sortear :)
  arrayOrdenado.sort((movieA, movieB) => {
    if (movieA.year > movieB.year) return movieA.year - movieB.year;
    if (movieA.year < movieB.year) return movieA.year - movieB.year;
    else return movieA.title.localeCompare(movieB.title);
  });
  // part 3
  // return with style
  return arrayOrdenado;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray.map((movie) => movie.title)
.sort()
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
