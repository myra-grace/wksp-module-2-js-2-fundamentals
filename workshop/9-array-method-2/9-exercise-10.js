// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here
function calculateAverage(grades) {
    let average = 0
    for (i = 0; i < grades.length; i++) {
        average += grades[i];
    }
    let y = Math.round(average / grades.length);
    console.log(y);
    switch(true) {
        case (y<60): 
        return 'F';

        case (y<70): 
        return 'D';
        
        case (y<80): 
        return 'C';
        
        case (y<90): 
        return 'B';
        
        case (y<100): 
        return 'A';
        
        default: 
        return 'S for Scott'
    }
}
console.log(calculateAverage([76, 60, 83, 100, 78]));

 
// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well


