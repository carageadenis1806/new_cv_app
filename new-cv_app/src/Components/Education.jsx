/* eslint-disable react/prop-types */
export default function Education ({handleHighschool, highschool, handleUni, uni}) {
    return (
        <div className="formContainer">
            <h1>Education</h1>
            <form className='form' id='educationForm'>
                <label>Highschool</label>
                <input onChange={handleHighschool} value={highschool} type="text" placeholder='Highschool...' />
                <label>University</label>
                <input onChange={handleUni} value={uni} type="text" placeholder='University' />
            </form>
        </div>
    )
}