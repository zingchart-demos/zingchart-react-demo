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
  const txt_simple = 'Demonstrates a simple chart of static data';
  const txt_module_chart = 'Demonstrates explicitly importing ZingChart modules';
  const txt_module_drag = 'Demonstrates interacting with a chart to change data';
  const txt_dynamic = 'Demonstrates modifying the configuration of an existing chart';
  const txt_events = 'Demonstrates responding to chart events';
  const txt_methods = 'Demonstrates using a reference to a ZingChart element to invoke methods on it';
  const txt_license = 'Demonstrates setting the license key and performance flags on the ZingChart object, as well as multiple plots in one chart';

  return (
    <div className="App">
      <header className="App-header">
        <h2>zingchart-react Demo</h2>
        <div className="App-buttonbar">
          <NavLink to="/" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Simple</NavLink>
          <NavLink to="/module-chart" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Module Chart</NavLink>
          <NavLink to="/module-drag" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Module Drag</NavLink>
          <NavLink to="/dynamic" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Dynamic</NavLink>
          <NavLink to="/events" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Events</NavLink>
          <NavLink to="/methods" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Methods</NavLink>
          <NavLink to="/license" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>License</NavLink>
        </div>
        <Routes>
          <Route exact path="/" element={<h4>{txt_simple}</h4>} />
          <Route path="/module-chart" element={<h4>{txt_module_chart}</h4>} />
          <Route path="/module-drag" element={<h4>{txt_module_drag}</h4>} />
          <Route path="/dynamic" element={<h4>{txt_dynamic}</h4>} />
          <Route path="/events" element={<h4>{txt_events}</h4>} />
          <Route path="/methods" element={<h4>{txt_methods}</h4>} />
          <Route path="/license" element={<h4>{txt_license}</h4>} />
        </Routes>
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
