import axios from "axios";

const audioBook = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/genre_view/',
  params: {
    id: '0JQ5DAqbMKFETqK4t8f1n3',
    content_limit: '10',
    limit: '20'
  },
  headers: {
    'X-RapidAPI-Key': '3ea63469f9msh0dfee8fc9b6e8ffp1c14ffjsnd74cc942e81e',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};
// setting a function to call the api and store in local storage
const fetchAndStoreAudioBooksItems = async () => {
  try {
    const response = await axios.request(audioBook);
    const audioBookData = response.data.content.items;
    localStorage.setItem('audioBookData', JSON.stringify(audioBookData));
    return audioBookData
  } catch (error) {
    console.error(error);
    return [];
  }
};

// the function we are going to export 
export const fetchAudioBookItems = async () => {
    const localAudioBookData = localStorage.getItem("audioBookData")
    if (!localAudioBookData) {
        return fetchAndStoreAudioBooksItems();
    } else {
        return JSON.parse(localAudioBookData)
    }
}