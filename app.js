//chapter 21-25
//1
// var a = prompt("enter the first name");
// var b = prompt("enter the last name");
// var c = a + b;
// document.write(c + " welcome to the page");
//2
// var a = prompt("enter the model of your favorite mobile");
// document.write("your favorite mobile is " + a + "<br>");
// document.write("length of string is " + a.length);
//3
// var a = "pakistani";
// var n = a.indexOf("n");
// document.write("index of n is " + n);
//4
// var a = "hello world";
// var n = a.lastIndexOf("l");
// document.write("index of n is " + n);
//5
// var a = "pakistani";
// document.write("the letter at index 3 is " + a[3]);
//6
// var a = prompt("enter the first name");
// var b = prompt("enter the last name");
// var c = a.concat(" " + b);
// document.write(c + " welcome to the page");
//7
// var a = "hyderabad";
// var b = a.replace("hyder", "islam");
// document.write(b);
//8
// var m = "ayyan and inam are best friends.inam and ayyan always walks toagther";
// var n = m.replace(/and/g, "&");
// document.write(n);
//9
// var str = "272";
// var c = typeof(str);
// var num = parseInt(str, 10);
// var d = typeof(num);
// document.write(c + "<br>");
// document.write(d + "<br>");
//10
// var a = prompt("enter the input");
// var b = a.toUpperCase();
// document.write(b);
//11
// var a = prompt("enter the input");

// document.write(a.charAt[0].toUpperCase() + a.slice([1]));
//12
// var a = 34.55;
// var c = a.toString();
// var b = c.replace(".", "");
// document.write(b);
//13
// var a = prompt("enter your name ");
// for (var i = 0; i < a.length; i++) {
//     if (a[i] === "@" || a[i] === "." || a[i] === "," || a[i] === "!") {
//         var f = 1;
//         break;
//     }
// }
// if (f === 1) { document.write("please enter a valid name"); } else { document.write("your name is " + a); }
//14
// var a = ["cake", "pineapple", "pestry", "cakerus"];
// var b = prompt("welcome to the shah bakery enter your choice")
// var c = b.toLowerCase();
// for (var i = 0; i < a.length; i++) {
//     if (c === a[i]) {
//         var f = 1;
//     }
// }
// if (f === 1) {
//     document.write(b + " is available at index " + i + " in our bakery");
// } else { document.write(b + " is not available  "); }
//15
// var inputtxt = prompt("enter the password");
// var passw = /^[A-Za-z]\w{7,14}$/;
// if (inputtxt.value.match(passw)) {
//     alert('Correct, try another...')
//     return true;
// } else {
//     alert('Wrong...!')
//     return false;
// }
//16
// var uni = ("dawood university of karachi");
// var b = uni.split("");
// document.write(b);
//17
// var a = prompt("enter the name");
// var b = a.charAt(a.length - 1);
// document.write(b);
//18
// var a = "the quick brown fox jump over the lazy dog";
// var b = 0;
// for (var i = 0; i <= a.length; i++) {
//     if (a.slice(i, i + 3) === "the") {
//         b++;
//     }
// }
// document.write("the number of word (the) in " + a + " is " + b + " times");
//chapter 26-30
//1
// var a = +prompt("enter any positive number");
// document.write(a + "<br>");
// document.write(Math.round(a) + "<br>");
// document.write(Math.ceil(a) + "<br>");
// document.write(Math.floor(a) + "<br>");
//2
// var a = +prompt("enter any negative number");
// document.write(a + "<br>");
// document.write(Math.round(a) + "<br>");
// document.write(Math.ceil(a) + "<br>");
// document.write(Math.floor(a) + "<br>");
//3
// var a = +prompt("enter any negative number");
// document.write(Math.abs(a) + "<br>");
//4
// document.write(Math.floor((Math.random() * 6) + 1));
//5
// var a = Math.floor((Math.random() * 2) + 1);
// if (a === 1) {
//     document.write("head");
// } else { document.write("tails"); }
//6
// document.write(Math.floor((Math.random() * 100) + 1));
//7 cant understand
//8
// var a = Math.floor(Math.random() * 10) + 1;
// var b = +prompt("guess the number");
// if (b === a) {
//     document.write("congrates");
// } else {
//     document.write("try again");
// }
//chapter 31-34
//1
// var today = new Date();
// document.write(today);
//2
// var today = new Date();
// var date = (today.getMonth() + 1);
// if (date === 0) {
//     document.write("jan");
// } else if (date === 1) {
//     document.write("feb");
// } else if (date === 2) {
//     document.write("march");
// } else if (date === 3) {
//     document.write("april");
// } else if (date === 4) {
//     document.write("may");
// } else if (date === 5) {
//     document.write("june");
// } else if (date === 6) {
//     document.write("july");
// } else if (date === 7) {
//     document.write("august");
// } else if (date === 8) {
//     document.write("sept");
// } else if (date === 9) {
//     document.write("oct");
// } else if (date === 10) {
//     document.write("nov");
// } else if (date === 11) {
//     document.write("dec");
// }
//3
// var today = new Date();
// var date = (today.getDay());
// if (date === 0) {
//     document.write("sun");
// } else if (date === 1) {
//     document.write("mon");
// } else if (date === 2) {
//     document.write("tue");
// } else if (date === 3) {
//     document.write("wed");
// } else if (date === 4) {
//     document.write("thu");
// } else if (date === 5) {
//     document.write("fri");
// } else if (date === 6) {
//     document.write("sat");
// }
//4
// var today = new Date();
// var date = (today.getDay());
// if (date === 0) {
//     document.write("its fun day");
// } else if (date === 6) {
//     document.write("its fun day");
// }
//5
// var today = new Date();
// var date = (today.getDate());
// if (date <= 15) {
//     document.write("first fifteen days of month");
// } else  {
//     document.write("last days of month");
// }
//6
// var today = new Date();
// var current = new Date("1970-1-1");
// var diffMs = (today - current); // milliseconds 
// document.write("miliseconds" + diffMs + "<br>");
// document.write("minutes" + diffMs / (1000 * 60));
//7
// var today = new Date();
// var date = (today.getHours());
// if (date <= 14) {
//     document.write("its AM");
// } else {
//     document.write("its PM");
// }
//8
// var today = new Date();
// var current = new Date("2015-6-18");
// var diffMs = (today - current); // milliseconds   
// document.write("days past after first ramadan" + diffMs / (1000 * 60 * 60 * 24));
//9
// var today = new Date();
// var current = new Date("2015-1-1");
// var diffMs = (today - current); // milliseconds 
// document.write("seconds past after start of 2015" + diffMs / (1000));
//10
// var today = new Date();
// document.write(today + "<br>");
// var dt = new Date();
// dt.setHours(dt.getHours() - 1);
// document.write("before one hour it was " + dt);
//11
// var today = new Date();
// document.write(today + "<br>");
// var dt = new Date();
// dt.setFullYear(dt.getFullYear() - 100);
// document.write("before 100 years it was " + dt);
//12
// var a = +prompt("enter your age");
// document.write("your age is " + a + "<br>");
// var dt = new Date();
// var c = dt.getFullYear() - a;
// document.write("your birth year is " + c);
//13
// document.write("<h1>K-Electric bill</h1><br>");
// document.write("Month: <b>jun</b><br>");
// document.write("Number of units: <b>432</b><br>");
// document.write("Charges per unit: <b>22</b><br>");

