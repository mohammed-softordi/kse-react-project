import React, { Component } from 'react';

// Import Polymer dependencies are defined in the App.js file
// Import common ui
import 'kse-common-ui/icon-toggle';

export default class IconToggleComponent extends Component {

  render() {
    return (
    	<section>
    		<h3>Icon-toggle demo</h3>
  		  <div className="demo">
	        <icon-toggle toggle-icon="star"></icon-toggle>
	        <icon-toggle toggle-icon="favorite" pressed ></icon-toggle>
      	</div>
    	</section>
    );
  }

}

