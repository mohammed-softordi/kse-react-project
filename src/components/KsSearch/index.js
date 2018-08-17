import React, { Component } from 'react';

// Import Polymer dependencies are defined in the App.js file
// Import common ui 
import 'kse-common-ui/ks-search';

export default class KsSearchComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue : 'React demo '
    };

    // Events Binding
    this.handleKsChange =  this.handleKsChange.bind(this);
    this.handleKsCustomEv =  this.handleKsCustomEv.bind(this);
  }

  componentDidMount() {

    // When the component is mounted, add your DOM listener to the "ks" element.
    // (The "ks" element is assigned in the render function.)
    
    // - Polymer documentation Data system: https://www.polymer-project.org/3.0/docs/devguide/data-system#paths
    this.ks.addEventListener('value-changed', this.handleKsChange); // This event will be triggered when the property "value" changes 
    
    // - Polymer documentation Events: https://www.polymer-project.org/3.0/docs/devguide/events
    this.ks.addEventListener('custom-ev', this.handleKsCustomEv);
  }

  componentWillUnmount() {

    // Make sure to remove the DOM listener when the component is unmounted.
    this.ks.removeEventListener('value-changed', this.handleKsChange);
    this.ks.removeEventListener('custom-ev', this.handleKsCustomEv);
  }

  handleKsChange(ev) {
    this.setState({
      inputValue: ev.detail.value 
    });
    // Do something
  }

  handleKsCustomEv(ev) {
    console.log(ev.detail.data);
    // Do something
  }

  render() {
    // Finally, render the using a "ref" callback which assigns the mounted
    // elem to a class property "ks" used to add the DOM listener to.
    return (
      <section>
        <h3>KS search demo</h3>
          <div className="demo">
            <ks-search ref={elem => this.ks = elem} icon-class="search" value={this.state.inputValue}></ks-search>
            <h4>Two way data binding: React component and polymer component</h4>
            <p>Host element, ks-search input value: <strong>{this.state.inputValue}</strong></p>
          </div>
      </section>
    );
  }
}

