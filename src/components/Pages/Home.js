import React from 'react'
import Banner from '../home/Banner'
import Clousure from '../home/Clousure'
import Featured from '../home/Featured'

function Home() {
    return (
        <div className='home'>
            <Banner />
            <Featured />
            <Clousure />
        </div>
    )
}

export default Home