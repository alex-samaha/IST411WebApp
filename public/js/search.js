$(document).ready(function() {

    $('#searchButton').on('click', function() {
        let searchTerm = $('input#searchTerm').val();
        getSearchResults(searchTerm);
    });

});


function getSearchResults(searchTerm) {
    var test = $('#results');
    $.ajax({
        type: 'POST',
        url: '/research/papers',
        data: {
            searchTerm: searchTerm
        },
        success: function(data) {
            console.log("Success");
            console.log(data);
            loadResults(data);
        },
        error: function(err) {
            console.log(err);
        }
    });
}

function loadResults(data) {
    // Empty out the current search results
    $('#search-results').empty();

    let resultsDiv = $('#search-results');
    let results = data.results

    // make sure results are returned
    if(results.length > 0) {
        for(let i = 0; i < results.length; i++) {
            let resultsHTML = `
            <div class="card" style="width: 60rem;">
                <div class="card-body">
                    <h5 class="card-title">${results[i].title}</h5>
                    <p class="card-text">${results[i].description}</p>
                    <a href="${results[i].url}" class="card-link">Research Paper</a>
                </div>
            </div>
            <br>
            `;
        resultsDiv.append(resultsHTML);
        }
    }

    else {
        resultsDiv.append('<h3>No results found from the search</h3');
    }

}