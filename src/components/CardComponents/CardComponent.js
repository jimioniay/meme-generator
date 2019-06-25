import React from 'react';
import Cards from './Cards';
import Error from '../ErrorComponent/ErrorComponent';

class CardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      no: props.no,
      respObj: props.data,
      memes: [],
      success: props.success,
    };
  }

  componentDidMount = () => {
    this.setState({ memes: this.props.data });
  };
  getCount = () => {
    return this.state.no;
  };

  render() {
    const meme = this.state.memes.map(item => {
      return (
        <Cards
          key={item.id}
          name={item.name}
          url={item.url}
          boxCount={item.box_count}
        />
      );
    });
    console.log(this.state.success);
    return (
      <div className="container">
        <div className="card" style={{ width: '18rem' }}>
          {this.state.success ? meme : <Error load="true" />}
          {/* {meme} */}
        </div>
      </div>
    );
  }
}

CardComponent.defaultProps = {
  success: false,
  respObj: {},
  memes: [],
};

export default CardComponent;
