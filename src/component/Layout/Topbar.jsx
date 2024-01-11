import React from 'react'
import { arrowFillIcon, messageIcon, questionIcon, searchIcon } from '../../assets/icon'
import Input from '../UI/Input'

const Topbar = () => {
  return (
    <div className="w-full px-8 py-3 flex justify-between border-b border-black-85 bg-black-100">
      <div className='flex gap-4 items-center'>
        <p className="text-[15px] text-black-12">Payments</p>
        <div className='flex gap-1.5 items-center'>
          <img src={questionIcon} alt='question-icon'/>
          <p className='hidden sm:block text-[12px] text-black-30'>How it works</p>
          <div className='rounded-full bg-black-95 p-2 block sm:hidden'>
            <img src={searchIcon}  alt=''/>
          </div>
        </div>
      </div>
      <div className='hidden sm:block sm:w-[400px]'>
        <Input variant={'primary'} inputSize={'lg'} leadingIcon={searchIcon} placeholder='Search features, tutorials, etc.'/>
      </div>
      <div className='flex gap-3'>
        <button>
          <img src={messageIcon} alt='dropdown-icon'/>
        </button>
        <button>
          <img src={arrowFillIcon} alt='dropdown-icon'/>
        </button>
      </div>
    </div>
  )
}

export default Topbar