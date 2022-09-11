/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Footer.css'

export default props => 
    <div className="footer">
        <ul className="info-web">
            <li>Contato</li>
            <li>API</li>
            <li>Termos de Serviço</li>
            <li>Desenvolvedores</li>
            <li>Suporte</li>
            <li>Sobre</li>
        </ul>
        <hr/>
        <ul className="icons-media">
            <li><a href="https://www.instagram.com" target="_blank" ><i className="fa fa-instagram"></i></a></li>
            <li><a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook-square"></i></a></li>
            <li><a href="https://www.linkedin.com/in/kayo-henrique-b11766104/" target="_blank"><i className="fa fa-linkedin"></i></a></li>   
        </ul>
        <span>&copy; Copyright 2021 Diamond Music</span>
    </div>