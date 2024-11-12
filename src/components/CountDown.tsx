"use client"
import React from 'react'
import Countdown from 'react-countdown'

const CountDown = () => {
    const endingdate = new Date('2024-8-5')
  return (
    <div>
        <Countdown className="font-bold text-5xl text-yellow-300 " date={endingdate} />
    </div>
  )
}

export default CountDown