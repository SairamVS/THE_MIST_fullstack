import { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HeadSection = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        p: 5,
        color: 'black',
        overflow: 'hidden', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '20px', 
      }}
    >
      <Box
        className='img1'
        sx={{
          width: '100%',
          height: '80vh',
          overflow: 'hidden', 
          borderRadius: '20px', 
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', 
          mb: 4, 
        }}
      >
        <img src="/src/assets/videos/To.gif" alt="Smooth GIF" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
      </Box>
      <Typography
        variant="h5"
        sx={{
          my: 2,
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#333',
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)', 
        }}
      >
        Bringing Your Events to Life with Ease and Elegance
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            fontWeight: 'bold',
            px: 3, 
            py: 1, 
            backgroundColor: activeButton === 'discover' ? 'white' : 'white',
            color: 'white',
            '&:hover': {
              backgroundColor: '#f2e7fe',
              color: 'white',
            },
            borderRadius: '30px', 
          }}
          onClick={() => handleClick('discover')}
        >
        <Link to='/events'>  Discover Events </Link>
        </Button>
        <Button
          variant="contained"
          sx={{
            fontWeight: 'bold',
            px: 3,
            py: 1,
            backgroundColor: activeButton === 'plan' ? 'white' : 'white',
            color: 'white',
            '&:hover': {
              backgroundColor: '#f2e7fe',
              color: 'white',
            },
            borderRadius: '30px',
          }}
          onClick={() => handleClick('plan')}
        >
        <Link to='/enquiry'>Plan Your Event</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default HeadSection;
