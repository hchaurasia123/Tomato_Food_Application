import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'

const Appdownload = () => {
  return (
    <div className='appdownload' id='app-download'>
    <p>For better experience Download  <br />Tomato  </p>
      <div className="app-download-plateform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default Appdownload