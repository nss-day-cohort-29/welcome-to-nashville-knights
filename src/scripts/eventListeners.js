let searchButton = document.querySelector('#search-button');
searchButton.addEventListener("click", function () {
    let parksSearch = document.querySelector('#parks-search');
    let parkInputValue = parksSearch.value;

    data.getParks(parkInputValue)
        .then(parkResultsArray => {
            console.log(parkResultsArray);
        })
})

