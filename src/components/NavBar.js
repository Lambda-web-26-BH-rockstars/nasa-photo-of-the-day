import React from 'react'

const NavBar = (props) => {
  console.log(props)
  return(
    <nav>
      <p>
        NASA Photo Of The Day: {props.title}
      </p>
      <div className="controlButtonBox">
        <div 
          className="controlButton"
          onClick={()=>props.clickHandler('Mplus')}
        >+</div>
        <div
          className="controlButtonLabel"
        >Month: {props.month}</div>
        <div
          className="controlButton"
          onClick={()=>props.clickHandler('Mminus')}
        >-</div>
        <div 
          className="controlButton"
          onClick={()=>props.clickHandler('Dplus')}
        >+</div>
        <div
          className="controlButtonLabel"
        >Day: {props.day}</div>
        <div
          className="controlButton"
          onClick={()=>props.clickHandler('Dminus')}
        >-</div>
        <div 
          className="controlButton"
          onClick={()=>props.clickHandler('Yplus')}
        >+</div>
        <div
          className="controlButtonLabel"
        >Year: {props.year}</div>
        <div
          className="controlButton"
          onClick={()=>props.clickHandler('Yminus')}
        >-</div>
      </div>
    </nav>
  )
}

export default NavBar