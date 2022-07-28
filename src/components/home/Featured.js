import React from 'react'
import { NavLink } from 'react-router-dom'
import './Featured.css'

function Featured() {
    return (
        <div className='featured'>
            <div className='featured-gallery'>
                <h1 className='featured-title'>Featured Drawings</h1>
                <div className='featured-cards'>
                    <div className='featured-div'>
                        <img className='featured-image' src='/images/flowers_colors.jpg'></img>
                    </div>
                    <div className='featured-div'>
                        <img className='featured-image' src='/images/cute.jpg'></img>
                    </div>
                    <div className='featured-div'>
                        <img className='featured-image' src='/images/flowers.jpg'></img>
                    </div>
                    <div className='featured-div'>
                        <img className='featured-image' src='/images/flowers_red.jpg'></img>
                    </div>

                </div>
                <div className='gallery-link-div'>
                    <NavLink exact to="/Gallery" className="gallery-link"> Go to Gallery</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Featured