/* eslint-disable react/prop-types */
export default function General ({handleChangeFirstname,handleChangeLastname,handleEmail,handleNumber,number, email, firstName, lastName}) {
    return (
        <div className="formContainer">
            <h1>General information</h1>
            <form className='form' id='generalForm'>
                <label>First name</label>
                <input onChange={handleChangeFirstname} value ={firstName} type="text" placeholder='First name...'/>
                <label>Last name</label>
                <input onChange={handleChangeLastname} value ={lastName} type="text" placeholder='Last name...' />
                <label>Email</label>
                <input onChange={handleEmail} value={email} type="email" placeholder='Email...' />
                <label>Phone number</label>
                <input onChange={handleNumber} value={number} type="number" placeholder='Phone number..' />
            </form>
        </div>
        
    )
}