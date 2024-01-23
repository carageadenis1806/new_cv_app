import General from "./General"
import Education from "./Education"
import Experience from "./Experience"
import PreviewButton from "./PreviewButton"
import PreviewCV from "./PreviewCV"
import { useState } from "react"

/* eslint-disable react/prop-types */
export default function FormsSection ({currentPage, handleButtonClick}) {

    const [firstName, setFirstname] = useState('');
    const handleChangeFirstname = (e) => {
        setFirstname(e.target.value);
    };

    const [lastName, setLastname] = useState('');
    const handleChangeLastname = (e) => {
        setLastname(e.target.value);
    };

    const [email, setEmail] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const [number, setNumber] = useState('');
    const handleNumber = (e) => {
        setNumber(e.target.value);
    };

    const [highschool, setHighschool] = useState('');
    const handleHighschool = (e) => {
        setHighschool(e.target.value);
    };

    const [uni, setUni] = useState('');
    const handleUni = (e) => {
        setUni(e.target.value);
    };

    const [job, setJob] = useState('');
    const handleJob = (e) => {
        setJob(e.target.value);
    };

    const [period1, setPeriod1] = useState('');
    const handlePeriod1 = (e) => {
        setPeriod1(e.target.value);
    };

    const [period2, setPeriod2] = useState('');
    const handlePeriod2 = (e) => {
        setPeriod2(e.target.value);
    };

    const [write, setWrite] = useState('');
    const handleWrite = (e) => {
        setWrite(e.target.value);
    };
    
    

    return (
        <div>
            {currentPage === 'forms' ? (
            <div className='forms'>
                    <General handleChangeFirstname={handleChangeFirstname} handleChangeLastname={handleChangeLastname} handleEmail={handleEmail} handleNumber={handleNumber}/>
                    <Education handleHighschool={handleHighschool} handleUni={handleUni}/>
                    <Experience handleJob={handleJob} handlePeriod1={handlePeriod1} handlePeriod2={handlePeriod2} handleWrite={handleWrite}/>
                    <PreviewButton handleClick={handleButtonClick} currentPage={currentPage}/>
                </div>
        ) : (
            <PreviewCV currentPage={'preview'} handleButtonClick={handleButtonClick} firstName={firstName} lastName={lastName} email={email} number={number} highschool={highschool} uni={uni} job={job} period1={period1} period2={period2} write={write}/>
        )}
        </div>

    )
}