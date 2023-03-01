

const numbers = [23,65,-1,98,-7,77,37,-8,544,17];
const greetings = ["hallo","Hi","hey","good afrernoon","good evening"];
/////////////////////
// 1.create a new arrow , that will conatain all the negativ numbers 
// from the  arrow "numberes".
////////////////////
const negative_numberes = numbers.filter(el => el < 0);
/////////////////////
// 2.creaate a new arrow from "numbers" that will conatain all the positive
// numberes that lasts with 7.
/////////////////////
const negative_numberers = numbers.filter(el => el%10 == 7);
/////////////////////
// 3.creaate a new arrow from "greetings" that will conatain olny the 
// greetings that have more thatn 5 simbols.
/////////////////////
const five_sim = greetings.filter(el => el.length > 5);
/////////////////////
// 4.creaate a new arrow from "greetings" that will conatain all the 
// greetings in the upper case.
/////////////////////
const capsGreeting = greetings.map(el => el.toUpperCase());
/////////////////////
// 5.creaate a new arrow from "greetings" that will conatain all the 
// greetings in the lower case.
/////////////////////
const lowGreeting = greetings.map(el => el.toLowerCase());
/////////////////////
// 6.creaate a new arrow from "greetings" that will conatain only the 
// greetings that begin with a lower case simbol.
/////////////////////
const begin = greetings.filter(el => el[0] === el[0].toLowerCase());
/////////////////////
// 7.creaate a new arrow from "greetings" that will conatain only the 
// greetings that begin with the letter "h".
/////////////////////
const letterG = greetings.filter(el => el[0] == "h" || el[0] == "H");
const letterG2 = greetings.filter(el => el[0].toLocaleUpperCase() == "H");
/////////////////////
// 8.creaate a new arrow from "greetings" that will conatain only the 
// greetings that their lenth are longer than 5 simbols , and they will
// be upped in upper case.
/////////////////////
const Uper5 = greetings.filter(el => el.length > 5).map(el => el.toUpperCase());
/////////////////////
// 9.creaate a new arrow from "greetings" that will conatain only the 
// greetings that begin with the letter "h".
/////////////////////
const up_greetings = greetings.map(el => el[0].toUpperCase()+el.slice(1));
// slice cuts the element ( from , to );
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

const gretings_long = greetings.filter(el => el.length > 6);
const gretings_long1 = greetings.find(el => el.length > 6);
console.log(gretings_long);
console.log(gretings_long1);
