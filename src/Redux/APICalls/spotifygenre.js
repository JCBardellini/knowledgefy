import axios from "axios";

export const popGenre = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/genre_view/',
  params: {
    id: '0JQ5DAqbMKFEC4WFtoNRpw', 
    content_limit: '20', 
    limit: '40'
    },
  headers: {
    'X-RapidAPI-Key': '3ea63469f9msh0dfee8fc9b6e8ffp1c14ffjsnd74cc942e81e',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
  }
};

export const fetchPopGenreItems = async () => {
  try {
    const response = await axios.request(popGenre);
    return response.data.content.items;
  } catch (error) {
    console.error(error);
    return [];
  }
};




