// Q9
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(grades) {
    let average = 0
    for (i = 0; i < grades.length; i++) {
        average += grades[i];
    }
    return Math.round(average / grades.length);
}
console.log(calculateAverage([76, 60, 83, 100, 78]));