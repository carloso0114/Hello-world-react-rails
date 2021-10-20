import React from "react"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import configureStore from "../configureStore"

import Greeting from "./Greeting"

const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Link to="/greeting">Get greeting from the API</Link>} />
            <Route path="/greeting" render={() => <Greeting />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
