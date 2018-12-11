const domBuilder = {
    name: "Dom Builder Component",
    appendInputForm() {
        let displayContainer = document.querySelector("#display-container");

        displayContainer.innerHTML =
            (`
    <h1>Welcome to Nashville!</h1>
    <h2>Search for stuff to do today</h2>
    
    <section id="sectionid">
        <select id="parks-search">
            <option value="ada_accessible">Handicap Accessible</option>
            <option value="baseball_fields">Baseball Fields</option>
            <option value="basketball_courts">Basketball Courts</option>
            <option value="dog_park">Dog Park</option>
            <option value="hiking_trails">Hiking Trails</option>
            <option value="swimming_pool">Swimming Pool</option>
            <option value="disc_golf">Disc Golf</option>
        </select>
        <button type="button" id="search-button">Search Parks</button>
    </section>

    <section id="sectionid">
        <input type= "text" name="concerts" id="concerts-search" value="restaurants by food type">
        <button type="button" id="search-button">Search Concerts</button>
    </section>

    <section id="sectionid">
        <input type= "text" name="restaurants" id="restaurants-search" value="meetups by topic">
        <button type="button" id="search-button">Search Restaurants</button>
    </section>
    
    <section id="sectionid">
        <input type= "text" name="meetups" id="meetups-search" value="concerts by genre">
        <button type="button" id="search-button">Search MeetUps</button>
    </section>
    `
            )
    }
}

