import React from 'react'
import "./card.css"
const Card = () => {
  return (
    <div className='card'>
        <div className='orphan'>
          <div className='border'>
            <h1 className='orphantext'>RESCUE AN ORPHAN</h1>
            <p style={{color:"rgb(147,151,154)",fontSize:"16px"}}>Accusantium dignissimos voluptas rem<br/>consequator blanditiis error ratione illo<br/>sit quasi ut praesentium magnam</p>
            </div>
        </div>

        <div className='hungry'>
        <h1 className='orphantext'>FEED THE HUNGRY</h1>
            <p style={{color:"rgb(254,151,80)",fontSize:"16px"}}>Accusantium dignissimos voluptas rem<br/>consequator blanditiis error ratione illo<br/>sit quasi ut praesentium magnam</p>
        </div>

        <div className='edu'>
        <h1 className='edutext'>FEED THE HUNGRY</h1>
            <p style={{color:"rgb(176,79,88)",fontSize:"16px"}}>Accusantium dignissimos voluptas rem<br/>consequator blanditiis error ratione illo<br/>sit quasi ut praesentium magnam</p>
        </div>

    </div>
  )
}

export default Card