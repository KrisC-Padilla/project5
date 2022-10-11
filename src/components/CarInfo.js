import './css/CarInfo.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CarInfo = ({dispatch}) => {
const [carMakeMod, setCarMakeMod] =useState('');
const [carYear, setCarYear] =useState('');
const [carTransmission, setCarTransmission] =useState('');
const [carFuel, setCarFuel] =useState('');

  return (
    <div className='container'>
        
        <div className='carselect'>
            <h1>M E K <span> A </span> N <span> I K </span> O H !</h1>
            <h3>LET'S GET YOU <span>ON THE ROAD</span> !</h3>

            <div className='divselect'>
                <input placeholder='Car Make / Model' type='text' value={carMakeMod} 
                onChange={e => setCarMakeMod(e.target.value.toUpperCase())}></input>

                <input placeholder='Year' type='number' min='1996' max='2099' step='1' 
                value={carYear} onChange={e => setCarYear(e.target.value.toUpperCase())}></input>

                <input placeholder='Transmission  (AT or MT)' type='text' value={carTransmission} 
                onChange={e => setCarTransmission(e.target.value.toUpperCase())}></input>

                <input placeholder='Fuel Type (Gas or Diesel)' type='text' value={carFuel} 
                onChange={e => setCarFuel(e.target.value.toUpperCase())}></input>
            </div>       
                             
            <br></br>

            <Link to ='/diagnosis'> 
            <button disabled={!carMakeMod} onClick ={ () => dispatch({ type: 'ADD_CAR_INFO', payload:{makeModel: 
            carMakeMod, carYear: carYear, carTransmission: carTransmission, carFuel: carFuel}})}
            > DIAGNOSE MY CAR </button></Link>
           
        </div>
    </div>
  )
}
export default CarInfo;

