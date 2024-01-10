import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

const BaseLayout = ({children}) => {
  return (
    <div className="flex h-screen bg-black-98">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar/>
          <div className="flex-1 p-8">
            {children}
          </div>
        </div>
    </div>
  )
}

export default BaseLayout