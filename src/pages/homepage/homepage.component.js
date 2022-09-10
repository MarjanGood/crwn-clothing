import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.componenet';
import  { Route } from 'react-router-dom';

const HomePage=()=>(
    <div className='homepage'>
      <Directory></Directory> 
    </div>


)
export default HomePage;