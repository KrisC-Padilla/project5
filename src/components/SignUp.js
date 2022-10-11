import './css/SignUp.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const SignUp = ({dispatch}) => {

    const [nameInput, setNameInput] =useState('')
    const [addressInput, setAdressInput] =useState('')
    const [contactInput, setContactInput] =useState('')
    const [webFbInput, setWebFbInput] =useState('')
        
          return (
            <div className='container-signup'>
                
                <div className='carselect'>
                    <h1>M E K <span> A </span> N <span> I K </span> O H !</h1>
                    <h3>LET'S GET YOU <span>ON THE ROAD</span> !</h3>
                    <p>Please input the following information to register.</p>
        
                    <div className='divselect'>
                        <input placeholder='Mechanic / Shop Name' type='text' value={nameInput} 
                        onChange={e => setNameInput(e.target.value.toUpperCase())}></input>

                        <input placeholder='Address' type='text' value={addressInput} 
                        onChange={e => setAdressInput(e.target.value.toUpperCase())}></input>

                        <input placeholder='Contact Number' type='text' value={contactInput} 
                        onChange={e => setContactInput(e.target.value.toUpperCase())}></input>

                        <input placeholder='Website or FB Page' type='text' value={webFbInput}
                         onChange={e => setWebFbInput(e.target.value.toUpperCase())}></input>
                         
                    </div>   <br></br>  
                    <Link to ='/welcome'>
                    <button   disabled={!nameInput} onClick ={ () => dispatch({ type: 'ADD_MECHANIC_INFO', payload:{name: nameInput, address: addressInput, contactDetails: contactInput, webFb: webFbInput}})}
                    > SUBMIT REGISTRATION </button></Link>  
                                  
                    <br></br>
                   
                    {/* <Link to ='/tipsadvises'><button> TIPS & ADVICES </button></Link> */}
                </div>
            </div>
          )
        }

export default SignUp;