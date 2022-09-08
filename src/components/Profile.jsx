import React from "react";
import "./Profile.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <div className="profile-view">
    <div className="profile-list">
      <div className="icon-info">
        <i class="fa fa-user"></i>
      </div>
      <ul className="profile-config">
        <li>Meus Dados</li>
        <li>Privacidade</li>
        <li>Configurações</li>
        <li>Ajuda</li>
        <li>Sair</li>
      </ul>
    </div>
    <div className="profile-info">
      <form id="profile-form" action="" method="get">
        <label htmlFor=""> Nome: 
          <input type="text" value="Carlos Henrique"/>
        </label>
        <label htmlFor="">  E-mail:
          <input type="text" value="Carloshe@gmail.com" readonly/>
        </label>
        <label htmlFor=""> Cel:
           <input type="text"  value="11 94871-4874" readonly/>
        </label>
        <label htmlFor=""> Endereço: 
          <input type="text" readonly value="travessa das andorinhas"/>
        </label> 
        <div className="btn">
            <button className="saveForm">
              Editar
            </button>
            <button className="saveForm">
              Salvar
            </button> 
        </div>    
      </form>
    </div>
  </div>
);
