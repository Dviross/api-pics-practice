import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID sIFFbGe6OHHnuE59uCf4zRryUnZ5u2QfJDESOiAxBno'
        },
        params:{
            query: term,
        }
    });
    return response.data.results;
}

export default searchImages;
