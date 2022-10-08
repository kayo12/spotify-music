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
  oldTrack: "",
  msgLogin: "Necessario realizar login no spotify para exibir seus albuns",
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
          console.log("Itens: " + data);
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
    console.log(`ID da track ${trackId}`);
    SpotiApi.getTrack(trackId).then(
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
    const albumList = this.state.playlist.map((current, index) => (
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
    ));

    if (this.state.playlist.length > 0) return <ul>{albumList}</ul>;

    return (
      <div className="msg-login">
        <span>{this.state.msgLogin}</span>
      </div>
    );
  }

  listMusicPlay() {
    const playlist = this.state.playlistTrack.map((current, index) => (
      <li key={index}>
        <button
          className={
            current.track.preview_url === null
              ? "fa fa-times-circle"
              : "fa fa-play-circle"
          }
          value={current.track.id}
          onClick={(e) => {
            this.getPlayerTrack(e.target.value);
          }}
        ></button>
        {index + 1} - {current.track.name}
      </li>
    ));

    return <ul>{playlist}</ul>;
  }

  controlPlayer(event, currentMusic) {
    console.log(`Entrou dentro do controlPlayer`);
    let audio = document.getElementById(currentMusic.id);
    this.setState({ oldTrack: audio.id });
    let control = Number(event);
    console.log(`control: ${control}`);
    switch (control) {
      case 1:
        let progress = document.getElementById("progress-current");
        if (audio.currentTime === 0) {
          audio.load();
          audio.play();
          setInterval(function () {
            let seconds = audio.currentTime.toFixed(2);
            let porcent = (Number.parseFloat(seconds) / audio.duration) * 100;
            progress.style.width = Number(porcent).toFixed(0).toString() + "%";
          }, 1);
        } else {
          audio.load();
        }
        break;
      case "next":
        let next = this.state.playlistTrack.findIndex((find) => {
          return find.track.id === currentMusic.id;
        });
        this.getPlayerTrack(this.state.playlistTrack[next + 1].track.id);
        break;
      case "prev":
        let prev = this.state.playlistTrack.findIndex((find) => {
          return find.track.id === currentMusic.id;
        });
        this.getPlayerTrack(this.state.playlistTrack[prev - 1].track.id);
        break;
      default:
        console.log(`Deu ruim - control:  ${control}`);
        break;
    }
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
            <audio
              id={this.state.currentTrack.id}
              src={this.state.currentTrack.preview_url}
            ></audio>
            <div className="settings-music">
              <div className="progress-bar">
                <div id="progress-current">
                  <audio src=""></audio>
                </div>
              </div>
              <div className="setup-music">
                <button
                  value="replay"
                  onClick={(e) => {
                    this.controlPlayer(e.target.value, this.state.currentTrack);
                  }}
                >
                  <i className="fa fa-undo"></i>
                </button>
                <button
                  value="prev"
                  onClick={(e) => {
                    this.controlPlayer(e.target.value, this.state.currentTrack);
                  }}
                >
                  <i className="fa fa-backward"></i>
                </button>
                <button
                  value="1"
                  onClick={(e) => {
                    this.controlPlayer(e.target.value, this.state.currentTrack);
                  }}
                >
                  <i className="fa fa-play"></i>
                </button>
                <button
                  value="next"
                  onClick={(e) => {
                    this.controlPlayer(e.target.value, this.state.currentTrack);
                  }}
                >
                  <i className="fa fa-forward"></i>
                </button>
                <button
                  value="val"
                  onClick={(e) => {
                    this.controlPlayer(e.target.value, this.state.currentTrack);
                  }}
                >
                  <i className="fa fa-volume-up"></i>
                </button>
              </div>
            </div>
          </div>
          {this.state.albumOpen ? this.listMusicPlay() : this.listPlaylist()}
        </div>
      </div>
    );
  }
}
