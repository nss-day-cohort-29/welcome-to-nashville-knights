const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', function(){
    let parksSearch = document.querySelector('#parks-search')
    let parkInputValue = parksSearch.value;
    data.getParks(parkInputValue)
    //look at jeisis eventlistneres.js in grunt 
} )