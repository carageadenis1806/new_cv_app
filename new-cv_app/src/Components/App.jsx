/* eslint-disable react/prop-types */
import './App.css';
import { useState } from 'react';
import FormsSection from './FormsSection';


export default function App () {


        const [currentPage, setCurrentPage] = useState('forms')
        const handleButtonClick = () => {
            
            setCurrentPage(current => (current === 'forms' ? 'preview' : 'forms')); //CALLBACK FUNCTION

            }
         



    return (
       <div className='mainSection'>
        <h1 className='h1title'>CV Generator</h1>
          <FormsSection currentPage={currentPage} setCurrentPage={setCurrentPage} handleButtonClick={handleButtonClick}/>
       </div>
    )
}

