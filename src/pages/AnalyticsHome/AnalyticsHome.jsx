import React from 'react'
import './AnalyticsHome.css'
function AnalyticsHome() {
  return (
    <div  className='container' id='container'  >
      <div className='row'>
        <div className='col-md-6'>
        <div align="center" className='card' id='cardco'>
            <div><h1  className='orderColor'>Total Orders</h1></div>
            <hr />
            <div id='collabel'>Order Number</div>
        </div>
            
        </div>
        <div className='col-md-6'>
        <div align="center" className='card' id='cardco'>
        <div><h1 className='orderColor'>Total Products </h1></div>
        <hr />
        <div id='collabel'>Products Number</div>
        </div>
        </div>
       
      </div>
      <div className='row'>
        <div className='col-md-6'>
        <div align="center" className='card' id='cardco'>
            <div><h1 className='orderColor'>Total Add To Carts</h1></div>
            <hr />
            <div id='collabel'>Add To Carts Number</div>
        </div>
            
        </div>
        <div className='col-md-6'>
        <div align="center" className='card' id='cardco'>
        <div><h1 className='orderColor'>Total Stock</h1></div>
        <hr />
        <div id='collabel'>Stock Number</div>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default AnalyticsHome
