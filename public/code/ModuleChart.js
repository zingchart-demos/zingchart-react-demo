/*
 * Vector map of the 48 US states. Demonstrates explicitly importing
 * ZingChart modules.
 */
import React, {useState} from 'react'
import 'zingchart/es6'
import ZingChart from 'zingchart-react'
import 'zingchart/modules-es6/zingchart-maps.min.js'
import 'zingchart/modules-es6/zingchart-maps-usa.min.js'

function ModuleChart() {
  const [config] = useState({
    shapes: [
      {
        type: 'zingchart.maps',
        options: {
          name: 'usa',
          ignore: ['AK', 'HI']
        }
      }
    ]
  })

  return <ZingChart data={config} height='600px'/>
}

export default ModuleChart