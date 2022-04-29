import React from 'react';
import home from "../images/home.svg";
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common 
                name='Generate Your Custom Handrwitten Font' 
                imgsrc={home} 
                isCompName={false}
                compName="Quillom"
                visit='/services'
                btnname="Generate Your Font" 
                btnname_2="Get to know more"
            />
        </>
    )
}

export default Home;