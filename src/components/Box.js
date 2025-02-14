import React from 'react'

function Box({data}) {
  return (
    <div draggable={true} className='box'>{data}</div>
  )
}

export default Box