import React from 'react'

export const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)



    const nextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav>
            <div className='pagination '>
                <div className="page-item">
                    <a className="page-link"  onClick={prevPage}  href="#" > Previous 
                    </a>
                </div>
                {pageNumbers.map(pgNumber => (
                    <div key={pgNumber} 
                        className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setCurrentPage(pgNumber)}  
                            className='page-link' 
                            href='#'>

                            {pgNumber}
                        </a>
                    </div>
                ))}
                <div className="page-item">
                    <a className="page-link" onClick={nextPage}  href="#"> Next</a>
                </div>
            </div>
        </nav>
    )
}
