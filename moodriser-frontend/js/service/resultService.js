async function get(message) {
    return await fetchAPI(message);
}

async function fetchApi(message) {
    const api = "https://gcc-backend-s8wv.onrender.com/api/get/playlist/";

    const response = await fetch(`${api}${message}`);
    const body = await response.json();

   

    return body;
}

async function fetchAPI(message) {
    try {
        const user = await fetchApi(message);
        /* user.data[0].attributes.canonicalTitle.array.forEach(element => {
            
        }); */
        
      return user;

        
    } catch (err) {
        console.log(err.message);
    }

}

export default {get};