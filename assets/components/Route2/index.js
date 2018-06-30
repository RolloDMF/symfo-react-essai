import React from 'react';

/**
 * L'application simule un lancé de dé.
 */
class Route2 extends React.Component {
  state = {
    toc: null,
  };

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <h2>Vous êtes sur la page de data/entity2</h2>
        {this.state.toc}
      </div>
    );
  }
}


export default Route2;
