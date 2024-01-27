/* eslint-disable react/prop-types */
export default function PreviewButton ({handleClick, currentPage, clear}) {
    
    return (
        <div className="buttonContainer">
            <button onClick={handleClick} className='mainButton'>
            {currentPage === 'forms' ? 'View CV' : 'Go Back'}
            </button>
            <button className="clear" onClick={clear}>Clear</button>
        </div>
        
    )
   
}