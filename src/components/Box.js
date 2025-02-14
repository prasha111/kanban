import React from 'react'

function Box({data, onDrag}) {
  return (
    <div id={data} draggable={true} onDrag={onDrag} className='box'>{data}</div>
  )
}

export default Box