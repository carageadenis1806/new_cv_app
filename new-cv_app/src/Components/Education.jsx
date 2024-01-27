/* eslint-disable react/prop-types */
export default function Education ({handleChange, highschool, uni}) {

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    

    return (
        <div className="formContainer">
            <h1 className="subTitle"><u>Education</u></h1>
            <form className='form' id='educationForm' onSubmit={handleSubmit}>
                <label>Highschool</label>
                <input name='highschool' onChange={handleChange} value={highschool} type="text" placeholder='' />
                <label>University</label>
                <input name='uni'onChange={handleChange} value={uni} type="text" placeholder='' />
            </form>
        </div>
    )
}