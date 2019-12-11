import React, {useEffect, useState} from "react"
import axios from 'axios'
import "./App.css"

import Photo from './components/Photo.js'

function App() {

  const [photoOfTheDay, setPhotoOfTheDay] = useState('')

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=EwTD8nntFpQflSE62RAmu8EfYamxWLU95x1Gau7D&date=2019-12-10')
      .then(res =>{
        console.log(res.data)
        setPhotoOfTheDay(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
  },[])

  return (
    <div className="App">
      <div className="photoHolder">
        <Photo 
          photoOfTheDay={photoOfTheDay} 
        />
      </div>
    </div>
  );
}

export default App;
