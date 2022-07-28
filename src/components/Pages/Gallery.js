import React from 'react'
import Cards from '../card/Cards'
import data from '../../data'
import './../gallery/Gallery.css'

function Gallery() {

    const paints = data.map(item => {
        return (
            <Cards
                key={item.id}
                item={item}
            />
        )
    })


    return (
        <div className='page'>
            <h1 className='page-title'>GALLERY</h1>
            <div className='card-gallery'>
                {paints}
            </div>
        </div>
    )
}

export default Gallery