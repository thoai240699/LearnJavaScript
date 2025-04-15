// ### Exercise: Level 1

// 1. Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.
let challenge = "30 Days Of JavaScript";
// 2. Print the string on the browser console using __console.log()__
console.log(challenge);
// 3. Print the __length__ of the string on the browser console using _console.log()_
console.log(challenge.length);
// 4. Change all the string characters to capital letters using __toUpperCase()__ method
console.log(challenge.toUpperCase());
// 5. Change all the string characters to lowercase letters using __toLowerCase()__ method
console.log(challenge.toLowerCase());
// 6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method
console.log(challenge.substring(0, 7));
// 7. Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.
console.log(challenge.substring(3));
// 8. Check if the string contains a word __Script__ using __includes()__ method
console.log(challenge.includes("Script"));
// 9. Split the __string__ into an __array__ using __split()__ method
console.log(challenge.split());
// 10. Split the string 30 Days Of JavaScript at the space using __split()__ method
console.log(challenge.split(" "));
// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.
console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", ")
);
// 12. Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.
console.log(challenge.replace("JavaScript", "Python"));
// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use __charAt()__ method.
console.log(challenge.charAt(15));
// 14. What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__
console.log(challenge.charCodeAt(challenge.indexOf("J")));
// 15. Use __indexOf__ to determine the position of the first occurrence of __a__ in 30 Days Of JavaScript
console.log(challenge.indexOf("a"));
// 16. Use __lastIndexOf__ to determine the position of the last occurrence of __a__ in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"));
// 17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
console.log(
  "You cannot end a sentence with because because because is a conjunction".indexOf(
    "because"
  )
);
// 18. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
console.log(
  "You cannot end a sentence with because because because is a conjunction".lastIndexOf(
    "because"
  )
);
// 19. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
console.log(
  "You cannot end a sentence with because because because is a conjunction".search(
    "because"
  )
);
// 20. Use __trim()__ to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(" 30 Days Of JavaScript ".trim());
// 21. Use __startsWith()__ method with the string *30 Days Of JavaScript* and make the result true
console.log(challenge.startsWith("3"));
// 22. Use __endsWith()__ method with the string *30 Days Of JavaScript* and make the result true
console.log(challenge.endsWith("pt"));
// 23. Use __match()__ method to find all the __a__’s in 30 Days Of JavaScript
console.log(challenge.match(/a/gi));

// 24. Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log("30 Days of".concat(" JavaScript"));
console.log(`${"30 Days of"} JavaScript`);
// 25. Use __repeat()__ method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));
// Exercise: Level 2
// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
if (typeof "10" !== typeof 10) {
  console.log(Number("10") === 10); // true
}
// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
if (parseFloat("9.8") !== 10) {
  console.log(Math.ceil(parseFloat("9.8")) === 10); // true
}

// Check if 'on' is found in both python and jargon
console.log("python".includes("on") && "jargon".includes("on"));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log("I hope this course is not full of jargon.".includes("jargon"));

// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101));
// Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * 51) + 50);
// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 256));

// Access the 'JavaScript' string characters using a random number.
let randomIndex = Math.floor(Math.random() * "JavaScript".length);
console.log("JavaScript".charAt(randomIndex));
// Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(
  sentence.substring(
    sentence.indexOf("because"),
    sentence.lastIndexOf("because") + "because".length
  )
);
//Exercises: Level 3
// Count the number of word 'love' in the sentence
let loveSentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(loveSentence.match(/love/gi).length);

// Count the number of all 'because' in the sentence
let becauseSentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(becauseSentence.match(/because/gi).length);

// Clean the text and find the most frequent word
const messySentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let cleanedText = messySentence.replace(/[%$@&#;!?.]/g, "");
console.log(cleanedText);
let words = cleanedText.split(" ");
console.log(words);
let wordFrequency = {};
words.forEach((word) => {
  word = word.toLowerCase();
  wordFrequency[word] = (wordFrequency[word] || 0) + 1;
});
let mostFrequentWord = Object.entries(wordFrequency).reduce((a, b) =>
  b[1] > a[1] ? b : a
);
console.log(mostFrequentWord);

// // Calculate the total annual income
let incomeText =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let incomeNumbers = incomeText.match(/\d+/g).map(Number);
console.log(incomeNumbers);
let totalAnnualIncome =
  incomeNumbers[0] * 12 + incomeNumbers[1] + incomeNumbers[2] * 12;
console.log(totalAnnualIncome);
