import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import SignUp from './Pages/SignUp';
import { ValjTag } from './Pages/ValjTag';
import { SokTag } from './Pages/SokTag';
import { PlatsTid } from './Pages/PlatsTid';
import { Layout } from './components/Layout/Layout';
import { Handel } from './Pages/Handel';
import { Varningar } from './Pages/Varningar';
import { NoMatch } from './Pages/NoMatch';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import reducers from "./reducers";
import thunk from "redux-thunk";
import './App.css';
const store = createStore(
  reducers,
  applyMiddleware(thunk)
);
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Layout>
          {/*<Router basename={process.env.PUBLIC_URL}>*/}
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Pages/Dashboard" component={Dashboard} />
              <Route path="/Pages/SignUp" component={SignUp} />
              <Route path="/Pages/ValjTag" component={ValjTag} />
              <Route path="/Pages/SokTag" component={SokTag} />
              <Route path="/Pages/PlatsTid" component={PlatsTid} />
              <Route path="/Pages/Handel" component={Handel} />
              <Route path="/Pages/Varningar" component={Varningar} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </Provider>
    );
  }
}

export default App;

