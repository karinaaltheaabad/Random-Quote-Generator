/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: 'You miss 100% of the shots you don\'t take.', 
    source: 'Wayne Gretzky'
  },
  {
    quote: 'Whether you think you can or you think you can\'t, you\'re right.',
    source: 'Henry Ford'
  },
  {
    quote: 'I have learned over the years that when one\'s mind is made up, this diminishes fear.',
    source: 'Rosa Parks'
  },
  {
    quote: 'I alone cannot change the world, but I can cast a stone across the water to create many ripples.', 
    source: 'Mother Teresa'
  },
  {
    quote: 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.',
    source: 'Steve Jobs'
  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor.', 
    source: 'Eleanor Roosevelt'
  },
  {
    quote: 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.',
    source: 'Oprah Winfrey'
  },
  {
    quote: 'Mama, mama, mama, mama', 
    source: 'Javi Lopez',
    year: '2021'
  },
  {
    quote: 'It\'s the climb', 
    source: 'Miley Cyrus',
    citation: 'Hannah Montana: The Movie'
  }
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr) {
  let randomQuoteIndex = Math.floor(Math.random() * arr.length);
  return arr[randomQuoteIndex];
}

console.log(quotes);
console.log(getRandomQuote(quotes));
/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);