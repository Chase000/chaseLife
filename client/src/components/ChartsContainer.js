import React, { useState } from 'react'

import BarChartComponent from './BarChart'
import AreaChartComponent from './AreaChart'
import { useAppContext } from '../context/appContext'
import './ChartsContainer.css'


export default function ChartsContainer() {
  const [barChart, setBarChart] = useState(true)
  const { monthlyApplications: data } = useAppContext()

  return (
    <section className='chartsContainer'>
      <h4>Monthly Applications</h4>

      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'AreaChart' : 'BarChart'}
      </button>
      {barChart ? <BarChartComponent data={data} /> : <AreaChartComponent data={data} />}
    </section>
  )
}