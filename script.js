const btnEl = document.getElementById('btn');
const apiURL = 'https://api.quotable.io/random';
const authorEl = document.getElementById('author');
const quoteEl = document.getElementById('quote');

async function getQuote() {
  try {
    btnEl.disabled = true;
    btnEl.innerText = 'Loading...';
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = '~ ' + quoteAuthor;
    btnEl.disabled = false;
    btnEl.innerText = 'Get a quote';
    console.log(data);
  } catch (error) {
    console.log(error);
    quoteEl.innerText = 'An error has occurred, please try again later';
    authorEl.innerText = 'An error has occurred';
  }
}

btnEl.addEventListener('click', getQuote);
