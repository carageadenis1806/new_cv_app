/* eslint-disable react/prop-types */
export default function Experience ({handleChange, job, period1, period2, write}) {

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    

    return (
        <div className="formContainer">
            <h1 className="subTitle"><u>Experience</u></h1>
            <form className='form' id='experienceForm' onSubmit={handleSubmit}>
                <label>Job title</label>
                <input name='job'onChange={handleChange} value={job} type="text" placeholder='' />
                <label>Period</label>
                <div className='date'><p>From</p><input className='period1' name='period1' onChange={handleChange} value={period1} type="date"/><p> to </p><input className='period1' name='period2' onChange={handleChange} value={period2} type="date"/></div>
                    
                <label className="experienceLabel">What were some experiences from this job?</label>
                <input name='write' onChange={handleChange} value={write} type="text" id='textbox' placeholder='Write here...' />
            </form>
    </div>
    )
}
