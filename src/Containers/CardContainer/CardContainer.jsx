import React from 'react';
import Color from '../../Components/Color/Color'

const CardContainer = ({colors}) => {
  const displayRandomColors = colors.map(color => {
    return (
      <Color 
        hexCode={color}
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