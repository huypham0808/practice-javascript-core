const getListPokemon = (apiEndPoint, callback) => {
    const requestAPI = new XMLHttpRequest();
    requestAPI.open("GET", apiEndPoint);
    requestAPI.onload = () => {
        if(requestAPI.status >= 200 && requestAPI.status <= 299){
            const responseData = JSON.parse(requestAPI.responseText)
            callback(responseData);
        }
    }
    requestAPI.send();
}
getListPokemon("https://pokeapi.co/api/v2/pokemon?limit=10", (responseData) => {
    console.log("Response data", responseData);
    document.getElementById('pokemon-list').innerHTML = responseData.results.map(item => `<li>${item.name}</li>`).join('')
})