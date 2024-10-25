//CHAPTER NO 3 //
//VARIABLE FOR NUMBERS//


//QUESTION 1//
//Declare a variable height assign the value 170 to it .Then, add 10 to height and store the result in a new variable newHeight .Disply an alert with the new value .
var height = 170;
var newHeight = height + 10;
alert(newHeight);    //Result=180

//QUESTION 2//
//Declare two variables ,num1 num2,and assign them values of 50 and 30 respectively .Create a new varibles sum that stores the sum of num1 and num2 ,and display the sum in an alert .
var num1 = 50;
var num2 = 30;
var sum = num1 + num2;
alert(sum);          //Result=80

//QUESTION 3//
//Declares a variable  numToBeAdded with the value 20 .Then use the following code :Display total in an alert.What is the value of total?
var numToBeAdded = 20;
var total = sum + numToBeAdded;
alert(total);           //Result=100

//QUESTION 4//
//Declare a variable price with the value 120.Now add tax (10%) to price and display the total price in an alert.
var price = 120;
var tax = price * 0.1;
var total = price + tax;
alert(total);            //Result=132



//CHAPTER NO 4 //
//VARIABLE FOR NUMBERS//


//QUESTION 1//
//Write a code to create a variable myAddress and assign it your city name .Ensure your variable name follows camelCase naming convention ,and then display the value in alert. 
var myAddress = "Karachi";
alert(myAddress);        

//QUESTION 2//
//Write a code to declare three variables using camelCase : userName,userEmail,and userPassword .Assign them appropriate string values and display them together in an alert .
var userName = "Munazza";
var userEmail = "Munazza123@gmail.com";
var userPassword = "happylife";
alert("Name:" + userName +
    "\nEmail:" + userEmail +
    "\nPassword: " + userPassword);

//QUESTION 3//
//Declare a variable userAddress that contain spaces (i.e. , try naming it like user address ) and observe what happens .Then correct the name using camelCase and display the value in an alert.
// var user address="Malir Court Popular Villas";//
//this will cause an error becausespaces are vnot allowed in variable names 
//correct method 
var userAddress = "Malir Court Popular Villas"
alert(userAddress);

//QUESTION 4//
//Create a variable rose and assign the value "Floribundas".Then,try accessing the variable using Rose (uppercase) and see what happens .Display both results.
var rose = "Floribundas";
alert(rose);
// alert{Rose};//
//This will cause an error because javaScipt is case-sensitive 



//CHAPTER NO 5 //
//MATH EXPRESSIONS  : FAMILIAR OPERATORS//


//QUESTION 1//
//Write a javaScript statement that adds two numbers, 25 and 30 and assign the result to a variable sum.Then display the value in an alert.
var sum = 25 + 30;
alert(sum);
//Result=55

//QUESTION 2//
//Create a variable sum1 and assign it thev value 25 and another variable sum2 and assign it the value 5.Add both variables and store the result in a new variable called sum .Display the result in an alert .
var num1 = 25;
var num2 = 5;
var sum = num1 + num2;
alert(sum);
 //Result=30

//QUESTION 3//
//Write a statement that assigns  the remainder of 27 divided by 4 to a variable called modulusResult .Then display the value in an alert.
var modulusResult = 27 % 4;
alert(modulusResult);
//Result=3


//CHAPTER NO 6 //
//MATH EXPRESSIONS  : UNFAMILIAR OPERATORS//


//QUESTION 1//
//Initialize a variable num with the value 3. Use the post-increment (num++) operator and assign the result to a new variable newNum. Display both num and newNum in alerts.
var num = 3;
var newNum = num++;
alert(num);
alert(newNum);
//Result=4
//Result=3

//QUESTION 2//
//Write a program that initializes a variable counter with the value 10. Use counter++ twice in your code, then display the final value of counter in an alert.
var counter = 10;
counter++;
counter++;
alert(counter);
//Result=12

//QUESTION 3//
//Initialize a variable points with the value 20. Use the post-decrement operator (points--) and the pre-increment operator (++points) in separate statements. Display the final value of points in an alert.
var points = 20;
points--;
++points;
alert(points);
//Result=20

//QUESTION 4//
//Write a program that initializes a variable number with the value 0, uses ++number three times in your code, and then displays the final value of number in an alert.
var number = 0;
++number;
++number;
++number;
alert(number);
//Result=3



//CHAPTER NO 7 //
//MATH EXPRESSIONS  :  ELIMINATING  AMBIGUITY//


//QUESTION 1//
//Combine parentheses and the modulus operator % to first calculate the remainder of 20 % 6 before performing the other arithmetic operations. What is the value of calculation?
var remainder = (20 % 6);
console.log(remainder); // Output: 2

