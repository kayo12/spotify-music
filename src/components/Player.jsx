import React, { Component, useEffect} from "react";
import "./Player.css";
import imgPlayer from "../assests/img/music-song.png";
import SpotifyApi from "spotify-web-api-js";
// eslint-disable-next-line import/no-anonymous-default-export

const SpotiApi = new SpotifyApi()

const stateInitial = {
  currrentUser : '',
  playlist: []
}

export default class Player extends Component {
  state = {...stateInitial}

  componentWillMount() {
    SpotiApi.setAccessToken(this.props.token);
    SpotiApi.getMe().then(
      (data) => {
        this.setState({currrentUser: data.id})
     console.log(`ID do usuario: ${this.state.currrentUser}`)
      },
      (err) => {
        console.log(`Erro ${err}`)
      }
    )
    SpotiApi.getUserPlaylists(this.state.currrentUser).then(
      (data) => {
        console.log("playlist do usuario: " + data);
      },
      (err) => {
          console.log(err)
      }
    )
  }


  getTopTracks(){
    
    console.log(`TOKEN PLAYER: ${this.props.token}`)
    // SpotiApi.setAccessToken(this.props.token);
    console.log("entrou no parameter")
    SpotiApi.getUserPlaylists('kayo047').then(
        (data) => {
            console.log("Information data", data);
        },

        (err) => {
          console.log(err)
          console.log("Entrou no error")      
        }
    )

  }

  render() {
    return (
      <div className="player">
        <div className="list-music">
          <div className="control-music">
            <img src={imgPlayer} alt="img-songs" />
            <span>Orochi - Balão</span>
            <div class="settings-music">
              <div className="progress-bar">
                <div></div>
              </div>
              <div className="setup-music">
                <button>
                  <i class="fa fa-undo"></i>
                </button>
                <button>
                  <i class="fa fa-backward"></i>
                </button>
                <button onClick={() => this.getTopTracks()}>
                  <i class="fa fa-play"></i>
                </button>
                <button>
                  <i class="fa fa-forward"></i>
                </button>
                <button>
                  <i class="fa fa-volume-up"></i>
                </button>
              </div>
            </div>
          </div>
          <ul>
            <li>
              <i className="fa fa-play-circle"></i> 1 Masculinidade
            </li>
            <li>
              <i className="fa fa-play-circle"></i> 2 Lista de musicas
            </li>
            <li>
              <i className="fa fa-play-circle"></i> 3 Lista de musicas
            </li>
            <li>
              <i className="fa fa-play-circle"></i> 3 Lista de musicas
            </li>
            <li>
              <i className="fa fa-play-circle"></i> 4 Lista de musicas
            </li>
            <li>
              <i className="fa fa-play-circle"></i> 5 Lista de musicas
            </li>
            <li>
              <i className="fa fa-play-circle"></i> 6 Lista de musicas
            </li>
            <li>
              <i className="fa fa-play-circle"></i> 7 Lista de musicas
            </li>
            <li>
              <i className="fa fa-play-circle"></i> 8 Lista de musicas
            </li>
            <li>
              <i className="fa fa-play-circle"></i> 9 Lista de musicas
            </li>
            <li>
              <i className="fa fa-play-circle"></i> 10 Lista de musicas
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
