import React from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import Route1 from '~/components/Route1';
import Route2 from '~/components/Route2';

import './app.styl';

/**
 * L'application simule un lancé de dé.
 */
class App extends React.Component {
  state = {
    toc: null,
  };

  componentWillMount() {
    // appelle ajax vers la route /data
    axios.get('/data')
      .then(({ data }) => {
        // récupération des datas et on récupére également les clé de chaque objet
        const arrayData = Object.keys(data);
        // pour chaque objet on crée un paragraphe avec pour contenue la data.
        // Et on met tout ceci dans un tableau dataData
        const dataData = arrayData.map(element => <li key={data[element]}>{data[element]}</li>);
        // on envois tout a react pour qu'il rafraichie la page avec les données
        this.setState({
          toc: dataData,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Test React - Symfony</h1>
        <p>Test 1 : Récupération des données sur "/data" au démarrage de la page :</p>
        <ul>
          {this.state.toc}
        </ul>
        <p>Test 2 : Récupération des données sur une autre route : </p>
        <Link href="/entity1" to="/entity1" >/data/entity1</Link>
        <Link href="/entity2" to="/entity2" >/data/entity2</Link>
        <Route path="/entity1" exact component={Route1} />
        <Route path="/entity2" exact component={Route2} />
      </div>
    );
  }
}

export default App;
