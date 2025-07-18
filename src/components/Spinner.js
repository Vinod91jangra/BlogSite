import React from 'react'

export default function Spinner() {
  return (
    <div className="w-14 h-14 flex items-center justify-center">
      <span className="inline-block w-12 h-12 rounded-full border-4 border-t-transparent border-b-transparent border-l-primary border-r-secondary animate-spin bg-gradient-to-tr from-primary via-secondary to-accent"></span>
    </div>
  )
}
