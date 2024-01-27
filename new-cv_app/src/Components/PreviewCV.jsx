import PreviewButton from "./PreviewButton"
import FormsSection from "./FormsSection"

/* eslint-disable react/prop-types */
export default function PreviewCV ({currentPage , handleButtonClick, firstName, lastName, email, phoneNumber, highschool, uni, job, period1, period2, write, clear}) {

    return (
        <div className="previewPage">
        {currentPage === 'preview' ? (
            <div className='previewContainer'>
                <div className="info">
                <div className="generalInfo">
                    <h1 className="firstName">{firstName} {lastName}</h1>
                    <div className="emailPhone">
                        <div className="email">Email: {email}</div>
                        <div className="phone">Phone: {phoneNumber}</div>
                    </div>
                </div>
                <div className="workExperience">
                    <h1 className="workTitle">Work Experience</h1>
                    <p className="details" id="job">{job}</p>
                    <p className="details">I have worked here from <span className="period">{period1}</span> until <span className="period">{period2}</span>.</p>
                    <p className="details">Details: {write}</p>
                </div>
                
                <div className="education">
                <h1 className="workTitle">Education</h1>
                    <p className="details">Highschool: {highschool}</p>
                    <p className="details">University: {uni}</p>
                </div>
                </div>
                <PreviewButton handleClick={handleButtonClick} currentPage={currentPage} clear={clear}/>
            </div>
    ) : (
        <FormsSection currentPage={'forms'} />
    )}
    </div>
    )
}