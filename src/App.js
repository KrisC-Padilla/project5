import './App.css'
import {useReducer} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CarInfo from './components/CarInfo';
import DiagOptions from './components/DiagOptions';
import ShowList from './components/ShowList';
import TipsAdvises from './components/TipsAdvises';
import SignUp from './components/SignUp';
import WelcomeSign from './components/WelcomeSign';



const initialState = {
  carInfo:{ makeModel: '', carYear: 0, carTransmission:'', carFuel: ''},
  signUp:{ name: '', address: '', contactDetails:'', webFb: ''},
  concerns: [
    {
      mainConcern: ' ', 
      subConcern: [ 
        {concern: '',
        reco: ''}
      ]
    }
],

  shops: [
    {
      city: 'PLEASE CHOOSE YOUR AREA', 
      shopList: [ 
        {shopName: ''},
        {shopName: 'IAN PAUL\'S GARAGE'},
        {shopName: 'ELLIE CAR CARE SPECIALIST'},
        {shopName: 'GABE\'S TALYER'},
        {shopName: 'JADEN MECHANICS'},
        {shopName: 'AVA LAVA REPAIR SHOP'},
        {shopName: 'IAN PAUL\'S GARAGE'},
        {shopName: 'ELLIE CAR CARE SPECIALIST'},
        {shopName: 'JnDD Car Repair Shop'},
        {shopName: 'JADEN MECHANICS'}
      ]
    },
    {
      city: 'Marikina', 
      shopList: [ 
        {shopName: 'AVA LAVA REPAIR SHOP'},
        {shopName: 'IAN PAUL\'S GARAGE'},
        {shopName: 'ELLIE CAR CARE SPECIALIST'},
        {shopName: 'GABE\'S TALYER'},
        {shopName: 'JADEN MECHANICS'},
        {shopName: 'AVA LAVA REPAIR SHOP'},
        {shopName: 'IAN PAUL\'S GARAGE'},
        {shopName: 'ELLIE CAR CARE SPECIALIST'},
        {shopName: 'JnDD Car Repair Shop'},
        {shopName: 'JADEN MECHANICS'}
      ]
    },





    {
      city: 'Mandaluyong', 
      shopList: [ 
        {shopName: 'REPAIR SHOP'},
        {shopName: 'TALYER'}
      ]
    },

    {
      city: 'Makati',  
      shopList: [ 
        {shopName: 'KIAKAIAKIAKAIAKAIKAAIKAIA'},
        {
          shopName: 'AKAKAIAKAIAKAIAKAIAKIK', 
          // address: ['123456 BCDEFG Road , Makati City', 'coordinate'],
          // contact: [ '012354', 'link']
        }
      ]
    } ,  
  ]
   
}

const reducer = (state, action)=>{

  switch(action.type) {
    case 'ADD_CAR_INFO':
          return {...state, carInfo:{...action.payload}}

    case 'ADD_MECHANIC_INFO':
      return {...state, signUp:{...action.payload}}

    default: return state;
  }
}
const App = () => {
const [state, dispatch] = useReducer(reducer, initialState);

  return (
  
  
    <div className='App'>
    <nav className='navi'>
    <div className='box'>
      <Link to='home' className='homelink'>Home</Link>
      <Link to='signup'className='homelink'>Sign Up</Link>
      <Link to='lists'className='homelink'>Shop List</Link>
      <Link to='tipsadvises'className='homelink'>Tips and Advices</Link>
      </div>
    </nav>
    

    <Routes>
     <Route path='/' element={<CarInfo dispatch={ dispatch }/>}>home</Route>
      <Route path='/home' element={<CarInfo dispatch={ dispatch }/>}>home</Route>
      <Route path='/diagnosis' element={<DiagOptions carInfos={state.carInfo} concerns={state.concerns}/>}>diagnosis</Route>
      <Route path='/lists' element={<ShowList carInfos={state.carInfo} shops={state.shops}/>}>showlist</Route>      
      <Route path='/tipsadvises' element={<TipsAdvises/>}>tipsandadvises</Route>
      <Route path='/signup' element={<SignUp dispatch={ dispatch }/>}>signup</Route>
      <Route path='/welcome' element={<WelcomeSign signUps={state.signUp}/>}>welcome</Route>
    </Routes>
    </div>
  )
} 

export default App; 
