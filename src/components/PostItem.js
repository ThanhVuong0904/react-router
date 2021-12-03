import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react';

export default function PostItem(props) {
     const { data } = props
     
  return (
     <div className="post-list">
          {
               data.map((element)=>{
                    const { thumbnail_cdn, title, description, id, slug } = element
                    return(
                         <Link to={`/course/${slug}`} key={id}>
                              <div className="post-item">
                                   <div className="post-thumb" style={{ backgroundImage: `url(${thumbnail_cdn})` }}></div>
                                   <h2 className="post-title">{title}</h2>
                                   <p className="post-desc">{description}</p>
                              </div>
                         </Link>
                    )
               })
          }
     </div>
  )
}
