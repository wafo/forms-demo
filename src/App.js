import React from 'react';
import Header from './components/UI/header';
import Nav from './components/UI/nav/nav';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ExampleForm from './components/forms/exampleForm';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Nav />
        <div className="container" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
          <div className="row">
            <div className="col-12">
              <Switch>
                <Redirect exact from="/" to="form" />
                <Route exact path="/form" component={ExampleForm} />
                <Route exact path="/code" component={null} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
