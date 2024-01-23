/* eslint-disable react/prop-types */
export default function PreviewButton ({handleClick, currentPage}) {
    return (
        <button onClick={handleClick} className='mainButton'>
            {currentPage === 'forms' ? 'View CV' : 'Go Back'}
      </button>
    )
   
}