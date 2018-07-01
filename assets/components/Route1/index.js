import React from 'react';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './route1.styl';

/**
 * L'application simule un lancé de dé.
 */
class Route1 extends React.Component {
  state = {
    toc: null,
    selected: null,
    data: [],
  };

  componentWillMount() {
    axios.get('/data/entity1')
      .then(({ data }) => {
        console.log(data);
        const toc = data.map((element, index) => {
          const divClass = classNames(
            'data',
            {
              active: this.state.selected === element.id,
            },
          );
          return (
            <CSSTransition
              in
              timeout={index * 100}
              classNames="data"
              unmountOnExit
              key={element.id}
              appear
            >
              <div
                className={divClass}
                onClick={this.selectHandler(element.id)}
                onKeyDown={() => {}}
              >
                <p>{element.name}</p>
              </div>
            </CSSTransition>
          );
        });

        this.setState({
          toc,
          data,
        });
      });
  }

  selectHandler = selected => () => {
    this.setState({
      selected,
    });
  }
  selectRemove = () => {
    this.setState({
      selected: null,
    });
  }

  render() {
    return (
      <div>
        <h2>Vous êtes sur la page de data/entity1 => dans la console</h2>
        <div className="data-container">
          {this.state.toc}
        </div>
        <CSSTransition
          in={this.state.selected != null}
          unmountOnExit
          classNames="info-box"
          timeout={100}
        >
          <InfoBox
            selectRemove={this.selectRemove}
            data={this.state.data.find(element => element.id === this.state.selected)}
          />
        </CSSTransition>
      </div>
    );
  }
}

const InfoBox = ({ data, selectRemove }) => (
  <div className="info-box" onClick={selectRemove} onKeyDown={() => {}}>
    <div className="info-container">
      <p>id: {data.id}</p>
      <p>nom: {data.name}</p>
      <p>data: {data.data}</p>
      <p>nom: {data.nom}</p>
      <p>donnée: {data.donnee}</p>
    </div>
  </div>
);

InfoBox.propTypes = {
  data: PropTypes.object,
  selectRemove: PropTypes.func.isRequired,
};

InfoBox.defaultProps = {
  data: {},
};

export default Route1;
