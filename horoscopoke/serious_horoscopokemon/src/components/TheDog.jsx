import React, { useEffect, useState } from 'react'
import styles from './TheDog.module.css'

function TheDog({ elapsed, isTicking, changeDogImage }) {

  const [userBreedNumber, setUserBreedNumber] = useState(0)
  const [dogBreedLink, setDogBreedLink] = useState('')
  const [dogImageLink, setDogImageLink] = useState('')

  const fetchBreeds = async ()=> {
    try{
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      if (!response.ok){
        throw new Error ("Deu ruim aqui!")
      }else{
        const breeds = await response.json();
        const breeds_list = Object.keys(breeds.message)
        console.log(breeds_list)
        setUserBreedNumber((Math.round(elapsed/breeds_list.length)) < 107 ? Math.round(elapsed/breeds_list.length) : 22);
        console.log(userBreedNumber)
        console.log(isTicking)
        const breed = Object.keys(breeds.message)[userBreedNumber]
        console.log(breed)
        setDogBreedLink(`https://dog.ceo/api/breed/${breed}/images/random`)
        console.log(dogBreedLink)
      }
    }
    catch(error){
      console.error(error);
    }
    return dogBreedLink
  }

  const fetchDogImageLink = async (link)=> {
    try{
      const response = await fetch(link);
      if (!response.ok){
        throw new Error ("Deu ruim aqui no image!")
      }else{
        console.log(response)
        const dogImageLinkBase = await response.json()
        setDogImageLink(dogImageLinkBase);
        console.log(dogImageLink)
      }
    }
    catch(error){
      console.error(error);
    }
    return dogImageLink
  }
  useEffect(()=>{
    fetchBreeds()
    fetchDogImageLink(dogBreedLink)
    
  },[changeDogImage])

  return (
    <div>
      <img className={styles.dogimage} src={dogImageLink.message} alt="" />
    </div>
  )
}

export default TheDog
