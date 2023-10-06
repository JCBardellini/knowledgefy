

// authorization code
export const authEndpoint = "https://accounts.spotify.com/authorize"
// client id 
const clientId = 'ca1f38903fec47948b475ade925a5e7c';
//redirected uri
const redirectUri = 'http://localhost:5173';
// scopes that we are going to get
const scopes = [
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-top-read",
  "user-read-recently-played",
]

// pulling the access token from the response 
export const getTokenFromUrl = () => {
  return window.location.hash.substring(1).split("&").reduce((initial, item) => {
    let parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1])

    return initial;
  }, {})
}
// getting the token is working (remember only valid for one hour)
const tokenData = getTokenFromUrl();
// console.log("token", tokenData);

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(" ")}&response_type=token&show_dialog=true`;
