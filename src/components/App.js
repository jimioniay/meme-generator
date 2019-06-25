import React, { Component } from 'react';

import FormComponent from './FormComponents/FormComponent';
class App extends Component {
  render() {
    return (
      <div className="container border border-secondary rounded mt-4">
        <FormComponent />
      </div>
    );
  }
}

export default App;
