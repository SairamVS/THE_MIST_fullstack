import { useState } from 'react';
import '/src/assets/css/Event.css'
import { Link } from 'react-router-dom';
import NavBar from '/src/components/ui/NavBar.jsx'

const Events = () => {


  const eventDetails = [
    {
      id: 1,
      name: 'Birthday Party',
      image: '/src/assets/images/Birthday.jpg',
    },
    {
      id: 2,
      name: 'Surprise Party',
      image: '/src/assets/images/surprise.webp',
    },
    {
      id: 3,
      name: 'Wedding',
       image: '/src/assets/images/Wedding.webp',
    },
    {
      id: 4,
      name: 'HouseWarming',
      image: '/src/assets/images/house.webp',
    },
    {
      id: 5,
      name: 'Family Gatherings',
      image: '/src/assets/images/Family.jpg',
    },
    {
      id: 6,
      name: 'Farewell',
      image: '/src/assets/images/Farewell.jpg',
    },
    
   
    
    
  ];
  
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  
 
  return (
    <div className='body2'>
      <NavBar/>
      <h1 className='h6'>Events</h1>
      <div className="list1">
        {eventDetails.map((eventDetails) => (
          <div key={eventDetails.id} className="cards">
            <h2 className='h7'>{eventDetails.name}</h2>
            <img src={eventDetails.image} alt={eventDetails.name} className="imagea" />
            
            <nav className='nav2'>
              <button className='button' onClick={() => addToCart(eventDetails)}><Link to='/enquiry'>Book a Slot</Link></button>
              
            </nav>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Events;