import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Pagination(){
  const {page, totalPages, handlePageChange} = useContext(AppContext);

  return (
    <div className="w-full flex justify-center fixed bottom-0 left-0 z-40 bg-glass-gradient backdrop-blur-md shadow-glass border-t border-white/20 animate-fadeIn">
      <div className="flex justify-between items-center w-10/12 max-w-2xl py-3">
        <div className="flex gap-3">
          {page>1 &&
            <button 
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold shadow hover:scale-105 hover:from-secondary hover:to-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/60"
              onClick={()=> handlePageChange(page-1)}>
              Previous
            </button>
          }
          {page < totalPages &&
            <button 
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-secondary to-accent text-white font-bold shadow hover:scale-105 hover:from-accent hover:to-secondary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/60"
              onClick={()=> handlePageChange(page+1)}>
              Next
            </button>  
          }
        </div>
        <p className="text-white/90 font-semibold text-lg drop-shadow animate-fadeIn">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}
