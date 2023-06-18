// Assigment No. 6 - 9
// Math Expressions
// Q.no.1
var a = 10;
document.write("Result:" + "<br>" + "Now the value of a is: " + a + "<br>" + "<br>");
++a;
document.write("The value of ++a is: 11" + "<br>" + "Now the value of a is: " + a + "<br>");
a++;
document.write("The value of a++ is: 11" + "<br>" + "Now the value of a is: " + a + "<br>");
--a;
document.write("The value of --a is: 11" + "<br>" + "Now the value of a is: " + a + "<br>");
a--;
document.write("The value of a-- is: 11" + "<br>" + "Now the value of a is: " + a + "<br>");

// Q.no.2

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("Value of a is: " + a + "<br>" + "Value of b is: " + b + "<br>" + "Value of result is: " + result + "<br>");

// Q.no.3

user_name = prompt("Enter your name");
alert("Welcome " + user_name);

// Q.no.4

var table_number = prompt("Enter Table Number");
if (table_number === "") {
    var table_number = 5;
}
for (i = 0; i < 11; i++) {
    document.write(table_number + "X" + i + "=" + table_number * i + "<br>");
}

// Q.no.5

var subject1 = prompt("Enter Subject 1");
var subject2 = prompt("Enter Subject 2");
var subject3 = prompt("Enter Subject 3");
var marks_subject1 = parseInt(prompt("Enter marks of subject 1"));
var marks_subject2 = parseInt(prompt("Enter marks of subject 2"));
var marks_subject3 = parseInt(prompt("Enter marks of subject 3"));
var subject1_percentage = (marks_subject1 / 100) * 100;
var subject2_percentage = (marks_subject2 / 100) * 100;
var subject3_percentage = (marks_subject3 / 100) * 100;
var total_marks = marks_subject1 + marks_subject2 + marks_subject3;
var total_percentage = (subject1_percentage + subject2_percentage + subject3_percentage) / 3;
document.write("<b>Subject Total_Marks Obtained_Marks Percentage</b>" + "<br>");
document.write(subject1 + "  " + "100" + " " + marks_subject1 + " " + subject1_percentage + "<br>");
document.write(subject2 + "  " + "100" + " " + marks_subject2 + " " + subject2_percentage + "<br>");
document.write(subject3 + "  " + "100" + " " + marks_subject3 + " " + subject3_percentage + "<br>");
document.write(" " + "300" + " " + total_marks + " " + total_percentage + "<br>");
