import React, { Component } from 'react';

import FormContainer from './FormContainer';
import CardComponent from '../CardComponents/CardComponent';
import LoadingComponent from '../LoadingComponents/LoadingComponent';

class FormComponent extends Component {
  constructor() {
    super();
    this.state = {
      no: '',
      meme: [],
      isLoading: false,
    };
  }

  handleChange = event => {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  handleFetchMeme = () => {
    this.setState(() => {
      return {
        isLoading: true,
      };
    });
    fetch('https://api.imgflip.com/get_memes')
      .then(data => data.json())
      .then(dataResponse =>
        this.setState({
          no: '',
          meme: dataResponse.data.memes,
          isLoading: false,
        }),
      )
      .catch(err => err);
  };

  render() {
    return (
      <div className="container border border-secondary rounded padding">
        <div className="">
          <FormContainer
            handleChange={this.handleChange}
            {...this.state}
            handleFetchMeme={this.handleFetchMeme}
          />
        </div>

        <div
          className="container border border-secondary rounded padding"
          style={{ display: this.state.meme.length === 0 ? 'none' : 'block' }}
        >
          {this.state.isLoading ? (
            <LoadingComponent />
          ) : (
            <CardComponent
              no={this.state.no}
              data={this.state.meme}
              success={this.state.meme.length === 0 ? false : true}
            />
          )}
        </div>
      </div>
    );
  }
}

export default FormComponent;
