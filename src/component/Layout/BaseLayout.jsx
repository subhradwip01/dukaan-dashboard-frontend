import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

const BaseLayout = ({children}) => {
  return (
    <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar/>
          <div className="flex-1 p-8 overflow-x-auto">
            {children}
          </div>
        </div>
    </div>
  )
}

export default BaseLayout