import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {ContextConsumer} from "./7-ContextConsumer";
import {WithoutContext} from "./5-WithoutContext";
import {Reusable} from "./9-Reusable";
import {Composition} from "./4-Composition";
import {NoComposition} from "./2-NoComposition";
import {RaceCondition} from "./10-RaceCondition";
import {ReactIsWeird} from "./Reducer";

const Main = () => (
    <ul>
      <li><Link to={'/no-composition'}>Without Composition</Link></li>
      <li><Link to={'/composition'}>With Composition</Link></li>
      <li><Link to={'/context'}>Context</Link></li>
      <li><Link to={'/without-context'}>Without context</Link></li>
      <li><Link to={'/reusable'}>Reusable</Link></li>
      <li><Link to={'/race'}>Race Condition</Link></li>
      <li><Link to={'/react-is-weird'}>React is weird</Link></li>
    </ul>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={'/context'} component={ContextConsumer} />
          <Route path={'/without-context'} component={WithoutContext} />
          <Route path={'/reusable'} component={Reusable} />
          <Route path={'/composition'} component={Composition} />
          <Route path={'/no-composition'} component={NoComposition} />
          <Route path={'/race'} component={RaceCondition} />
          <Route path={'/react-is-weird'} component={ReactIsWeird} />
          <Route component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
