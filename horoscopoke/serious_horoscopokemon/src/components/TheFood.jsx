import React, {useState, useEffect} from 'react'
import styles from './TheFood.module.css'

function TheFood({time, getFood}) {

  const foodURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
  const [categoriesArray, setCategoriesArray] = useState([])
  const [userFoodCategoryFromTime, setUserFoodCategoryFromTime] = useState('')
  const [userMeal, setUserMeal] = useState('')
  const [userMealPhoto, setUserMealPhoto] = useState('')

  const getCategory = async function (){
    try{
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      if (!response.ok){
        throw new Error('Deu ruim no fetch!')
      }
      else{
        const responseObject = await response.json()
        const categories = responseObject.categories.map(category => category.strCategory)
        setCategoriesArray(categories)
      }
    }
    catch(error){
      console.log(error)
    }
  }
  
  const getUserFoodCategoryFromTime = ()=>{
    if (categoriesArray.length === 0) return;
    const categoryIndex = time.getMinutes()/categoriesArray.length >= 1 &&
    time.getMinutes()/categoriesArray.length <= 14 ? Math.round(time.getMinutes()/categoriesArray.length) : 6
    setUserFoodCategoryFromTime(categoryIndex)
  }

  const getImageFood = async function (){
    try{
      const response = await fetch(foodURL + categoriesArray[userFoodCategoryFromTime])
      if (!response.ok){
        throw new Error('Deu ruim no fetch da imagem!')
      }
      else{
        const objectImage = await response.json()
        const meals = objectImage.meals
        const mealIndex = Math.floor(time.getSeconds() / 10) % meals.length;
        const mealTitle = meals[mealIndex].strMeal
        const mealPicture = meals[mealIndex].strMealThumb
        setUserMeal(mealTitle)
        setUserMealPhoto(mealPicture)
      }
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    const fetchData = async()=>{
      await getCategory()
    };
    fetchData()
  }, [])

  useEffect(()=>{
    if (categoriesArray.length > 0){
      getUserFoodCategoryFromTime()
    }
  }, [categoriesArray, getFood])

  useEffect(()=>{
    if(categoriesArray.length > 0 && userFoodCategoryFromTime !== ''){
      getImageFood()
    }
  }, [categoriesArray, userFoodCategoryFromTime, getFood])


  return (
    <div className={styles.div_meal} >
      <p className={styles.text} >You definitely will eat today: {userMeal}</p>
      <img src={userMealPhoto} className={styles.image_food} alt="Food you gonna eat today! For sure!" />
    </div>
  )
}

export default TheFood
