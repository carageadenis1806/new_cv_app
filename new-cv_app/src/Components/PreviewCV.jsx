import PreviewButton from "./PreviewButton"
import FormsSection from "./FormsSection"

/* eslint-disable react/prop-types */
export default function PreviewCV ({currentPage , handleButtonClick, firstName,lastName,email, number, highschool, uni, job,period1, period2, write}) {

    return (
        <div>
        {currentPage === 'preview' ? (
            <div className='previewContainer'>
                <div>
                    
                    <h1>GENERAL INFORMATION</h1>
                    <p>First name: {firstName}</p>
                    <p>Last name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Phone number: {number}</p>

                    <h1>EDUCATION</h1>
                    <p>Highschool: {highschool}</p>
                    <p>University: {uni}</p>

                    <h1>EXPERIENCE</h1>
                    <p>Job title: {job}</p>
                    <p>Period: From {period1} until {period2}</p>
                    <p>Things learned: {write}</p>
                
                </div>
                <PreviewButton handleClick={handleButtonClick} currentPage={currentPage}/>
            </div>
    ) : (
        <FormsSection currentPage={'forms'} />
    )}
    </div>
    )
}