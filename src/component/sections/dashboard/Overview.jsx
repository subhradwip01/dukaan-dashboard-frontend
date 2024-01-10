import React from 'react'
import Button from '../../UI/Button'
import { arrow2dark } from '../../../assets/icon'
import { Card, CardContent, CardTitle } from '../../UI'

const Overview = () => {
  return (
    <div className="flex flex-col gap-6">
        <div className="w-full flex justify-between items-center">
            <h1 className="text-[20px] text-black-12 font-medium">Overview</h1>
            <Button trailingIcon={arrow2dark} className="w-[137px] h-[36px]">Last Month</Button>
        </div>
        <div className='grid grid-cols-2 gap-[20px]'>
          <PaymentCard label="Online orders" amount={231}/>
          <PaymentCard label={"Amount recieved"} amount={2392312.19} type={'currency'}/>
        </div>
    </div>
  )
}

const PaymentCard = ({label,amount,type}) => {
  return (
    <Card>
      <CardTitle>
        {label}
      </CardTitle>
      <CardContent>
      <p className='text-[32px] font-medium'>{type==='currency' ? '₹' : ''}{new Intl.NumberFormat('en-IN').format(
        amount,
      )}</p>
      </CardContent>
    </Card>
  )
}


export default Overview