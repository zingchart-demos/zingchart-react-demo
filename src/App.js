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
  	const modules = {
		'/': {
			text: 'Demonstrates a simple chart of static data',
			link: 'https://github.com/zingchart-demos/zingchart-react-demo/blob/main/src/components/Simple.js'
		},
		'/module_chart': {
			text: 'Demonstrates explicitly importing ZingChart modules',
			link: 'https://github.com/zingchart-demos/zingchart-react-demo/blob/main/src/components/ModuleChart.js'
		},
		'/module_drag': {
			text: 'Demonstrates interacting with a chart to change data',
			link: 'https://github.com/zingchart-demos/zingchart-react-demo/blob/main/src/components/ModuleDrag.js'
		},
		'/dynamic': {
			text: 'Demonstrates modifying the configuration of an existing chart',
			link: 'https://github.com/zingchart-demos/zingchart-react-demo/blob/main/src/components/Dynamic.js'
		},
		'/events': {
			text: 'Demonstrates responding to chart events',
			link: 'https://github.com/zingchart-demos/zingchart-react-demo/blob/main/src/components/Events.js'
		},
		'/methods': {
			text: 'Demonstrates using a reference to a ZingChart element to invoke methods on it',
			link: 'https://github.com/zingchart-demos/zingchart-react-demo/blob/main/src/components/Methods.js'
		},
		'/license': {
			text: 'Demonstrates setting the license key and performance flags on the ZingChart object, as well as multiple plots in one chart',
			link: 'https://github.com/zingchart-demos/zingchart-react-demo/blob/main/src/components/License.js'
		},
	}

  return (
    <div className="App">
      <header className="App-header">
        <h2>zingchart-react Demo</h2>
        <div className="App-buttonbar">
          <NavLink to="/" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Hello World</NavLink>
          <NavLink to="/module_chart" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>US Map</NavLink>
          <NavLink to="/module_drag" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Interaction</NavLink>
          <NavLink to="/dynamic" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Reconfiguring</NavLink>
          <NavLink to="/events" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Events</NavLink>
          <NavLink to="/methods" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Methods</NavLink>
          <NavLink to="/license" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Multiple Plots</NavLink>
        </div>
        <Routes>
          <Route exact path="/" element={<h4>{modules['/'].text}</h4>} />
          <Route path="/module_chart" element={<h4>{modules['/module_chart'].text}</h4>} />
          <Route path="/module_drag" element={<h4>{modules['/module_drag'].text}</h4>} />
          <Route path="/dynamic" element={<h4>{modules['/dynamic'].text}</h4>} />
          <Route path="/events" element={<h4>{modules['/events'].text}</h4>} />
          <Route path="/methods" element={<h4>{modules['/methods'].text}</h4>} />
          <Route path="/license" element={<h4>{modules['/license'].text}</h4>} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<div class="viewsrc"><a target="_blank" rel="noreferrer" href={modules['/'].link}>View source on Github</a></div>} />
          <Route path="/module_chart" element={<div class="viewsrc"><a target="_blank" rel="noreferrer" href={modules['/module_chart'].link}>View source on Github</a></div>} />
          <Route path="/module_drag" element={<div class="viewsrc"><a target="_blank" rel="noreferrer" href={modules['/module_drag'].link}>View source on Github</a></div>} />
          <Route path="/dynamic" element={<div class="viewsrc"><a target="_blank" rel="noreferrer" href={modules['/dynamic'].link}>View source on Github</a></div>} />
          <Route path="/events" element={<div class="viewsrc"><a target="_blank" rel="noreferrer" href={modules['/events'].link}>View source on Github</a></div>} />
          <Route path="/methods" element={<div class="viewsrc"><a target="_blank" rel="noreferrer" href={modules['/methods'].link}>View source on Github</a></div>} />
          <Route path="/license" element={<div class="viewsrc"><a target="_blank" rel="noreferrer" href={modules['/license'].link}>View source on Github</a></div>} />
        </Routes>
      </header>
      <Routes>
        <Route exact path="/" element={<Simple />} />
        <Route path="/module_chart" element={<ModuleChart />} />
        <Route path="/module_drag" element={<ModuleDrag />} />
        <Route path="/dynamic" element={<Dynamic />} />
        <Route path="/events" element={<Events />} />
        <Route path="/methods" element={<Methods />} />
        <Route path="/license" element={<License />} />
      </Routes>
    </div>
  );
}

export default App;
