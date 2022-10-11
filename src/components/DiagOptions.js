import React from 'react'
import './css/DiagOptions.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const DiagOptions = ({carInfos, concerns}) => {
 
    const [mainConcern, setMainConcern] =useState(concerns[0].mainConcern);    

//main and sub concern
    const mainConcerns = concerns.map( concern => {
        return <option value={concern.mainConcern}>{concern.mainConcern}</option>
    })

    const currentMainConcern = concerns.find(concern=>concern.mainConcern === mainConcern)

    const subConcerns = currentMainConcern.subConcern.map( concern => {
        return <ul><li>{concern.concern}</li></ul>
    })

    const subReco = currentMainConcern.subConcern.map( concern => {
        return <ul><li>{concern.reco}</li></ul>
    })

      const concernChange = (e) =>{
        setMainConcern(e.target.value);
      }


    return (
        <div className='containerDiagOptions'>

    
            <div className='showlistselect'>
    
                <div className='listAddwrapper'>
        
                    <div className='shopdeets'>
                    <p>DETAILS ||  <span> {carInfos.makeModel} {carInfos.carYear} - {carInfos.carTransmission} - {carInfos.carFuel}</span></p>
                    <h3>CAR DIAGNOSTICS</h3>   

                        <h4>WHAT IS YOUR CONCERN:</h4>
                        <p>Choose one from the dropdown list to begin diagnosis: </p>
                        <select className= 'mainconcern'name='mainconcern' id='mainConcern' onChange={concernChange}>
                            {mainConcerns} 
                        </select>   
                        <h3>POSSIBLE CAUSES:</h3>
                            {subConcerns} 
                        <h3>RECOMMENDATIONS:</h3>
                            {/* {subConcerns}  */}
                   </div>      
                </div>    
            </div>
            
                <div className='bttns'>
                    <Link className ='link' to ='/home'><button className='backbttn'>HOME</button></Link>  
                    <Link className ='link' to ='/lists'><button className='otherbttn'>VIEW RECOMMENDED MECHANICS</button></Link>   
                    <Link className ='link' to ='/diagnosis'><button className='otherbttn' onClick={()=> 
                        window.open("https://iprice.ph/", "_blank")}>CHECK CAR PARTS PRICES</button></Link> 
  
                </div>
            </div>
      )
}
  

export default DiagOptions;