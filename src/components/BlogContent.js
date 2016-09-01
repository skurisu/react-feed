import React from 'react';

const BlogContent = ({content, title}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="col-sm-8" dangerouslySetInnerHTML={{__html: content}}>
      </div>
    </div>
  )
}


export default BlogContent;