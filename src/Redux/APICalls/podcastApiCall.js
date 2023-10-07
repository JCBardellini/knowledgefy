import axios from "axios";
// podcast request 
export const podcast = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/genre_view/',
  params: {
    id: 'podcasts-web',
    content_limit: '10',
    limit: '20'
  },
  headers: {
    'X-RapidAPI-Key': '3ea63469f9msh0dfee8fc9b6e8ffp1c14ffjsnd74cc942e81e',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};
// making the request
const fetchAndStorePodcastItems = async () => {
  try {
    const response = await axios.request(podcast);
    const podcastData = response.data.content.items;
    localStorage.setItem("podcastData", JSON.stringify(podcastData));
    return podcastData
  } catch (error) {
    console.error(error);
    return [];
  }
};
// we are checking if data is in local storage, or if we have to call the API
// we will be exporting this into our components
export const fetchPodcastItems = () => {
  const localPodcastData = localStorage.getItem("podcastData");
  if (!localPodcastData){
    return fetchAndStorePodcastItems();
  } else {
  return JSON.parse(localPodcastData)
  } 
}

