import React from 'react'
import './css/WelcomeSign.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const WelcomeSign = ({signUps}) => {
    return (
        <div className='container-welcome'>
            
            <div className='carselect'>
                <h1>M E K <span> A </span> N <span> I K </span> O H !</h1>
                <h3>LET'S GET YOU <span>ON THE ROAD</span> !</h3>
                <h3>Thank you <span>{signUps.name}</span>  for registering.</h3>

                <p>We are truly glad to have you on board together with all the top-notch mechanics like you.
                   We appreciate your support and we wish you more clients. Let us help one another 
                   through giving  superb services and customer care. 
                   </p>
                   <span className='black'>AND TOGETHER, LET'S GET THEM ON THE ROAD!</span>
                 <br></br> 
               
            </div>
        </div>
      )
    }


export default WelcomeSign;