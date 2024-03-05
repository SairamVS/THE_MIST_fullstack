import { useState } from 'react';
import { Box, Typography, Card, CardContent, Modal, Button } from '@mui/material';

// eslint-disable-next-line react/prop-types
const ExpandableCard = ({ title, content, moreContent }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <Card sx={{ maxWidth: 345, m: 1, bgcolor: 'white', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
                <CardContent>
                    <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.875rem', mt: 1 }}>
                        {content}
                    </Typography>
                    <Button onClick={handleOpen} sx={{ mt: 1 }}>
                        Read More
                    </Button>
                </CardContent>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {moreContent}
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};

const About = () => {
    return (
        <>
        <div style={{ display: 'flex', flexDirection: 'row', padding: '5rem', alignItems: 'flex-start' }}>
            <div style={{ flex: 3 }}>
                <Typography variant="h4" gutterBottom style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#333',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                textAlign: 'left', 
                }}>
                    Why NexaGlow Gatherings?
                </Typography>
                <Typography variant="body1" style={{ fontSize: 'larger' ,}}>
                    We know what you expect and work towards exceeding it. Events are labour and cost intensive, and our experts help you set the budget and stick to it while putting together events that will dazzle your guests. We are partnered with reputed caterers, venues, and other party service providers that make the task of finalizing vendors a breeze. Most of all, we plan and execute the event like it is our own, and leave you to fully indulge in your day and make it your own.
                </Typography>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', marginLeft: '20px' }}>
                <img src="/src/assets/images/home.webp" alt="Why NexaGlow Gatherings" style={{ Width: '100px', height: '300px', borderRadius: '8px' }} />
            </div>
        </div>
        <div>
            <Typography variant="h4" gutterBottom style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#333',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                textAlign: 'center', 
            }}>
                What Our Users Say
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                <ExpandableCard
                    title="Event Organizer, New York"
                    content="Using NexaGlow Gatherings has transformed how we organize events. It's not just a platform; it's a game changer for us!"
                    moreContent="Using NexaGlow Gatherings has transformed how we organize events extensively. From planning to execution, the platform provides unparalleled support, making it a game changer for us in the event organizing industry."
                />
                <ExpandableCard
                    title="Attendee, London"
                    content="I attended a conference organized through NexaGlow, and it was one of the most seamless experiences I've had. Everything was just a click away."
                    moreContent="Attending a conference organized through NexaGlow was an eye-opening experience. The seamless integration of services and features on the platform made everything accessible and straightforward. It was one of the most efficient and enjoyable events I've participated in."
                />
                <ExpandableCard
                    title="First-time Organizer, San Francisco"
                    content="NexaGlow made the daunting task of organizing my first public event a complete joy. Their support and resources are unmatched."
                    moreContent="Organizing my first public event was a daunting task, but NexaGlow turned it into a complete joy. The platform's support, resources, and user-friendly interface are unmatched. It provided me with all the tools I needed to succeed, making the event a tremendous success."
                />            
            </div>
        </div>
        </>
    );
};

export default About;

