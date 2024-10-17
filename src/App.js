import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import PCPartPicker from './components/PCPartPicker';
import Prebuilts from './components/Prebuilts';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/custom" component={PCPartPicker} />
        <Route path="/prebuilts" component={Prebuilts} />
      </Switch>
    </div>
  );
}

export default App;
