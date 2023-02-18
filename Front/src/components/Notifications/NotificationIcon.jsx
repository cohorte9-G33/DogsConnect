import { Badge } from 'react-bootstrap';
import './notifications.css';

const NotificationIcon = () => {
  return (
    <div>
      <Badge className='notification translate-middle' pill bg='warning' text='dark'>
        0
      </Badge>
    </div>
  );
};

export default NotificationIcon;
