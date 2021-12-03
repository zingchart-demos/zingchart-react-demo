/*
 * Top-level component consisting of a set of buttons, one
 * for each demo, and the corresponding demo chart.
 */
import './App.css';
import React from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';

import Dynamic from './components/Dynamic.js';
import Events from './components/Events.js';
import Methods from './components/Methods.js';
import Simple from './components/Simple.js';
import ModuleDrag from './components/ModuleDrag.js';
import ModuleChart from './components/ModuleChart.js';
import License from './components/License.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>zingchart-react Demo</h2>
        <h6>A simple example of binding data, mutations with methods, and listening to events</h6>
        <div className="App-buttonbar">
          <NavLink to="/" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Simple</NavLink>
          <NavLink to="/module-chart" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Module Chart</NavLink>
          <NavLink to="/module-drag" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Module Drag</NavLink>
          <NavLink to="/dynamic" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Dynamic</NavLink>
          <NavLink to="/events" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Events</NavLink>
          <NavLink to="/methods" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Methods</NavLink>
          <NavLink to="/license" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>License</NavLink>
        </div>
      </header>
      <Routes>
        <Route exact path="/" element={<Simple />} />
        <Route path="/module-chart" element={<ModuleChart />} />
        <Route path="/module-drag" element={<ModuleDrag />} />
        <Route path="/dynamic" element={<Dynamic />} />
        <Route path="/events" element={<Events />} />
        <Route path="/methods" element={<Methods />} />
        <Route path="/license" element={<License />} />
      </Routes>
    </div>
  );
}

export default App;
