import React from 'react'
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import Introhero from '../Components/Introhero'
import Overview from '../Components/Overview'
import Students from '../Components/Students'
import Review from '../Components/Review'
import Areyou from '../Components/Areyou'

function Home() {
  return (
    <div>
        
        <Slider />
        <Introhero />
        <Overview />
        <Students/>
        <Review/>
        <Areyou/>
            
    </div>
  )
}

export default Home