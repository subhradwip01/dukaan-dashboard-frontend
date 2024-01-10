import React from 'react'
import { BaseLayout } from '../component/Layout'
import { Overview } from '../component/sections';

const Dashboard = () => {
  return (
    <BaseLayout>
      {/* Overview */}
      <Overview/>
      {/* Payments table */}
    </BaseLayout>
  )
}
export default Dashboard;