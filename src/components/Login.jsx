import './Login.css'

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
    <div className='login-spoti'>
         <button className='btn-login-spoti fa fa-spotify'><a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scopes=${scopes.join("%20")}&response_type=${RESPONSE_TYPE}`}>Login Spotify</a></button>
    </div>

export default login