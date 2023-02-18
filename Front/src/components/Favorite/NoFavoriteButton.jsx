import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './favorite.css'

const NoFavoriteButton = () => {
  return (
    <div>
        <i>
            <FontAwesomeIcon className='NoFavorite me-2' icon={faStar} />
        </i>
    </div>
  )
}

export default NoFavoriteButton