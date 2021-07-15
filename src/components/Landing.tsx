import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return(
    <>
      <div>Landing</div>
      <Link to={'/question'}>Question</Link>
    </>
  )
}

export default Landing