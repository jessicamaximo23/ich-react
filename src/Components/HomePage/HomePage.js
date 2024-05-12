import React from "react";
import './HomePage.css';
//Importing
// import { Slide } from 'react-slideshow-gallery';

function HomePage(){

    //Creating an image carousel
    //Before I neeed to instal npm install react-slideshow-gallery --save
    // const slideImages =[

    //     'clinic0.jpeg',
    //     'clinic1.jpeg',
    //     'clinic2.jpeg'
    // ];


    return(
        <div className="slide-container">

            {/* <Slide>
                {slideImages.map((each, index) => (
                    <div key={index} className="each-slide">
                        <div style={{'backgroundImage': `url(${each})`}}>
                            <span>{`Image ${index + 1}`}</span>
                        </div>
                    </div>
                ))}
            </Slide> */}

        </div>


    );

}
export default HomePage;