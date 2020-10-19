import React from 'react';
import Api from '../../Api';
import login from '../../assets/images/login.svg';
import './styles.css';

export default ({onReceive}) => {

  const handleFacebookLogin = async () => {
    let result = await Api.fbPopup();
    if (result) {
      onReceive(result.user);
    } else {
      alert('Erro!');
    }
  }

  return (
    <div className="login">
      <img src={login} alt="Login Facebook"/>
      <div className="login--button">
        <h1>Faça o seu Login</h1>
        <button onClick={handleFacebookLogin}>Logar com Facebook</button>
      </div>
    </div>
  );
}