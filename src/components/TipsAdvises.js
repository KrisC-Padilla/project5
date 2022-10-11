import React from 'react'
import './css/TipsAdvises.css'
import { Link } from 'react-router-dom';

const TipsAdvises = () => {
  return (
    <div className='containerTipsAdvises'>

     <div className='deetsSelectWrapper'>
        <div className='deetsandconcern'>
             <h2>TIPS AND TRICKS AND ALL THE NEED-TO-KNOW-HOWS</h2> 
        </div> 
   
        <div className='divCarDiag'>
            <h2> MEK<span>A</span>N<span>IK</span>-OH! </h2>
        </div>
    </div>    

        <div className='showlistselect'>

            <div className='listAddwrapper'>

                <div className='posCauselist'>
                    <h3>CAR CARE 101</h3>
                    <p><span>FEED YOUR CAR THE RIGHT FUEL</span> : Always consult your car's manual or check the inside of your gas flap for the minimum
                       Research Octane  Number (RON) for gasoline and Cetane Number (CN) for diesel. 
                    </p>
                    <p><span>CHANGE OIL REGULARLY</span> : Engine lube is very important to keep your car engine running smoothly. There are 3 types available.
                       Mineral, the most affordable but the fastest to break down. The Semi-synthetic, commonly used by car owners and the Fully-
                       synthetic oil which is the most expensive but lasts the longest. Change the oil at you manufacturer's intended interval.
                    </p>
                    <p><span>CHECK YOUR BRAKE ALWAYS</span> : Perform STOP, LOOK and LISTEN for preliminary checking of your brakes. Always do a visual inspection
                       and make sure your brake pads are still thick. If you hear squeaking sounds, always ask your trusted mechanic and have it serviced.
                    </p>
                    <p><span>KEEP TIRE PRESSURE ALWAYS IN CHECK</span> : Inflate the tires of your car with the right pressure as indicated. Improperly inflated
                    or deflated tires will affect your car's performance and can cause your steering wheel to get a bit heavier and can also consume more fuel.Always 
                    keep in mind that defalted tires can cause irreparable damage to you vehicle. 
                    </p>
                    <p><span>ROTATION IS A MUST</span> : To prolong the life of your tires, perform rotating regularly so that the tire wear will be even. It is also 
                    important to follow manufacturer's recommended tire rotation instructions as per manual.
                    </p>
                    <p><span>SQUEAKY CLEAN</span> : Keep your car clean ALWAYS. A well-maintained ar needs to look the part, so wash it well using your favorite car 
                    shampoo and microfiber cloths. 
                    </p>
                    <p><span>PMS REQUIRED</span> : Never miss out a scheduled PMS or Preventive Maintenance Service. Schedule an appointment after a certain amount
                    of time and distance with your trusted mechanic.
                    </p>
                    <p><span>DRIVE YOUR CAR</span> : Cliche' as it may sound but driving your car is actually a part of maintenance. You need to keep you vehicle's 
                    fluids flowing, stop flat spots from developing and battery is also charging when you drive your car. 
                    </p>
                    <br></br><br></br>
                    <h3>CHECK THIS OUT!</h3> 
                    <p><span  onClick={()=> 
                    window.open("https://www.topgear.com.ph/", "_blank")}>TOP GEAR</span> :Top Gear Philippines is the no. 1 automotive website hee in the Philippines. Best online resource for car reviews, 
                    news and the latest in the automotive industry.
                    </p>
                    <p><span onClick={()=> 
                    window.open("https://www.autodeal.com.ph/", "_blank")}>AUTODEAL</span> : Autodeal is a great site to check for new and used cars in the market. With loans and insurance features
                    and car comparison to name a few. And if you want to sell your beloved car, kinldy visit their site to know more. Happy car huntiing!
                    </p>
                    <p><span onClick={()=> 
                    window.open("https://philkotse.com/", "_blank")}>PHILKOTSE</span> : Another great site to visit if you are planning to buy a car. Complete wtih a list of new and used cars
                     that are being sold, car comparison features and more.
                    </p>
                    <p><span onClick={()=> 
                    window.open("https://www.autoindustriya.com/", "_blank")}>AUTOINDUSTRIYA</span> : A site dedicated to car reviews, features buyer's guide and the latest news when it comes to anything
                    car or motorcylce related. 
                    </p>
                    <p><span onClick={()=> 
                    window.open("https://www.carguide.ph.", "_blank")}>CARGUIDE</span> : CarGuide PH lets you keep up with the latest launches, reviews, prices, news and more about cars here in the 
                    Philippines.
                    </p>
                  
                </div>    
            </div>                        
        </div>
        <div className='bttns'>
        <Link className= 'link' to ='/home'> <button className='backbttn'>GO BACK TO HOME PAGE</button> </Link>
        <Link className= 'link' to ='/diagnosis'><button className='nearbttbn'>CHECK OTHER CONCERNS</button></Link>
        </div>
    </div>
)
}
export default TipsAdvises;