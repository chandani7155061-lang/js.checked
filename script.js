let name1 = prompt("enter your name");
let age = Number(prompt("enter your age"));
let marks = Number(prompt("enter your marks"));
let grade;
if (marks >= 90 && marks <= 100) {
    grade = "A";
} else if (marks >= 75 && marks <= 89) {
    grade = 'B'
}else{
    grade = 'c';
}


alert("Name: " + name1 + "\n" + "Age: "+ age + "\n" + "Grade: "+ grade)