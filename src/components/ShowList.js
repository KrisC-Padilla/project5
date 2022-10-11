import React, { useState } from 'react'
import './css/ShowList.css'
import { Link } from 'react-router-dom';


const ShowList = ({shops}) => {

    const [mainShop, setMainShop] =useState(shops[0].city);    

    const mainLists = shops.map( shop => {
        return <option value={shop.city}>{shop.city}</option>
    })

    const currentMainShop = shops.find(shop =>shop.city === mainShop) 

    const shopLists = currentMainShop.shopList.map( list => {
        return <option value={list.shopName}>{list.shopName}</option>
    })

    const listChange = (e) =>{
        setMainShop(e.target.value);
      }

    return (
        <div className='containershop'>     
        <div className='showlistselect'>
          <div className='listAddwrapper'>

            <div className='shoplist'>
               <p>Select your area from the list </p>
                  <select name='selectCity' id='selectCity'>
                   {mainLists}
                  </select> 
                <h3>MECHANICS / REPAIR SHOPS</h3>
                <select name='selectCity' id='selectCity'>
                    {shopLists}
                </select> 

               <div>
               <h3>SHOP DETAILS</h3>
                <p>JnDD Car Repair Shop</p>
                <p>155 Boni Ave, Mandaluyong, 1550 Metro Manila</p>
                <p>(02) 654 9592</p>
                <p><span className = 'shop' onClick={()=> 
                window.open("https://www.facebook.com/nettejo/")}>Facebook Page / Website</span>
                </p>
                <p><span className = 'shop' onClick={()=> 
                window.open("https://www.facebook.com/messages/t/523282034827531")}>Send Us a Message</span>
                </p>
                <p><span className = 'shop' onClick={()=> 
                window.open("https://goo.gl/maps/9sv5YSKee9g38vXL8")}>Google Map Link</span>
                </p></div>

            <div className='bttns'>
            <Link className ='link' to ='/home'><button className='backbttn'>HOME</button></Link>
            <Link className ='link' to ='/diagnosis'><button className='otherbttn'>CONCERNS</button></Link>
            </div>
         </div>    
        </div>               
      </div>
   </div>
  )
}
export default ShowList;
