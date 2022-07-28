import React from 'react'
import { FaYoutubeSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa";
import './footer.css'


function Footer() {

    return (
        <footer className='foot'>
            <div className='foot-div'>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <FaInstagramSquare className='logo' />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                    <FaYoutubeSquare className='logo' />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebookSquare className='logo' />
                </a>
                <a href="https://artstation.com" target="_blank" rel="noreferrer">
                    <FaArtstation className='logo' />
                </a>



            </div>
        </footer>
    )
}

export default Footer