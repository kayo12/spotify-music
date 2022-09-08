import './Login.css'

// const CLIENT_ID = 'c0fe3aacf5e3425cbbca4000d51f9255'
// const REDIRECT_URI = 'http://localhost:3000'
// const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
// const RESPONSE_TYPE = 'token'


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const REDIRECT_URI = process.env.REACT_APP_REDIRECT
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'token'
const scopes = [
     'user-read-currently-playing',
     'user-read-recently-played',
     'user-read-playback-state',
     'user-top-read',
     'user-modify-playback-state'
     ]

const login =  props => 
    <div>
         <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scopes=${scopes.join("%20")}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
     </div>
    

export default login