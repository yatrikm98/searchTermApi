import axios from "axios";

const searchApi = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID MKIH-8swdjyLCldQyV2kz8KqoRZzlC6kaKNip7Wfamk'
        },
        params: {
            query: term
        }
    })

    return response.data.results
}

export default searchApi;