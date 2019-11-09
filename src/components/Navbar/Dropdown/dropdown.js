import React, { Component } from 'react';
import './dropdown.scss';
import icon from '../../../assets/icons/lines.png'
import Signup from '../Signin/signin';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginChange } from '../../../actions/accountActions';
import * as ROUTES from '../../../common/routes';

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-label')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

class Dropdown extends Component{ 
  render() {
    return (
      <div className="dropdown">
        <Signup />
        <div onClick={myFunction} className="dropdown-label">
          Settings
          <img src={icon} alt="Dropdown Arrow" className="icon"></img>
        </div>
        <ul id="myDropdown" className="dropdown-content">
          <Link to={ROUTES.LANDING} style={{ textDecoration: 'none' }}>
            <li>Home</li>
          </Link>
          <Link to={ROUTES.RESUME} style={{ textDecoration: 'none' }}>
            <li>Resume</li>
          </Link>
          <Link to={ROUTES.SETTINGS} style={{ textDecoration: 'none' }}>
            <li>Settings</li>
          </Link>
        </ul>
      </div>
    );
  }
}

Signup.propTypes = {
  loginChange: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired,
  user: PropTypes.string
}

const mapStateToProps = state => ({
  login: state.login.value,
  user: state.login.name
});

export default connect(mapStateToProps, { loginChange })(Dropdown);