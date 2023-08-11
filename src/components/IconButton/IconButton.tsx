import { FC } from 'react';
import './IconButton.css';

interface IconButtonProps {
  icon: string;
  text: string;
  onClick?: () => void;
}

const IconButton: FC<IconButtonProps> = ({ icon, text, onClick }) => {
  return (
    <>
      <div className='icon-button' onClick={onClick}>
        <div className='circle'>
          <img src={icon} alt={text + ' icon button'} />
        </div>
        <p>{text}</p>
      </div>
    </>
  );
};

export default IconButton;
