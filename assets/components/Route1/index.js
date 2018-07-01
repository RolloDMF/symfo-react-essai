import React from 'react';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';

import './route1.styl';

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
        const toc = data.map((element, index) => (
          <CSSTransition
            in
            timeout={index * 100}
            classNames="data"
            unmountOnExit
            key={element.id}
            appear
          >
            <div className="data">
              <p>{element.name}</p>
            </div>
          </CSSTransition>
        ));
        this.setState({
          toc,
        });
      });
  }

  render() {
    return (
      <div>
        <h2>Vous êtes sur la page de data/entity1 => dans la console</h2>
        <div className="data-container">
          {this.state.toc}
        </div>
      </div>
    );
  }
}


export default Route1;
