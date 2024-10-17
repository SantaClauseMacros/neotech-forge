import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import PCPartPicker from './components/PCPartPicker';
import Prebuilts from './components/Prebuilts';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/pc-part-picker" component={PCPartPicker} />
          <Route path="/prebuilts" component={Prebuilts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
