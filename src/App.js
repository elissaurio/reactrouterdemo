import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';

// BrowserRouter: Subclass of Router. Use of HTML5 history API to sync your UI with the current browser
// HashRouter: Previose router but only uses hash part of the URL.
// MemoryRouter
// NativeRouter: Used for routing inside React-native mobile apps.
// StaticRouter: Used for static routing just like React Router v3.

// Layouts
import BaseLayout from './layouts/BaseLayout';

// Pages
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import SourcePage from './pages/SourcePage';

const App = () => {
  return (
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/news" component={NewsPage} />
          <Route exact path="/source" component={SourcePage} />
        </Switch>
      </BaseLayout>
    </Router>
  );
};

// Route properties
// path: string, path to be matched
// component: Component to render
// exact: exactly match the path
// render: element React
// children: React elements inside route

export default App;
