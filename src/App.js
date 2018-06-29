import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '@webcomponents/webcomponentsjs/webcomponents-loader.js'
import '@polymer/iron-demo-helpers/demo-pages-shared-styles';
import '@polymer/iron-demo-helpers/demo-snippet';
import 'kse-common-ui/icon-toggle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to App using KSE common UI </h1>
        </header>
        <div className="vertical-section-container centered">
          <h3>Basic icon-toggle demo</h3>
          <demo-snippet>
            <icon-toggle toggle-icon="star"></icon-toggle>
            <icon-toggle toggle-icon="favorite" pressed></icon-toggle>
            <template>
              <icon-toggle toggle-icon="star"></icon-toggle>
              <icon-toggle toggle-icon="favorite" pressed></icon-toggle>
            </template>
          </demo-snippet>
        </div>
      </div>
    );
  }
}

export default App;
