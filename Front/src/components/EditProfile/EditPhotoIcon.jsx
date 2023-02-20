import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import './EditPhotoIcon.css';
const EditPhotoIcon = () => {
  return (
    <div>
      <Badge className='photoIcon translate-middle' pill bg='warning' text='dark'>
        <i>
          <FontAwesomeIcon icon={faPen} />
        </i>
      </Badge>
    </div>
  );
};

export default EditPhotoIcon;
