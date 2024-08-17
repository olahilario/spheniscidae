import React, {useContext} from 'react'
import styles from './Conclusion.module.css'
import ConclusionCard from './ConclusionCard';
import strange_food from '../assets/strange_food.jpg'
import tardigrado from '../assets/tardigrado.webp'
import chess_boxing from '../assets/chess_boxing.webp'



import { SearchContext } from '../contexts/searchContext';

function Conclusion() {
  const anything = useContext(SearchContext)
  return (
    <div className={styles.container_global}>



      <div className={styles.cards_grid}>
        <ConclusionCard card_title = {'Your food match!'} card_text = {'Strange?'} image = {strange_food}/>
        <ConclusionCard card_title = {'Your animal soulmate'} card_text = {"It's a tardigrade! Google it!"} image = {tardigrado}/>
        <ConclusionCard card_title = {'Your most successfull career'} card_text = {"Chess Boxing! Amazing sport!"} image = {chess_boxing}/>
      </div>


      
    </div>
  )
}

export default Conclusion
