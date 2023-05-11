const titleCased = () => {
  const tutorials = [
    "what does the this keyword mean?",
    "What is the Constructor OO pattern?",
    "implementing Blockchain Web API",
    "The Test Driven Development Workflow",
    "What is NaN and how Can we Check for it",
    "What is the difference between stopPropagation and preventDefault?",
    "Immutable State and Pure Functions",
    "what is the difference between == and ===?",
    "what is the difference between event capturing and bubbling?",
    "what is JSONP?",
  ];

  const capitalizedTutorials = tutorials.map((tutorial) => 
    tutorial.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  );

  return capitalizedTutorials;
};
/* 
1) Split the string into an array of words.
2) Iterate through each word in the array.
3) Capitalize the first letter of each word.
4) Join the array of words back into a string.
 */


