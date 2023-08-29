import { useState, useEffect } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { keyframes } from '@mui/material';

const ScrollIcon = () => {
  const [showIcon, setShowIcon] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setShowIcon(false);
    } else {
      setShowIcon(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

  return (
    <KeyboardDoubleArrowDownIcon
      fontSize="large"
      sx={{
        zIndex: 2,
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        animation: `${bounce} 2s infinite ease-in-out`,
        stroke: 'white',
        strokeWidth: 1,
        opacity: showIcon ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
      }}
    />
  );
};

export default ScrollIcon;
