import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

export default function Home() {

  return (
    <div>
      <Header/>
      <section className="w-full flex flex-col items-center justify-center mt-32 mb-10 animate-fadeIn">
        <div className="relative w-full max-w-2xl text-center px-6 py-12 rounded-3xl bg-glass-gradient backdrop-blur-md shadow-glass border border-white/20">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-slideUp mb-4 drop-shadow-lg">
            Welcome to <span className="underline decoration-accent/60"> Blogs Center</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-medium animate-fadeIn mb-2">
            Discover, read, and share insightful articles on programming, tech, and more.
          </p>
          <p className="text-md text-white/60 animate-fadeIn">
            Enjoy a beautiful, modern reading experience with smooth animations and vibrant gradients.
          </p>
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/20 rounded-full blur-2xl opacity-70 -z-10" />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-accent/30 via-secondary/20 to-primary/20 rounded-full blur-2xl opacity-70 -z-10" />
        </div>
      </section>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-2xl">
          <Blogs/>
        </div>
      </div>
      <Pagination/>
    </div>
  )
}
