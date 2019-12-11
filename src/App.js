import React, {useEffect, useState} from "react"
import axios from 'axios'
import "./App.css"

import Photo from './components/Photo.js'
import NavBar from './components/NavBar.js'

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
        setPhotoOfTheDay({
          copyright: "Anna Gru",
          date: "",
          explanation: "You have selected an invaid date, please try another date",
          hdurl: "https://images.unsplash.com/photo-1572280135715-edc1567580aa",
          media_type: "image",
          service_version: "yes",
          title: "404 Photo Not Found",
          url: "https://images.unsplash.com/photo-1572280135715-edc1567580aa"
        })
      })
  },[])

  return (
    <div className="App">
      <NavBar 
        photoOfTheDay={photoOfTheDay} 
      />
      <Photo 
        photoOfTheDay={photoOfTheDay} 
      />
    </div>
  );
}

export default App;
