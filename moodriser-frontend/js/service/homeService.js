function render(path = `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0`) {
    return showApi(path);
}

async function fetchApi(path) {
    const api = path;

    const response = await fetch(api);
    const body = await response.json();

    if (!response.ok) {
        throw new Error(body.message); // throwing inside async rejects the returned promise
    }

    return body;
}

async function showApi(path) {
    try {
        const user = await fetchApi(path);
        /* user.data[0].attributes.canonicalTitle.array.forEach(element => {
            
        }); */
        
      return user;

        
    } catch (err) {
        console.log(err.message);
    }

}

export default {render};