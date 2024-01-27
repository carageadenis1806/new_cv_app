/* eslint-disable react/prop-types */
export default function General ({firstName, lastName, email, phoneNumber, handleChange}) {

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    

    return (
        <div className="formContainer">
            <h1 className="subTitle"><u>General information</u></h1>
            <form className='form' id='generalForm' onSubmit={handleSubmit}>
                <label>First name</label>
                <input name='firstName' onChange={handleChange} value ={firstName} type="text" placeholder=''/>
                <label>Last name</label>
                <input name='lastName' onChange={handleChange} value={lastName} type="text" placeholder='' />
                <label>Email</label>
                <input name='email' onChange={handleChange} value={email} type="email" placeholder='example@email.com' />
                <label>Phone number</label>
                <input name='phoneNumber' onChange={handleChange} value={phoneNumber} type="number" placeholder='+40...' />
            </form>
        </div>
        
    )
}