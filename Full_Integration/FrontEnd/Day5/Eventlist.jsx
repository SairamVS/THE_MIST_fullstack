import { useState } from 'react';
import '/src/assets/css/Eventlist.css';
import Sidebar from '/src/components/ui/SideBar.jsx'

const Events = () => {
  const initialEvents = [
    {
      name: 'Vinodhan',
      phoneNumber: '1234567890',
      state: 'State 1',
      city: 'City 1',
      date: '2024-03-08',
      eventName: 'Birthday Party',
      pricing: 'Under Rs.5000',
      requirements: 'Balloon decorations, magician'
    },
    {
      name: 'Savani',
      phoneNumber: '9876543210',
      state: 'State 2',
      city: 'City 2',
      date: '2024-07-15',
      eventName: 'Wedding',
      pricing: 'Rs.10000 - Rs.20000',
      requirements: 'Floral arrangements, live band'
    },
    // Add more events as needed
  ];

  const [events, setEvents] = useState(initialEvents);

  const deleteEvent = (index) => {
    const updatedEvents = events.filter((event, eventIndex) => eventIndex !== index);
    setEvents(updatedEvents);
  };

  // Placeholder for an edit function
  const editEvent = (index) => {
    console.log('Editing event at index:', index);
    // Implement actual edit logic here, potentially opening a modal or a separate form
  };

  return (
    <>
    <Sidebar/>
      <div className='event-container'>
        <h1 className='event-title'>Event Details</h1>
        {events.length > 0 ? (
          <table className='event-table'>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>State</th>
                <th>City</th>
                <th>Date</th>
                <th>Event Name</th>
                <th>Pricing</th>
                <th>Requirements</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{event.name}</td>
                  <td>{event.phoneNumber}</td>
                  <td>{event.state}</td>
                  <td>{event.city}</td>
                  <td>{event.date}</td>
                  <td>{event.eventName}</td>
                  <td>{event.pricing}</td>
                  <td>{event.requirements}</td>
                  <td>
                    <button className='edit-btn' onClick={() => editEvent(index)}>Edit</button>
                    <button className='delete-btn' onClick={() => deleteEvent(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-events">No Upcoming Events</p>
        )}
      </div>
    </>
  );
};

export default Events;
