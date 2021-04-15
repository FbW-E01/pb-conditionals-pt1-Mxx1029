// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
const firstInteger = 41;
const secondInteger = 60;

if (
    (firstInteger >= 50 && firstInteger <= 99) || 
    (secondInteger >= 50 && secondInteger <= 99)
    ) {
    console.log(true);
} else {
    console.log(false);
};

// OR:

((firstInteger >= 50 && firstInteger <= 99) || (secondInteger >= 50 && secondInteger <= 99)) ? console.log(true) : console.log(false);


// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
const thirdInteger = 99;

if (
    (firstInteger >= 50 && firstInteger <= 99) || 
    (secondInteger >= 50 && secondInteger <= 99) || 
    (thirdInteger >= 50 && thirdInteger <= 99)
    ) {
    console.log(true);
} else {
    console.log(false);
};

// OR: 

((firstInteger >= 50 && firstInteger <= 99) || (secondInteger >= 50 && secondInteger <= 99) || (thirdInteger >= 50 && thirdInteger <= 99)) ? console.log(true) : console.log(false);

// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 
const a = 85;
const b = 99;
const c = 203;

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else {
    console.log(c);
};

// OR: 

console.log(Math.max(a, b, c));

// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
const givenString = "Pythagoras";

(givenString[0] === "P" && givenString[1] === "y") ? console.log(givenString) : console.log("Py" + givenString);


// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
const int1 = 30;
const int2 = 13;
const sum = int1 + int2;

(sum >= 50 && sum <= 80) ? console.log(65) : console.log(80);

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

const num1 = 1;
const num2 = 1;

(num1 + num2 === 8 || (num1 > num2 ? num1 - num2 : num2 - num1) === 8) ? console.log(true) : console.log(false);

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 

((num1 === 15 || num2 === 15) || num1 + num2 === 15) ? console.log(true) : console.log(false);

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.

(num1 % 7 === 0 || num1 % 11 === 0 || num2 % 7 === 0 || num2 % 11 === 0) ? console.log(true) : console.log(false);

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 

(num1 === num2) ? console.log((num1 + num2) * 3) : console.log(num1 + num2);

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

const specNumber = 11;
const diff = Math.abs(specNumber - 19);

(specNumber > 19) ? console.log(diff * 2) : console.log(diff);

// 11. BONUS CHALLENGE:  Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult". 

const firstName = "Angela";
const age = 64;

if (age < 13) {
    console.log(`${firstName} is a child.`);
} else if (age >= 13 && age < 20) {
    console.log(`${firstName} is a teenager.`);
} else if (age >= 20 && age < 30) {
    console.log(`${firstName} is a young adult.`);
} else {
    console.log(`${firstName} is an adult.`);
};

// OR:

switch (age) {
    case (age < 13) :
        console.log(`${firstName} is a child.`);
        break;
    case (age >= 13 && age < 20) :
        console.log(`${firstName} is a teenager.`);
        break;
    case (age >= 20 && age < 30) :
        console.log(`${firstName} is a young adult.`);
        break;
    default :
        console.log(`${firstName} is an adult.`);
        break;
};

// 12. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc. 
