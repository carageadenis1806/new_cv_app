/* eslint-disable react/prop-types */
export default function Experience ({handleJob, job, handlePeriod1, period1, handlePeriod2, period2, handleWrite, write}) {
    return (
        <div className="formContainer">
            <h1>Experience</h1>
            <form className='form' id='experienceForm'>
                <label>Job title</label>
                <input onChange={handleJob} value={job} type="text" placeholder='Job title...' />
                <label>Period</label>
                <div className='date'><p>From</p><input onChange={handlePeriod1} value={period1} type="date"/><p> to </p><input onChange={handlePeriod2} value={period2} type="date"/></div>
                    
                <label>What were some experiences from this job?</label>
                <input onChange={handleWrite} value={write} type="text" id='textbox' placeholder='Write here...' />
            </form>
    </div>
    )
}