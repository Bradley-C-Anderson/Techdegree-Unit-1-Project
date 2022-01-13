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
    year: '',
    character: ``
  },
  {
    quote: 'Do not take life too seriously. You will never get out of it alive.',
    source: 'Elbert Hubbard',
    citation: '',
    year: '',
    character: ``
  },
  {
    quote: 'A day without sunshine is like, you know, night.',
    source: 'Steve Martin',
    citation: '',
    year: '',
    character: ``
  },
  {
    quote: `Toto, I've a feeling we're not in Kansas anymore`,
    source: 'Judy Garland',
    citation: 'The Wizard of Oz',
    year: '1939',
    character: `Dorothy`
  },
  {
    quote: `I don't care if it works on your machine! We are not shipping your machine!`,
    source: 'Vidiu Platon',
    citation: '',
    year: '',
    character: ``
  },
  {
    quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    source: 'Martin Golding',
    citation: '',
    year: '',
    character: ``
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
 * Credit to: Chris Coyier on Dec 10, 2009 (Updated on Feb 19, 2020)
 * https://css-tricks.com/snippets/javascript/random-hex-color/
 * This was extra, I hope it's ok since I'm not trying for exceeds expectations.
 **/

const setBgColor = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = '#' + randomColor;
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
  if(currentQuote.character !== ''){
    html += `<span class="year">${currentQuote.character}</span>`;
  }
  html += `</p>`
    document.querySelector('main').innerHTML = html;
  
  
}
//calls printQuote() once to make sure the webpage has a quote when it opens.
printQuote();



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

//event listener to change background color
document.getElementById('load-quote').addEventListener("click", setBgColor, false);