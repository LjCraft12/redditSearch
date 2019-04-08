import reddit from './redditApi';
const imageUrl = 'data:image/png;base64,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'

// Variables for form inputs
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// Event listener on the form
searchForm.addEventListener('submit', e => {
    // Get search field value
    const searchTerm = searchInput.value;
    // Get sort value
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    // Get search result limit
    const limit = document.getElementById('limit').value;

    // Check for empty input field
    if (searchTerm === '') {
        //    Show error message
        showMessage('Please add a search term', 'alert-danger');
    }

    // Clear input
    searchInput.value = '';

    // Search reddit api
    reddit.search(searchTerm, limit, sortBy)
        .then(results => {
            console.log(results)
            let output = '<div class="card-columns">';
            // Loop thru the results
            results.forEach(post => {
                // Check for image on a post
                const image = post.preview ? post.preview.images[0].source.url : imageUrl;
                output += `
                    <div class="card"">
  <img src="${image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Title: ${post.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Author: ${post.author}</h6>
    <p class="card-text">${truncateText(post.selftext, 100)}</p>
    <a href="${post.url}" target="_blank" class="btn btn-outline-dark">Read More</a>
  </div>
</div>
                    `
            });
            output += '</div>';
            document.getElementById('results').innerHTML = output;
        });

    e.preventDefault();
});

// Show message
function showMessage(message, className) {
    // Create div to hold message
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
//    Get parent container for the message to display
    const searchContainer = document.getElementById('search-container');
    const search = document.getElementById('search');

//    Prepend message
    searchContainer.insertBefore(div, search);

//    Clear message
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
}

// Truncate text
function truncateText(text, limit) {
    const shortened = text.indexOf(' ', limit);
    if (shortened === -1) return text;
    return text.substring(0, shortened);
}
