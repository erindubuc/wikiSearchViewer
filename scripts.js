/*global $*/
/*global fetch*/
/*global searchQuery*/
$(document).ready(function(){
    // creates search form to add input
    const form = document.querySelector('.search-form');
    form.addEventListener('submit', handleSubmit);
    // what happens after the form has been submitted
    function handleSubmit(event) {
    // prevent page from reloading when form is submitted
    event.preventDefault();
    //search input and results
    const searchInput= document.querySelector('#search-form-input').value;
    // input.trim to remove whitespace from the input
    const searchQuery = searchInput.trim();
    // call getResults and pass it the `searchQuery`
    getResults(searchQuery);

function getResults(query) {
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        const results = data.query.search;
        displayResults(results);
        })
    .catch(() => console.log('An error occurred'));
}
function displayResults(results) {
   // need a reference to `#searchResults` to display
  const searchResults = document.querySelector('#searchResults');
  // display results to DOM
  searchResults.innerHTML = '';
  // Loop through results array
  results.forEach(result => {
  //result here represents each object in our array
  
//   encode the URL so that special characters & spaces can be converted into a format that can be transmitted
    const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);
    
    searchResults.insertAdjacentHTML('beforeend',
      `<div class="resultItem">
        <h3 class="resultItem-title">
          <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
        </h3>
        <span class="resultItem-snippet">${result.snippet}</span><br>
        <a href="${url}" class="resultItem-link" target="_blank" rel="noopener">${url}</a>
      </div>`
        );
    });
    }
    }
});

// REQUIREMENTS:
// I can click a button to see a random Wikipedia entry.
// I can search for Wikipedia articles in a search box and view the resulting Wikipedia entries.
    // random search after clicking on wiki icon
    // search form needs trigger search to wiki
    // button click event needs to trigger results to be sent back