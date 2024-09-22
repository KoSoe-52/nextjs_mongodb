import React from 'react'

const ShowProfile = ({params}:any) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1>Show profile data</h1>
        <hr />
        <p>Profile id {params.id}</p>
    </div>
  )
}

export default ShowProfile