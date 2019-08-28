import React from 'react';
import Color from '../../Components/Color/Color'

const CardContainer = ({colors}) => {
  const displayRandomColors = colors.map((color, key) => {
    return (
      <Color 
        hexCode={color}
        key={key}
      />
    )
  })

  return (
    <section className='card-container'>
      {displayRandomColors}
    </section>
  )
}

export default CardContainer;