import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Card({post}) {
  return (
    <div className="p-6 rounded-2xl shadow-glass bg-glass-gradient backdrop-blur-md border border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-out animate-fadeIn">
      <NavLink to={`/blog/${post.id}`} >
        <span className="text-2xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:underline transition-all duration-200">
          {post.title}
        </span>
      </NavLink>
      <p className="my-1 text-sm text-white/80">
        By <span className="italic font-semibold text-accent">{post.author}</span> on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}> 
            <span className="underline font-bold text-secondary text-xs">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-xs text-white/60 mb-2"> Posted on {post.date} </p>
      <p className="text-justify my-4 text-white/90 leading-relaxed"> {post.content}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}> 
                <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-primary to-secondary text-xs font-bold text-white shadow hover:scale-110 transition-transform duration-200">{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}
