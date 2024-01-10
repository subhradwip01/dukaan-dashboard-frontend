import React from 'react'
import { BaseLayout } from '../component/Layout'
import { Overview, Transactions } from '../component/sections';

const Dashboard = () => {
  return (
    <BaseLayout>
      {/* Overview */}
      <div className='space-y-8'>
      <Overview/>
      {/* Payments table */}
      <Transactions/>
      </div>
    </BaseLayout>
  )
}
export default Dashboard;