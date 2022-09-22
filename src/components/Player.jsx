import React, { Component } from "react";
import "./Player.css";
import imgPlayer from "../assests/img/music-song.png";
import SpotifyApi from "spotify-web-api-js";
// eslint-disable-next-line import/no-anonymous-default-export
const SpotiApi = new SpotifyApi();
const stateInitial = {
  currentUser: "",
  playlist: [],
  playlistTrack: [],
  albumOpen: false,
  currentTrack: "",
  msgLogin: "Realize login no spotify para exibir seus albuns"
};

export default class Player extends Component {
  state = { ...stateInitial };

  componentWillMount() {
    SpotiApi.setAccessToken(this.props.token);
    SpotiApi.getMe().then(
      (data) => {
        this.setState({ currentUser: data.display_name });
        console.log(data);
        console.log(`ID do usuario: ${this.state.currrentUser}`);
      },
      (err) => {
        console.log(`Erro ${err}`);
      }
    );
    
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("entrou no parameter");
    if (prevState.currentUser !== this.state.currentUser) {
      SpotiApi.getUserPlaylists(this.state.currentUser).then(
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
  }

  getPlaylistTracks(event) {
    console.log(`valor do id ${event.target.value}`);
    SpotiApi.getPlaylistTracks(event.target.value).then(
      (data) => {
        console.log(data);
        this.setState({ playlistTrack: data.items });
        this.setState({ albumOpen: true });
        this.setState({ playlisId: data.items });
        console.log(data);
      },
      (err) => {
        console.log(err);
        console.log("Entrou no error");
      }
    );
  }

  getPlayerTrack(trackId) {
    console.log(`ID da track ${trackId.target.value}`);
    SpotiApi.getTrack(trackId.target.value).then(
      (data) => {
        console.log("Pegou o track ID");
        this.setState({ currentTrack: data });
        console.log(this.state.currentTrack);
      },
      (err) => {
        console.log("Deu ruim ao pegar a track");
        console.log(err);
      }
    );
  }

  listPlaylist() {
    const albumList =
    this.state.playlist.length > 0 ? (
    this.state.playlist.map((current, index) => (
      <li key={current.id}>
        <button
          onClick={(e) => this.getPlaylistTracks(e)}
          value={current.id}
          className="btn-album-list fa fa-arrow-right"
        ></button>
        <span className="album-name">
          {index + 1} - {current.name}
        </span>
      </li>
    ))
    ) : (
      <li class="msg-login">
        <span>{this.state.msgLogin}</span>
      </li>
    );
    return <ul>{albumList}</ul>;
  }

  listMusicPlay() {
    const playlist =
      
        this.state.playlistTrack.map((current, index) => (
          <li key={index}>
            <button
              className="fa fa-play-circle"
              value={current.track.id}
              onClick={(e) => {
                this.getPlayerTrack(e);
              }}
            ></button>{" "}
            {index + 1} - {current.track.name}
          </li>
        ))
       


    return <ul>{playlist}</ul>;
  }

  render() {
    return (
      <div className="player">
        <div className="list-music">
          <div className="control-music">
            {
              <img
                className="player-img"
                src={
                  this.state.currentTrack === ""
                    ? imgPlayer
                    : this.state.currentTrack.album.images[1].url
                }
                alt="img-songs"
              />
            }
            <span className="player-name">{this.state.currentTrack.name}</span>
            <div className="settings-music">
              <div className="progress-bar">
                <div>
                  <audio src=""></audio>
                </div>
              </div>
              <div className="setup-music">
                <button>
                  <i className="fa fa-undo"></i>
                </button>
                <button>
                  <i className="fa fa-backward"></i>
                </button>
                <button>
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
            this.state.albumOpen ? (
              this.listMusicPlay()
            ) : (
              this.listPlaylist()
            )
         }
        </div>
      </div>
    );
  }
}
