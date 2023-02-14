
const loadQuote = () => {
   
    fetch( 'https://api.kanye.rest')
    .then(res => res.json())
    .then(data => displayQuote(data))
}


const displayQuote = quote => {


      const blockQUOTE = document.getElementById('quote');

      blockQUOTE.innerText = quote.quote;



}