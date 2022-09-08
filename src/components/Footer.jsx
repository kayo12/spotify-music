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
            <li><i className="fa fa-instagram"></i></li>
            <li><i className="fa fa-facebook-square"></i></li>
            <li><i className="fa fa-linkedin"></i></li>   
        </ul>
        <span>&copy; Copyright 2021 Diamond Music</span>
    </div>