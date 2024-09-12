import type { Component } from 'solid-js';
import { Route, Router } from '@solidjs/router';

import Nav from './components/Nav';
import Home from './pages/Home';
import Saved from './pages/Saved';

const App: Component = () => {
  return (
    <div class='w-full min-h-screen'>
      <Nav />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/saved" component={Saved} />
      </Router>
    </div>
  );
};

export default App;
