let parksearchButton = document.querySelector('#parks-search-button');
let parkssaveButton = document.querySelector('#parks-save');
let savePark = document.querySelector('#parkInfo');

parksearchButton.addEventListener("click", function () {
    let parksSearch = document.querySelector('#parks-search');
    let parkInputValue = parksSearch.value;

    data.getParks(parkInputValue)
        .then(parkResultsArray => {
            console.log(parkResultsArray);
        })
})

