import React from 'react'
import './Player.css'
import imgPlayer from '../assests/img/music-song.png'
// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
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
                        <button><i class="fa fa-undo"></i></button>
                        <button><i class="fa fa-backward"></i></button>
                        <button><i class="fa fa-play"></i></button>
                        <button><i class="fa fa-forward"></i></button>
                        <button><i class="fa fa-volume-up"></i></button>
                    </div>
                </div>
            </div>
            <ul>
                <li><i className="fa fa-play-circle"></i> 1 Masculinidade</li>
                <li><i className="fa fa-play-circle"></i> 2 Lista de musicas</li>
                <li><i className="fa fa-play-circle"></i> 3 Lista de musicas</li>
                <li><i className="fa fa-play-circle"></i> 3 Lista de musicas</li>
                <li><i className="fa fa-play-circle"></i> 4 Lista de musicas</li>
                <li><i className="fa fa-play-circle"></i> 5 Lista de musicas</li>
                <li><i className="fa fa-play-circle"></i> 6 Lista de musicas</li>
                <li><i className="fa fa-play-circle"></i> 7 Lista de musicas</li>
                <li><i className="fa fa-play-circle"></i> 8 Lista de musicas</li>
                <li><i className="fa fa-play-circle"></i> 9 Lista de musicas</li>
                <li><i className="fa fa-play-circle"></i> 10 Lista de musicas</li>
            </ul>
        </div>
    </div>