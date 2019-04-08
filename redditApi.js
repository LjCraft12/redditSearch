export default {
    search: function (searchTerm, limit, sortby) {
        // Use javascript fetch api to reach out to Reddit using the passed in search term
        // Return the fetch api as a promise
        return fetch(`http://www.reddit.com/search.json?q=${searchTerm}&${sortby}&limit=${limit}`)
        // convert the object response to json format
            .then(res => res.json())
            // Use map to return only the data object of the data set retrieved
            .then(data => data.data.children.map(data => data.data))
            .catch(err => {
                console.log(`Error retrieving result ${err}`);
            })
    }
}
