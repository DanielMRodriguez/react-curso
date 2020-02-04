import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utlis/gravatar';
import { logoutRequest } from '../actions/index';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const handleLogOut = () => {
    props.logoutRequest({});
  };

  const { user } = props;
  //debugger;
  const hasUser = typeof user !== 'undefined' ? Object.keys(user).length > 0 : false;
  console.log(hasUser);

  return (
    <header className='header'>

      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.emai} /> :
            <img src={userIcon} alt='' />}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ?
            <li><a href='/'>{user.name}</a></li> :
            null}

          {hasUser ?
            <li><a href='#logout' onClick={handleLogOut}>Cerrar Sesión</a></li> : (
              <li>
                <Link to='/login'>
                Iniciar sesión
                </Link>
              </li>
            )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

