import React from 'react'
import { useSelector } from 'react-redux'

const Loader = () => {

    const isVisible = useSelector((s) => s.is_loader)
  return (
    <>
      <div className={`loader-blur-bg ${isVisible? '' : 'd-none'}`}>
      <div class="loader"></div>
      </div>
    </>
  )
}

export default Loader