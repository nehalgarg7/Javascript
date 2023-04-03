// Pattern Matching

// Regex are regular expression. 
// Sources : regexr.com

let pattern = 'pw';
let regexOne = new RegExp(pattern);

let flag ='gi'
let regexTwo = new RegExp(pattern, flag);

let regexThree = /pw/gi

const strToCheck = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent";

const result = regexThree.test(strToCheck);
console.log(result);

const anotherResult = strToCheck.match(regexThree);
console.log("Another Result: ",anotherResult);

const oneMoreResult = strToCheck.replace(regexThree, 'p-W');
console.log(oneMoreResult);

const webURL = "https://pwskills.com/hitesh%41choudhary"

const useableURL = webURL.replace(/%\d\d/,'-');
console.log(useableURL);