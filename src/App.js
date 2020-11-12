import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import getList from './screens/getList';
import Home from './screens/home';
function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/call_api"} component={getList} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>


  );
}

export default App;
