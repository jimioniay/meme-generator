import React from 'react';

class ErrorComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      load: "false",
      message: "Error while loading meme..."
    }
  }
  render() {
    return (
      <div>
        {this.state.load === "true" ? 
        <p className="lead">{this.state.message}</p>: 
        null}
      </div>
    );
  }
}

export default ErrorComponent;