// document.write("Net Amount Payable : <b>" + 432 * 22 + "</b><br>");
// document.write("late fee: <b>" + (1800 / 432) * 100 + "</b><br>");
// document.write("gross amount payable after due date : <b>" + (432 * 22 + (1800 / 432) * 100) + "</b>");
//chapter 35-38
//1
// function dat() {
//     var a = new Date();
//     document.write(a);
// }
// dat();
//2
// function data(firstname, lastname) {
//     var fullname = firstname + " " + lastname;
//     document.write("welcom to our page " + fullname);
// }
//var a = prompt("enter your first name");
//     var b = prompt("enter your last name");
// data(a,b);
//3
// function add(a, b) {
//     document.write((a + b));
// }
// var a = +prompt("enter the first number");
// var b = +prompt("enter the second number");
// add(a, b);
//4
// function cal(num1, num2, opr) {

//     if (opr === "+") {
//         document.write((num1 + num2));
//     }
//     if (opr === "-") {
//         document.write((num1 - num2));
//     }
//     if (opr === "/") {
//         document.write((num1 / num2));
//     }
//     if (opr === "*") {
//         document.write((num1 * num2));
//     }
// }
// var a = +prompt("enter the first number");
// var b = +prompt("enter the second number");
// var c = prompt("enter the operator + - / *");
// cal(a, b, c);
//5
// function sqr(a) {
//     document.write(a * a);
// }
// sqr(2);
//6
// function factorial(x) {

//     if (x === 0) {
//         return 1;
//     }
//     return x * factorial(x - 1);

// }
// var a = +prompt("enter the number for factorial");
// document.write(factorial(a));
//7
// function count(a, b) {
//     for (var i = a; i <= b; i++) {
//         document.write(i + " ");
//     }
// }
// var a = +prompt("enter the start number");
// var b = +prompt("enter the end number");
// count(a, b);
//8
// function hypotenuse(a, b) {
//     function square(x) { return x * x; }
//     return Math.sqrt(square(a) + square(b));
// }
// var a = +prompt("enter the base");
// var b = +prompt("enter the base");
// document.write(hypotenuse(a, b));
//9
// function area(width, height) {
//     return width * height;
// }
// var a = +prompt("enter the width");
// var b = +prompt("enter the height");
// document.write(area(a, b));
//10
// var a = prompt("enter your word");
// var c = "";
// for (var i = a.length - 1; i >= 0; i--) {
//     c += a[i]
// }
// if (c === a) {
//     document.write("the word " + a + " is palindrome")
// } else { document.write("the word " + a + " is not palindrome") }
//11
// var a = prompt("enter the entence");
// var b = a[0].toUpperCase() +
//     a.slice(1);
// document.write(b);
//12
// function find_longest_word(str) {
//     var array1 = str.match(/\w[a-z]{0,}/gi);
//     var result = array1[0];

//     for (var x = 1; x < array1.length; x++) {
//         if (result.length < array1[x].length) {
//             result = array1[x];
//         }
//     }
//     return result;
// }
// var a = prompt("enter the sentence");
// document.write(find_longest_word(a));
//13
// function calAr(r) {
//     return Math.PI * r * r;
// }

// function calCir(r) {
//     return Math.PI * 2 * r;
// }
// var a = +prompt("enter the radius");
// document.write("area of circle is " + calAr(a) + "<br>the circumfrance of circle is  " + calCir(a));