/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import SpotifyApi from "spotify-web-api-js";
import "./MyList.css";

const initial = {
  title: "Lista de musicas e generos",
  msg: "o que acha de escolher uma musica para alegrar seu dia",
  listImgs: [""],
  listTracks: [],
  currentMusic: "",
  loginMsg: "",
};

const icons = {
  pause: "fa-pause",
  play: "fa-play",
  oldIcons: "fa-play",
};

const SpotApi = new SpotifyApi();
export default class Mylist extends Component {
  state = { ...initial, ...icons };

  getArtist() {
    console.log(`TOKEN: ${this.props.token.length}`);

    if (this.props.token.length > 9) {
      SpotApi.setAccessToken(this.props.token);
    } else {
      console.log(this.state.loginMsg);
    }
    console.log();

    let track = document.querySelector("#inputSearch").value;
    console.log(`TRACK: ${track}`);
    SpotApi.searchTracks(track).then(
      (data) => {
        console.log("Information data", data);
        if (this.state.loginMsg !== "" || this.state.loginMsg !== null) {
          this.setState({ listTracks: data.tracks.items });
        } else {
          this.setState({ loginMsg: "" });
        }
      },
      (err) => {
        console.error(err);
        err.status === 401 &&
          this.setState({ loginMsg: "Login necessario para realizar a busca" });
      }
    );
  }

  playtrack(event, trackId) {
    let trackSong = document.getElementById(trackId);
    console.log(event.target.className);
    console.log("Lista de classe" + trackSong.classList);
    let dur = "";

    if (trackSong.currentTime === 0) {
      if (!this.state.currentMusic.paused && this.state.currentMusic !== "") {
        this.state.oldIcons.remove(this.state.oldIcons.item(1));
        this.state.oldIcons.add(this.state.play);
        this.state.currentMusic.load();
      }
      event.target.classList.remove(this.state.play);
      event.target.classList.add(this.state.pause);
      trackSong.play();
      dur = trackSong.duration;
      console.log(`duration: ${dur}`);
    } else {
      event.target.classList.remove(this.state.pause);
      event.target.classList.add(this.state.play);
      trackSong.load();
    }
    this.setState({ oldIcons: event.target.classList });
    this.setState({ currentMusic: trackSong });
  }

  render() {
    return (
      <div className="info-musics">
        <div className="container-Search">
          <input
            type="text"
            name="search"
            id="inputSearch"
            placeholder="Digite o nome da Musica, Albuns, artistas..."
          />
          <button onClick={() => this.getArtist()}>Buscar</button>
        </div>
        <div className="card">
          {this.state.loginMsg ? (
            <span className="errMsg"> {this.state.loginMsg} </span>
          ) : null}
          {this.state.listTracks.map((element, index) => {
            return (
              <div className="card-list-album" key={index}>
                <img src={element.album.images[0].url} className="img-album" />
                <progress
                  id={element.id + `_progress`}
                  value="15"
                  max="100"
                  className="card-progress"
                ></progress>
                <div className="item-album">
                  <span className="music-name">{element.album.name}</span>
                  <button
                    className="fa fa-play"
                    onClick={(e) => this.playtrack(e, element.id)}
                  ></button>
                  <audio id={element.id} src={element.preview_url}></audio>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
