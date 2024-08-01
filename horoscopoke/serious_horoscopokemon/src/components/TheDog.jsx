import React, { useEffect, useState } from 'react'

function TheDog({ elapsed, isTicking }) {

  const [userBreedNumber, setUserBreedNumber] = useState(0)

  const fetchBreeds = async ()=> {
    try{
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      if (!response.ok){
        throw new Error ("Deu ruim aqui!")
      }else{
        const breeds = await response.json();
        const breeds_list = Object.keys(breeds.message)
        console.log(breeds_list)
        setUserBreedNumber((Math.round(elapsed/breeds_list.length)) < 107 ? Math.round(elapsed/breeds_list.length) : 'chow');
        console.log(userBreedNumber)
        console.log(isTicking)
        const breed = Object.keys(breeds.message)[userBreedNumber]
        let randomBreedImageURL = `https://dog.ceo/api/breeds/${breed}/images/random`
        console.log(randomBreedImageURL)
      }
    }
    catch(error){
      console.error(error);
    }
    // return randomBreedImageURL
    
  }

  useEffect(()=>{
    fetchBreeds()
    
  },[isTicking])

  return (
    <div>
      <p style={{fontSize: '3rem', color: 'blue'}}>{elapsed}</p>
      <img src="" alt="" />
    </div>
  )
}

export default TheDog
