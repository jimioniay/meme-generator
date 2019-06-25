import React from 'react';

class IsLoading extends React.Component {
  render() {
    // return <p className="lead display-4 border border-success text-success">Loading...</p>;
    return (
      <div className="spinner-border m-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
}

export default IsLoading;
