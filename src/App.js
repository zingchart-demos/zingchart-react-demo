/*
 * Top-level component consisting of a set of buttons, one
 * for each demo, and the corresponding demo chart.
 */
import './App.css'
import React, {useState, useEffect} from 'react'
import {Routes, Route, NavLink} from 'react-router-dom'

import Dynamic from './components/Dynamic.js'
import Events from './components/Events.js'
import Methods from './components/Methods.js'
import Simple from './components/Simple.js'
import ModuleDrag from './components/ModuleDrag.js'
import ModuleChart from './components/ModuleChart.js'
import License from './components/License.js'
import './App.css'

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {coy} from 'react-syntax-highlighter/dist/esm/styles/prism'

function App() {
    const [showCode, setShowCode] = useState(false)
    const [version, setVersion] = useState('')
    const [pubDate, setPubDate] = useState('')

    const github = 'https://github.com/zingchart-demos/zingchart-react-demo'
    const gitBlob = github + '/blob/main/src/components/'
    const gitIssues = github + '/issues'
    const pricing = 'https://zingchart.com/pricing'

    const modules = {
      '/': {
        label: 'Hello World',
        text: 'Demonstrates a simple chart of static data',
        info: 'Simplest demo, just a ZingChart instance with static data from a constant JavaScript object.',
        file: 'Simple.js',
        code: ''
      },
      '/module_chart': {
        label: 'US Map',
        text: 'Demonstrates explicitly importing ZingChart modules',
        info: "In order to display a map, we need to import additional ZingChart modules containing the mapping code and specific map data. In this example we also use React state for the configuration (although we're not changing the state).",
        file: 'ModuleChart.js',
        code: ''
      },
      '/module_drag': {
        label: 'Interaction',
        text: 'Demonstrates interacting with a chart to change data',
        info: "Here we obtain a React reference to the ZingChart instance and load the dragging module so we can interact with the data in a bar chart. When a drag operation completes we access the chart data and use it to update the 'Goals met' text above the chart.",
        file: 'ModuleDrag.js',
        code: ''
      },
      '/dynamic': {
        label: 'Reconfiguring',
        text: 'Demonstrates modifying the configuration of an existing chart',
        info: "In this example we create an interval timer to periodically update the state object containing the ZingChart's configuration in order to change the data being displayed.",
        file: 'Dynamic.js',
        code: ''
      },
      '/events': {
        label: 'Events',
        text: 'Demonstrates responding to chart events',
        info: "This demo shows how we can listen to ZingChart events and log the events to a text area elsewhere on the page. Point to one of the nodes on the plot to see its details appear in the log.",
        file: 'Events.js',
        code: ''
      },
      '/methods': {
        label: 'Methods',
        text: 'Demonstrates using a reference to a ZingChart element to invoke methods on it',
        info: "Here we obtain a React reference to the chart and use it to invoke a method (in this case, adding an additional dataset).",
        file: 'Methods.js',
        code: ''
      },
      '/license': {
        label: 'Multiple Plots',
        text: 'Demonstrates setting the license key and performance flags on the ZingChart object, as well as multiple plots',
        info: "In this demo we obtain the zingchart instance when we import zingchart/es6 so we can set some configuration options on it, such as the license key. This demo also shows multiple plots on one chart.",
        file: 'License.js',
        code: ''
      },
    }

  const [mods, setMods] = useState(modules)

  // Load all of the code files and the
  // publish-info file
  async function getCodeAndInfo() {
    try {
      for(let mod of Object.values(modules)) {
        const resp = await fetch('code/' + mod.file)
        mod.code = await resp.text()
      }

      setMods(modules)

      const resp = await fetch('publish-info.json')
      const info = await resp.json()

      setVersion(info.version)
      setPubDate(info.date)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => getCodeAndInfo(), [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-titlebar">
          <div className="App-titlebar-icon left">
            <a href="https://zingchart.com" target="_blank" rel="noreferrer"><img src="logo.png" alt="ZingChart logo"/></a>
          </div>
          <h2>ZingChart React Demo</h2>
          <div className="App-titlebar-icon right">
            <a href={github} target="_blank" rel="noreferrer"><img src="github.png" alt="Github logo"/></a>
          </div>
        </div>
        <div className="App-buttonbar">
          {Object.entries(modules).map(([path, mod], index) =>
            <NavLink to={path} key={index} className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>{mod.label}</NavLink>
          )}
        </div>
      </header>
      <div className="App-demo-block">
        <div className="App-demo-titlebar">
          <Routes>
            {Object.entries(modules).map(([path, mod], index) =>
              <Route exact path={path} key={index} element={<>
                <span>{mod.text}</span>&nbsp;
                <div className="tooltip">
                  <img src="info_icon.png" alt="more info button"></img>
                  <span className="tooltiptext">{mod.info}</span>
                </div>
              </>} />
            )}
          </Routes>
        </div>
        <div className="App-demo-demo">
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
      </div>
      <div className="App-code-block">
        <div className="App-code-buttonbar">
          <div className="left">
            <button className="App-source-button" onClick={() => setShowCode(!showCode)}>{showCode ? 'Hide' : 'Show'} Source</button>
          </div>
          <div className="right">
            <Routes>
              {Object.entries(modules).map(([path, mod], index) =>
                <Route exact path={path} key={index}
                  element={<button className="App-source-button" onClick={() => window.open(gitBlob + mod.file, '_blank')}>View source on Github</button>} />
              )}
            </Routes>
          </div>
        </div>
        <div className={`App-code-code ${showCode ? 'visible' : 'invisible'}`}>
          <Routes>
            {Object.entries(mods).map(([path, mod], index) =>
              <Route exact path={path} key={index}
                element={<SyntaxHighlighter language="javascript" style={coy}>{mod.code}</SyntaxHighlighter>} />
            )}
          </Routes>
        </div>
      </div>
      <div className="App-footer">
        <div className="App-footer-row1">
            <a href={pricing} target="_blank" rel="noreferrer">Support ZingChart with a Commercial License (more info...)</a>
            <span className="App-footer-right">v{version} Updated {pubDate}</span>
        </div>
        <div className="App-footer-row2">
            <a href={gitIssues} target="_blank" className="App-footer-right" rel="noreferrer">Report Bug</a>
        </div>
      </div>
    </div>
  )
}

export default App
