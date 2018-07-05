import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import '@webcomponents/webcomponentsjs/webcomponents-loader';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import '@polymer/polymer/polymer-element';
import '@webcomponents/shadycss/apply-shim.min';
import '@polymer/iron-demo-helpers/demo-pages-shared-styles';
import '@polymer/iron-demo-helpers/demo-snippet';
import 'kse-common-ui/icon-toggle';
import 'kse-common-ui/ks-search';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to App using KSE common UI </h1>
        </header>
        <div className="vertical-section-container centered">
          <h3>Icon-toggle demo</h3>
          <div className="demo">
            <icon-toggle toggle-icon="star"></icon-toggle>
            <icon-toggle toggle-icon="favorite" pressed></icon-toggle>
          </div>
          <h3>KS search demo</h3>
          <div className="demo">
            <ks-search icon-class="search" reload-on-clear value="Demo"></ks-search>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
