import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";
export default function PostDetail(props) {
     const { data } = props
     let { slug } = useParams()
     const checkSlug = () =>{
          return data.filter(post => post.slug === slug)
     }
  return (
    <div>
         <Link to="/">
               <button className="button">Trở về</button>
          </Link>
     {
          checkSlug().map(element => {
               const { level, id, thumbnail_cdn, priority, students_count, description, title } = element
               return (
               <div key={id} className="post-detail">
                    <Helmet>
                         <meta charSet="utf-8" />
                         <title>{title}</title>
                         <meta name="description" content="Helmet application" />
                    </Helmet>
                    <img src={thumbnail_cdn} alt="" />
                    <div className="post-content">
                         <h2 className="post-title">{title}</h2>
                         <p className="post-level">
                              Trình độ: <span>{level}</span>
                         </p>
                         <p className="post-priority">Độ ưu tiên: {priority}</p>
                         <p className="post-detail-desc">Mô tả: {description}</p>
                         <p className="post-student-count">Số người học: {students_count}</p>
                         <button className="button button--primary">Đăng ký học</button>
                    </div>
               </div>
               )
          })
          // <div key={post.id} className="post-detail">
          //      <img src={post.thumbnail_cdn} alt="" />
          //      <div className="post-content">
          //           <h3 className="post-tittle">{post.title}</h3>
          //           <p className="post-level">
          //                Trình độ: <span>{post.level}</span>
          //           </p>
          //           <p className="post-priority">Độ ưu tiên: {post.priority}</p>
          //           <p className="post-detail-desc">Mô tả: {post.description}</p>
          //           <p className="post-student-count">Số người học: {post.students_count}</p>
          //      </div>
          //      <Link to="/">
          //           <button>Trở về</button>
          //      </Link>
          // </div>
     }
    </div>
  )
}
