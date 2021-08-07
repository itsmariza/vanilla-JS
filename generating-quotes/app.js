// step1. make variables
const card = document.querySelector('#card');
const loader = document.querySelector('#loader');
const displayQuote = document.querySelector('#display-Quote');
const displayAuthor = document.querySelector('#display-Author');
const btnTwitter = document.querySelector('#btn-Twitter');
const btnNewQuote = document.querySelector('#btn-NewQuote');

let apiQuotes = [];

// 2. show and hide loader
function showLoader() {
  card.hidden = true;
  loader.hidden = false;
}

function hideLoader() {
  card.hidden = false;
  loader.hidden = true;
}

//3. make function for new quote
function newQuote() {
  showLoader();
  // const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //if taking quotes from api, use the above.
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  if (!quote.author) {
    displayAuthor.innerText = 'unknown';
  } else {
    displayAuthor.innerText = quote.author;
  }
  if (displayQuote.innerText > 120) {
    displayQuote.classList.add('long-quote');
  } else {
    displayQuote.classList.remove('long-quote');
  }
  displayQuote.innerText = quote.text;
  hideLoader();
}

// 4. get quote from api
// async function getQuotes() {
//   showLoader();
//   const apiUrl = 'https://xxxxxxsensoredxxxxx/api/quotes';
//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     newQuote();
//   } catch (e) {
//     console.log('OOps... there is an error.........');
//   }
// }

//function for posting tweet
function postTweet() {
  const tweetUrl = `https://twitter.com/intent/tweet?text="${displayQuote.innerText}" - ${displayAuthor.innerText} -`;
  window.open(tweetUrl, '_blank');
}

//. add event listeners
btnTwitter.addEventListener('click', postTweet);

btnNewQuote.addEventListener('click', newQuote);

//onload - if quote from api-
// getQuotes();
