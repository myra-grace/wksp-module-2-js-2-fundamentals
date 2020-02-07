// For exercises 4 to 8, you are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q5
// Returns a new list with all the elements of lst that are length greater than 5
function keepLong(lst) {
    // lst is an array of strings
    return lst.filter(item => item.length > 5);
}
// -------------------------------------------------------------------------
console.log('Q5 keepLong()', keepLong(['Cyborg', 'Robin', 'Batman', 'Superman', 'Aquaman', 'Flash']));