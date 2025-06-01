import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Loader = () => {
  return (
    <div className='my-10 flex place-content-center'>
      <FaSpinner className='animate-spin text-3xl' />
    </div>
  )
}

export default Loader