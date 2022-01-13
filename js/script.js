/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//quoteNumber holds the index of the most recent quote.
let quoteNumber = 0;
/*** 
 * This is an array of quote objects. It holds all the information for the random quotes.
***/

const quotes = [
  {
    quote: 'I refuse to join any club that would have me as a member.',
    source: 'Groucho Marx',
    citation: '',
    year: ''
  },
  {
    quote: 'Do not take life too seriously. You will never get out of it alive.',
    source: 'Elbert Hubbard',
    citation: '',
    year: ''
  },
  {
    quote: 'A day without sunshine is like, you know, night.',
    source: 'Steve Martin',
    citation: '',
    year: ''
  },
  {
    quote: 'Talk is cheap. Show me the code.',
    source: 'Linus Torvalds',
    citation: 'Citation',
    year: '2000'
  },
  {
    quote: 'I don’t care if it works on your machine! We are not shipping your machine!',
    source: 'Vidiu Platon',
    citation: 'Citation',
    year: '2000'
  },
  {
    quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    source: 'Martin Golding',
    citation: 'Citation',
    year: '2000'
  }
];


/***
 * `getRandomQuote` function: this function gets a random number from 0 - length of the quotes array.
 * it loops to see if the number is the same as the index of the current quote
 * The loop is exited when the randomeNumber is different than the current quote index.
 * We then assign that randomNumber to the quoteNumber to remember for next time.
 * Return the random quote object.
***/
function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  while(randomNumber === quoteNumber){
    randomNumber = Math.floor(Math.random() * quotes.length);
  }
  quoteNumber = randomNumber;
  
  return quotes[randomNumber];
}

/** 
 * `printQuote` function
 * This funciton concatenates all the HTML needed to put the quote into the webpage.
 * It checks to see if there is a citation and year and adds them accordingly.
***/
function printQuote(){
  const currentQuote = getRandomQuote();
  let html = `
  <p class="quote">${currentQuote.quote}</p>
  <p class="source">${currentQuote.source}
    `;
  if(currentQuote.citation !== ''){
    html += `<span class="citation">${currentQuote.citation}</span>`;
  }
  if(currentQuote.year !== ''){
    html += `<span class="year">${currentQuote.year}</span>`;
  }
  html += `</p>`
    document.querySelector('main').innerHTML = html;
}

printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);