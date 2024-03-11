import { Suspense, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import loadingImage from '/src/assets/images/load.gif';

const Lazylayout = ({ component: Component, ...rest }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    // Centered loading div style
    const loadingStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw', // Viewport width
        height: '100vh', // Viewport height
    };

    // Image style
    const imageStyle = {
        width: '500px', // Adjust width as needed
        height: '400px', // Adjust height as needed
    };

    return (
        <Suspense fallback={<div style={loadingStyle}><img src={loadingImage} alt="Loading..." style={imageStyle}/></div>}>
            {isLoading ? (
                <div style={loadingStyle}>
                    <img src={loadingImage} alt="Loading..." style={imageStyle}/>
                </div>
            ) : (
                <Component {...rest} />
            )}
        </Suspense>
    );
}

Lazylayout.propTypes = {
    component: PropTypes.elementType.isRequired
}

export default Lazylayout;
