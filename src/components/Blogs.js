import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Card from './Card';
import Spinner from './Spinner';

export default function Blogs() {
  // consume
  const {loading, posts} = useContext(AppContext);

  return (
    <div className="w-full max-w-3xl min-h-[60vh] py-16 flex flex-col justify-center items-center gap-y-8 my-16 mx-auto animate-fadeIn">
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/20 blur-2xl opacity-60 -z-10" />
      {
        loading ? (
          <div className="flex flex-col items-center justify-center gap-4 mt-20">
            <Spinner/>
            <span className="text-lg font-semibold text-white/80 animate-pulse">Loading beautiful blogs...</span>
          </div>
        ) : 
          (
            posts.length===0 ? 
            (<div className="text-center text-xl font-bold text-white/70 animate-fadeIn">
              <p>No post found</p>
            </div>) : 
            (
              <div className="w-full flex flex-col gap-8">
                {posts.map((post)=>(<Card post={post} key={post.id}/>))}
              </div>
            ) 
          )
      }
    </div>
  )
}
