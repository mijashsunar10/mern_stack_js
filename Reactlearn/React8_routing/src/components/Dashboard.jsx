import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>

        Dashboard
      <Outlet/>
        {/* When child component is added to the dashboard the noutlet should be userd otherwise it wont worked */}
    </div>
  )
}

export default Dashboard
