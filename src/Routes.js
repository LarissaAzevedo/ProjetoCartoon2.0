import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/Home';
import Cartoon from './pages/Cartoon';
import Favorites from './pages/Favorites';
import Service from './services/api.js'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cartoon" component={Cartoon} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
}
// const listar = () => {
//   Service.getCartoons()
//   console.log("Mostrando os dados: ")
// };


export default Routes;