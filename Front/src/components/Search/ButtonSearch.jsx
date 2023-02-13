import React from 'react'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './buttonSearch.css'

const ButtonSearch = ({handleshow}) => {

    const [searchButton, setSearchButton] = useState(false);

    useEffect (() => {
        const buttonSearch = document.getElementById("button-search");
        
        window.addEventListener("scroll", () => {
            if(window.scrollY > 500){
                setSearchButton(true)
                buttonSearch.style.transform = "scale(1)"
            }else if (window.scrollY < 500){
                setSearchButton(false)
                buttonSearch.style.transform = "scale(0)";
            }
        })
    }, [])


return (
    
    <div id="button-search">
    {searchButton && (
        <i >
        <FontAwesomeIcon icon={faSearch} onClick={handleshow}/>
        </i>
    )}
    </div>
  )
}

export default ButtonSearch