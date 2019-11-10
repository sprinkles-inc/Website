import React, { Component } from 'react';
import Navbar from '../../Navbar/navbar';
import Fold from '../../Fold/fold';
import Gallery from './gallery';
import './film.scss';


class Film extends Component {


  render() {
    return (
      <div>
        <Navbar />
        <Gallery />
      </div>
    );
  }
}

export default Film;

