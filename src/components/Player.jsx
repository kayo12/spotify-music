import React, { Component } from "react";
import "./Player.css";
import imgPlayer from "../assests/img/music-song.png";
import SpotifyApi from "spotify-web-api-js";
// eslint-disable-next-line import/no-anonymous-default-export

const SpotiApi = new SpotifyApi();

const stateInitial = {
  currentUser: "",
  playlist: [],
};

export default class Player extends Component {
  state = { ...stateInitial };

  componentWillMount() {
    SpotiApi.setAccessToken(this.props.token);
    SpotiApi.getMe().then(
      (data) => {
        this.setState({ currentUser: data.display_name });
        console.log(data);
        //  console.log(`ID do usuario: ${this.state.currrentUser}`)
      },
      (err) => {
        console.log(`Erro ${err}`);
      }
    );
  }

  getTopTracks() {
    console.log(`TOKEN PLAYER: ${this.props.token}`);
    SpotiApi.setAccessToken(this.props.token);
    console.log("entrou no parameter");
    SpotiApi.getUserPlaylists("kayo047").then(
      (data) => {
        console.log(data);
        this.setState({ playlist: data.items });
        console.log(data);
      },
      (err) => {
        console.log(err);
        console.log("Entrou no error");
      }
    );
  }

  listPlaylist() {
    const albumList = this.state.playlist.map((current, index) => (
      <li key={current.id}>
        <a onClick={current.id} value={current.id} className="btn-album-list">
          {index + 1} - {current.name}
        </a>
      </li>
    ));
    return <ul>{albumList}</ul>;
  }

  listPlayMusic() {
    const playlist = this.state.playlist.map((current, index) => (
      <li key={index}>
        <i className="fa fa-play-circle"></i> {current.name}
      </li>
    ));
  }

  render() {
    return (
      <div className="player">
        <div className="list-music">
          <div className="control-music">
            <img src={imgPlayer} alt="img-songs" />
            <span>Orochi - Balão</span>
            <div className="settings-music">
              <div className="progress-bar">
                <div></div>
              </div>
              <div className="setup-music">
                <button>
                  <i className="fa fa-undo"></i>
                </button>
                <button>
                  <i className="fa fa-backward"></i>
                </button>
                <button onClick={() => this.getTopTracks()}>
                  <i className="fa fa-play"></i>
                </button>
                <button>
                  <i className="fa fa-forward"></i>
                </button>
                <button>
                  <i className="fa fa-volume-up"></i>
                </button>
              </div>
            </div>
          </div>
          {

          this.listPlaylist()
          
          }
        </div>
      </div>
    );
  }
}
