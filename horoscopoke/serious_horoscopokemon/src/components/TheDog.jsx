import React, { useEffect } from 'react'

function TheDog({elapsed}) {

// fetch("https://dog.ceo/api/breeds/image/random/50")
//   .then(response => {
//     if (!response.ok){
//       throw new Error("Deu ruim!");
//     }
//     return response.json();
//   })
//   .then(data => console.log(data.message))
//   .catch(error => console.log(error))

  const fetchData = async ()=> {
    try{
      const response = await fetch("https://dog.ceo/api/breeds/image/random/50");

      if (!response.ok){
        throw new Error ("Deu ruim aqui!")
      }
      const data = await response.json();
      console.log(data.message[0])
    }
    catch(error){
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchData()
  },[elapsed])

  return (
    <div>
      <p style={{fontSize: '3rem', color: 'blue'}}>{elapsed}</p>
      <img src="" alt="" />
    </div>
  )
}

export default TheDog
