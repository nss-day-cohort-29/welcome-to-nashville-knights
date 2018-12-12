let parksearchButton = document.querySelector('#parks-search-button');
parksearchButton.addEventListener("click", function () {
    let parksSearch = document.querySelector('#parks-search');
    let parkInputValue = parksSearch.value;

    data.getParks(parkInputValue)
        .then(parkResultsArray => {
            console.log(parkResultsArray);
            parkResultsArray.forEach(onePark => {
            myResults.appendResults(onePark.park_name, onePark.mapped_location_address);   
        })
    })
})
let saveParksButton = document.getElementById("save-parks");
let body = document.querySelector("body");

body.addEventListener("click", () => {
    if (event.target.id === "save-parks"){
        let parkInfo = document.getElementById("parkinfo")
        myItinerary.appendItinerary(parkInfo)
        console.log(event.target.childNodes) 
    }
        else {
          console.log("no")  
         }
    // let parkEvent = getElementById('parkDIV').event.target.childNodes;
        // console.log("parkEvent", parkEvent)
    //in this function we want to get the value from the button and the value is whatever the name and adrress
})
   
