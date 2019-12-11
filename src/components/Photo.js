import React from 'react'

const Photo = (props) => {
  return(
    <div 
      className="photoHolder"
    >
      <img 
        src={props.photoOfTheDay.url} 
        alt={props.photoOfTheDay.title} 
      />
    </div>
  )
}

export default Photo