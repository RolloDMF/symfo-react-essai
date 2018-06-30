import React from 'react';

/**
 * L'application simule un lancé de dé.
 */
class Route1 extends React.Component {
  state = {
    toc: null,
  };

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <h2>Vous êtes sur la page de data/entity1</h2>
        {this.state.toc}
      </div>
    );
  }
}


export default Route1;
