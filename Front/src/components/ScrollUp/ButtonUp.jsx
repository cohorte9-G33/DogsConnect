import React from 'react'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './buttonUp.css'

const ButtonUp = () => {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect (() => {
        const buttonUp = document.getElementById("button-up");
        
        window.addEventListener("scroll", () => {
            if(window.scrollY > 500){
                setBackToTopButton(true)
                buttonUp.style.transform = "scale(1)"
            }else if (window.scrollY < 500){
                setBackToTopButton(false)
                buttonUp.style.transform = "scale(0)";
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }


  return (
    <div id="button-up" onClick={scrollUp}>
    {backToTopButton && (
        <i>
        <FontAwesomeIcon icon={faChevronUp} />
        </i>
    )}
    </div>
  )
}

export default ButtonUp
