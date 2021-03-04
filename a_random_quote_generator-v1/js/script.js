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
const quotes = [
  ['You miss 100% of the shots you don\'t take.', 'Wayne Gretzky'],
  ['Whether you think you can or you think you can\'t, you\'re right.', 'Henry Ford'],
  ['I have learned over the years that when one\'s mind is made up, this diminishes fear.', 'Rosa Parks'],
  ['I alone cannot change the world, but I can cast a stone across the water to create many ripples.', 'Mother Teresa'],
  ['Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.', 'Steve Jobs'],
  ['If life were predictable it would cease to be life, and be without flavor.', 'Eleanor Roosevelt'],
  ['If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.', 'Oprah Winfrey'],
  ['Mama, mama, mama, mama', 'Javi Lopez', '2021'],
  ['It\'s the climb', 'Miley Cyrus', 'Hannah Montana: The Movie']
]


/***
 * `getRandomQuote` function
***/
const getRandomQuote = function(quotes) {
  let randomQuoteIndex = Math.floor(Math.random() * 9);

  return quotes[randomQuoteIndex];
}


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);