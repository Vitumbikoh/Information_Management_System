import React from 'react'
import DashboardCard from '../components/DashboardCard'
import Schedule from '../components/Schedule'
import Chart from '../components/Chart'


function Dashboard() {
  return (
    <div className="flex-1 bg-gray-100">
      <DashboardCard />
      <Schedule />
      <Chart />
    </div>
    
  )
}

export default Dashboard