//QUESTION 2//
//Write an expression that calculates (6+2)*(5-3) ,and determine the value of expression value ?
var result = (6 + 2) * (5 - 3);
console.log(result); // Output: 16


//QUESTION 3//
//What is the value of finalTotal in the following expression, and how does operator precedence apply here?
var finalvalue = "16";
//Multiplication (*) has higher precedence than addition (+) and subtraction (-)

//QUESTION 4//
//Evaluate the value of answer and determine how JavaScript processes the following expression:
//first we solve brackets according to bodmas rule 
//6+2=8 and 5-3=2
//after solving brackets we multiply the answers of both brackets (8)*(2)

//CHAPTER NO 8 //
//PROMPTS//


//QUESTION 1//
//Write a script that asks the user, "What is your name?" and stores the answer in a variable userName. Then, display an alert that says "Hello, [userName]!".
var userName = prompt("What is your name ");
alert("Hello, " + userName + "!");

//QUESTION 2//
//Create a prompt that asks the user, "How old are you?" and assigns the response to a variable age. Display an alert that says "You are [age] years old." Handle the case where the user clicks "Cancel" by displaying "No age provided" in the alert.
var age = prompt("How old are you?");
if (age === null) {
    alert("No age provided");
}
else {
    alert("You are  " + age + " years old ");
}


//QUESTION 3//
//Write a prompt asking, "How many pets do you have?" and assign the response to a variable pets. If the user enters nothing and clicks "OK", display an alert saying "You didn't enter anything."
var pets = prompt("How many pets do you have?");
if (pets === null) {
    alert("You didn't enter anything");
}
else {
    alert("You have " + pets + " pets .");
}

//QUESTION 4//
//Write a script that asks the user "Enter a number between 1 and 10". Convert the user input to a number, then multiply it by 2 and display the result in an alert.
var number = prompt("Enter a number between 1 and 10");
var result = (number) * 2
alert(result);

//QUESTION 5//
//Write a prompt that asks the user, "What is your favorite number?" and assigns the response to a variable favNum. If the user does not provide a response and clicks "OK", assign a default value of 7 to favNum and display it in an alert.
var favNum = prompt("What is your favourite number?");
if (favNum === null) {
    favNum = 7;
    alert(favNum);
}
else {
    alert("Your favourite number is " +  favNum);
}


//CHAPTER NO 9 //
//IF STATEMENTS//

//QUESTION 1//
//Prompt and If Statement:
// Write a script that asks the user "What is the capital of France?" If the user answers "Paris", display an alert with "Correct!" Otherwise, display an alert with "Try again!"
var user = prompt("What is the capital of France?");
if (user === "paris") {
    alert("Correct!");
}
else {
    alert("Try again!");
}

//QUESTION 2//
//If-Else Statement:
// Modify the previous script to use an else statement. If the user's answer is correct, display "Correct!", otherwise display "Incorrect, the correct answer is Paris."
if (user === "paris") {
    alert("Correct!");
}
else {
    alert("Incorrect, the correct answer is Paris.");
}

//QUESTION 3//
//Multiple Correct Answers:
// Write a program that asks the user, "What is the capital of the United Kingdom?" If they answer "London" or "The United Kingdom", display "Correct!". Use an if-else condition to check both possible answers.
var user = prompt("What is the capital of the United Kingdom?");
if (user === "London" || user === "The United Kingdom"
) {
    alert("Correct!");
}
else {
    alert("Incorrect. Please try again.");
}

//QUESTION 4//
//Incrementing a Score:
// Modify a script to keep track of a score. Start with a score of 0. Every time the user answers a question correctly, increment the score by 1 and display the updated score.
var score = 0;
var capital = prompt("What is the capital of the United Kingdom?")
if (capital === "London") {
    score++;
    alert("Correct ! Your score is " + score)
}
else {
    alert("Incorrect, the correct answer is Paris.");
}

var capital = prompt("What is the capital of the Pakistan?")
if (capital === "Islamabad") {
    score++;
    alert("Correct ! Your score is " + score)
}
else {
    alert("Incorrect, the correct answer is Islamabad.");
}


//QUESTION 5//
//Testing Multiple Variables:
// Write a script that asks the user two questions: "What is the capital of Germany?" and "What is 10 + 10?" If both answers are correct ("Berlin" and 20), display "You got both right!". If only one answer is correct, display "You got one correct!".
var user1 = prompt("What is the capital of Germany?");
var user2 = prompt("What is 10 + 10?");
if (user1=== "Berlin" && user2 === "20") {
    alert("You got both right!");
}
else if (user1 === "Berlin" || user2 === "20") {
    alert("You got one correct!");

} else {
    alert("Both answers are incorrect!");
}

//new updated questions of chapter 9 are in next assignment