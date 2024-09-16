import { createEffect, createSignal, type Component } from 'solid-js';
import { Route, Router } from '@solidjs/router';

import Nav from './components/Nav';
import Home from './pages/Home';
import Product from './pages/Product';
import Feature from './pages/Feature';
import MarketPlace from './pages/MarketPlace';
import Company from './pages/Company';
import Login from './pages/Login';
import NotFound from './pages/_404';

const [username, setUsername] = createSignal('the-bipu');
const [repos, setRepos] = createSignal([]);

const App: Component = () => {

  createEffect(async () => {
    const response = await fetch(`https://api.github.com/users/${username()}/repos?sort=created`);
    const data = await response.json();
    setRepos(data);
  })

  return (
    <div>
      <Nav />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/features" component={Feature} />
        <Route path="/company" component={Company} />
        <Route path="/marketplace" component={MarketPlace} />
        <Route path="/login" component={Login} />
        <Route path='/*' component={NotFound} />
      </Router>
    </div>
  );
};

export { username, setUsername, repos }
export default App;
