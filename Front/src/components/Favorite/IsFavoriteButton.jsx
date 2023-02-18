import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './favorite.css'

const IsFavoriteButton = () => {
  return (
    <div>
        <i>
            <FontAwesomeIcon className='isFavorite me-2' icon={faStar} />
        </i>
    </div>
  )
}

export default IsFavoriteButton