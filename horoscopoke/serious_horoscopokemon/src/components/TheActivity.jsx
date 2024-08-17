import React, { useEffect, useState, useContext } from 'react'
import { SearchContext } from '../contexts/searchContext';

function TheActivity({currentDesire, count}) {

  const { activity, setActivity} = useContext(SearchContext);


  const getActivity = async ()=>{
    const response = await fetch('http://bored.api.lewagon.com/api/activity?participants=2')
    const randomActivityObject = await response.json()
    const randomActivity = randomActivityObject.activity
    setActivity(randomActivity)
  }

  useEffect(()=>{
    getActivity()
  }, [count])

  return (
    <pre>

    </pre>
  )
}

export default TheActivity
