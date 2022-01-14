/*
 * Simplest demo, just a bar chart of static data
 */
import React from 'react'
import 'zingchart/es6'
import ZingChart from 'zingchart-react'

function Simple() {
  const config = {
    type: 'bar',
    series: [{
      values: [4,5,3,4,5,3,5,4,11]
    }]
  }

  return <ZingChart data={config} />
}

export default Simple