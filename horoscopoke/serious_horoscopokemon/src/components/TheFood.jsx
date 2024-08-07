import React, {useState, useEffect} from 'react'
import styles from './TheFood.module.css'

function TheFood({time, getFood}) {

  const foodURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
  const [categoriesArray, setCategoriesArray] = useState([])
  const [foodURLbase, setFoodURLbase] = useState(foodURL)
  const [userNumber, setUserNumber] = useState()
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
        const categories = responseObject.categories
        console.log(categories)
        setCategoriesArray(categories.map(category => category.strCategory))
        console.log(categoriesArray)
        let userFoodCategoryFromTime = time.getMinutes()/categoriesArray.length >= 1 &&
        time.getMinutes()/categoriesArray.length <= 14 ? Math.round(time.getMinutes()/categoriesArray.length) : 6;
        console.log(userFoodCategoryFromTime)
        setFoodURLbase(foodURL + categoriesArray[userFoodCategoryFromTime])
        console.log(foodURLbase)
      }
    }
    catch(error){
      console.log(error)
    }
    return foodURLbase
  }

  const getImageFood = async function (foodURLbase){
    try{
      const response = await fetch(foodURLbase)
      if (!response.ok){
        throw new Error('Deu ruim no fetch da imagem!')
      }
      else{
        const objectImage = await response.json()
        const meals = objectImage.meals
        setUserNumber(Math.round(time.getSeconds()/10))
        console.log(meals)
        console.log(userNumber)
        const mealTitle = meals[userNumber].strMeal
        const mealPicture = meals[userNumber].strMealThumb
        console.log(mealPicture)
        setUserMeal(mealTitle)
        setUserMealPhoto(mealPicture)

      }
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getCategory()
    if(getCategory){
      getImageFood(foodURLbase)
    }
  }, [getFood])


  return (
    <div className={styles.div_meal} >
      <p className={styles.text} >You definitely ate that yersterday: {userMeal}</p>
      <img src={userMealPhoto} className={styles.image_food} alt="Food you ate yersyerday! For sure!" />
    </div>
  )
}

export default TheFood
