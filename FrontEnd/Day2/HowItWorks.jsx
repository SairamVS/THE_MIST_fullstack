import { useState } from 'react';
import { Box, Grid, Typography, Paper } from "@mui/material";
import '/src/assets/css/Hit.css'; // Ensure this path is correct

const HowItWorks = () => {
  // State to track the clicked card's index
  const [clickedIndex, setClickedIndex] = useState(null);

  const steps = [
    {
      title: "Plan Your Event",
      description: "Send us your event details and we will plan everything to perfection to your preferences",
      image: "/src/assets/images/plan.webp"
    },
    {
      title: "Get a Quote",
      description: "Get a transparent and comprehensive quote of all anticipated expenses and miscellaneous",
      image: "/src/assets/images/quote.png"
    },
    {
      title: "Celebrate your Events",
      description: "Sit back and celebrate your event with loved ones as Homevents takes care of everything else",
      image: "/src/assets/images/cele.png"
    },
  ];

  return (
    <div>
      <Box className="boxContainer3">
        <Typography variant="h4" gutterBottom className="heading3">
          How It Works
          <Typography variant='h6' className='heading3'>
          Get NexaGlow event experts on board in 3 easy steps to get your celebration mode on!
          </Typography>
        </Typography>
        <Grid container spacing={2}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index} onClick={() => setClickedIndex(index)}>
              <Paper elevation={8} className={`paper3 ${clickedIndex === index ? 'purpleBorder' : ''}`}>
              <img src={step.image} alt={step.title} style={{ width: '20%', height: '100px',marginLeft:'170px' }} />
                <Typography variant="h6" className="title3">
                  {step.title}
                </Typography>
                <Typography variant="h8" className="description3">
                  {step.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid><br/><br/>
      </Box>
    </div>
  );
};

export default HowItWorks;
