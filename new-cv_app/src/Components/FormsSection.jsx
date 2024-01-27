import General from "./General"
import Education from "./Education"
import Experience from "./Experience"
import PreviewButton from "./PreviewButton"
import PreviewCV from "./PreviewCV"
import { useState } from "react"

/* eslint-disable react/prop-types */
export default function FormsSection ({currentPage, handleButtonClick}) {

    const [formData, setFormData] = useState({
        firstName: '', 
        lastName: '', 
        email: '', 
        phoneNumber: '', 
        highschool: '', 
        uni: '', 
        job: '', 
        period1: '', 
        period2: '', 
        write: ''});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
    };

    const clearFunction = () => {
        setFormData({
            firstName: '', 
            lastName: '', 
            email: '', 
            phoneNumber: '', 
            highschool: '', 
            uni: '', 
            job: '', 
            period1: '', 
            period2: '', 
            write: ''
        });
    }
   
    

    return (
        <div className="return">
            {currentPage === 'forms' ? (
            <div className='forms'>
                    <General firstName={formData.firstName} lastName={formData.lastName} email={formData.email} phoneNumber={formData.phoneNumber} handleChange={handleChange}/>
                    <Education highschool={formData.highschool} uni={formData.uni} handleChange={handleChange}/>
                    <Experience job={formData.job} period1={formData.period1} period2={formData.period2} write={formData.write} handleChange={handleChange}/>
                    <PreviewButton handleClick={handleButtonClick} currentPage={currentPage} clear={clearFunction}/>
                </div>
        ) : (
            
            <PreviewCV currentPage={'preview'} 
            handleButtonClick={handleButtonClick} 
            clear={clearFunction}
            firstName={formData.firstName} 
            lastName={formData.lastName}
            email={formData.email}
            phoneNumber={formData.phoneNumber}
            highschool={formData.highschool}
            uni={formData.uni}
            job={formData.job}
            period1={formData.period1}
            period2={formData.period2}
            write={formData.write}
            
             />
        )}
        </div>

    )
}