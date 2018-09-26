import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import '@webcomponents/webcomponentsjs/webcomponents-loader';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import '@polymer/polymer/polymer-element';
import '@webcomponents/shadycss/apply-shim.min';
import '@polymer/iron-demo-helpers/demo-pages-shared-styles';
import '@polymer/iron-demo-helpers/demo-snippet';
import 'kse-common-ui/corporate-ui/corporate-header';
import 'kse-common-ui/corporate-ui/nav-item';

/*eslint-disable */
import {
  IconToggleComponent,
  KsSearchComponent
} from './components';

/*eslint-enable */


class App extends Component {
  
  render() {
    return (
      <div className="App">
          <corporate-header site-name="Kse common ui" site-url="/demo">
              <nav-item location="https://www.scania.com/world/#/" text="Scania"></nav-item>
              <nav-item location="#" text="Dealer"></nav-item>
          </corporate-header>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to App using KSE common UI </h1>
        </header>
        <div className="vertical-section-container centered">
         <IconToggleComponent />
         <KsSearchComponent />
        </div>
      </div>
    );
  }
}

export default App;
