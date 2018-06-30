import React from 'react';
import axios from 'axios';

/**
 * L'application simule un lancé de dé.
 */
class Route1 extends React.Component {
  state = {
    toc: null,
  };

  componentWillMount() {
    axios.get('/data/entity1')
      .then(({ data }) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div>
        <h2>Vous êtes sur la page de data/entity1 => dans la console</h2>
        {this.state.toc}
      </div>
    );
  }
}


export default Route1;
