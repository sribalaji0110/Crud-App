import React from 'react';
import StoreList from './components/Home/StoreList';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Model from './components/Model/Model';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={StoreList}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
