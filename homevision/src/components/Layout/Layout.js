import React from 'react';
import Aux from '../../containers/hoc/Aux';
import images from'../../Assests/Images/home.jpg';


const Layout = {
    padding: '20px',
    textAlign: 'center',
    background: '#1abc9c',
    color: 'black',
    fontSize: '25px',

}

const layout = () =>(

    <Aux>
        <header className="Layout" style={Layout}>
             <div>Fetch the API to get the list of houses!</div>
         </header>

    </Aux>
        
);

export default layout; 