let students = [
  { name: "Alice", age: 20, grades: [85, 92, 88] },
  { name: "Bob", age: 22, grades: [70, 80, 75] },
  { name: "Charlie", age: 23, grades: [95, 90, 93] },
  { name: "David", age: 21, grades: [60, 65, 70] },
  { name: "Eve", age: 20, grades: [78, 82, 85] },
];

// Use a for loop to print each student's name and age.
for (let index = 0; index < students.length; index++) {
   console.log(`${students[index].name}, ${students[index].age}`)
}

// Use forEach to print each student's name and average grade.
students.forEach(student => {
    let sumGrades = student.grades.reduce((x, grade) => x + grade, 0)
    let avgGrades = sumGrades / student.grades.length
    console.log(student.name)
    console.log(student.grades)
    console.log(sumGrades)
    console.log(avgGrades);
});

//  Use filter to create an array of students older than 21.
const olderStudents = students.filter(student => student.age > 21)
console.log(olderStudents)

// Use push to add a new student to the array.
students.push({name: "Gian", age: 27, grades: [85, 92, 88]})
console.log(students);

// Use pop to remove the last student from the array.
students.pop()
console.log(students);

// Use unshift to add a new student to the beginning of the array.
students.unshift({name: "Gian", age: 27, grades: [85, 92, 88]})
console.log(students);

// Use shift to remove the first student from the array.
students.shift()
console.log(students);


// Use join to create a string of student names separated by commas.
const studentNames = students.map(student => student.name)

console.log(studentNames.join("+"))
//console.log(studentNames)