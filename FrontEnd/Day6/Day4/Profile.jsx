import  { useState } from 'react';
import '/src/assets/css/Profile.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import avatarLogo from '/src/assets/images/Profile.jpg'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        name: 'Sairam V S',
        email: 'vssairam04@gmail.com',
        address: '15,Ramar Kovil Street,Coimbatore',
        phoneNumber: '+91 7598936500',
    });
    const [isEditing, setEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditing(false);
    };

    const handleGoBack = () => {
        navigate('/home'); // Adjust the navigation path as necessary
    };

    return (
        <div className='body1'>
            <ArrowBackIcon onClick={handleGoBack} className='arrow-back' style={{fontSize:'60px'}}/>
            <h1 className='he'>Profile</h1>      
            {isEditing ? (
                <form className='form1' onSubmit={handleSubmit}>
                    <img src={avatarLogo} alt="Avatar" className='doc'/>
                    <label className='label1'>
            Name:<span className="tab"/>
            <input type="text" className='input1' name="name" value={userDetails.name} onChange={handleChange} />
          </label>
          <br/>
          <label className='label1'>
            Email:<span className="tab"/>
            <input type="email" className='input1' name="email" value={userDetails.email} onChange={handleChange} />
          </label>
          <br/>
          <label className='label1'>
            Address:<span className="tab"/>
            <input type="text" className='input1' name="address" value={userDetails.address} onChange={handleChange} />
          </label >
          <br/>
          <label className='label1'>
            Phone Number:<span className="tab"/> 
            <input className='input1' type="tel" name="phoneNumber" value={userDetails.phoneNumber} onChange={handleChange} />
          </label>
          <br/><br/>
                    <button className='buttonx' type="submit">Save Changes</button>
                </form>
            ) : (
                <div>
                    <img src={avatarLogo} alt="Avatar" className='doc1'/>
                    <div className='display'>
                    <p className='p1'><b>Name:  </b>{userDetails.name}</p>
                    <p className='p1'><b>Email:  </b> {userDetails.email}</p>
                    <p className='p1'><b>Address:  </b> {userDetails.address}</p>
                    <p className='p1'><b>Phone Number:  </b> {userDetails.phoneNumber}</p>
                    <br/>
                    <button className="buttonY" onClick={() => setEditing(true)}>Edit</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
