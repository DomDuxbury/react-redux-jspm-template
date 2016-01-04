import React from 'react';
import Header from '../components/header.js';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className = "container">          
          <div className = "col-sm-12">
            <Header/>
          </div>
        </div>
      </div>
    );
  }
}