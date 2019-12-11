import React from 'react'

const NavBar = (props) => {
  console.log(props)
  return(
    <nav>
      <p>
        NASA Photo Of The Day: {props.photoOfTheDay.title}
      </p>
    </nav>
  )
}

export default NavBar