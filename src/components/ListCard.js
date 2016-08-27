import React from 'react';


const ListCard = ({articles}) => {
  return (
    <div className="row">
      <div className="col-sm-6">
        {articles.map((article, index) => {
          return (
            <div key={index}>
              <a href={article.link} target="_blank">
                <div className="card card-block card-outline-secondary">
                  <h4 className="card-title">{article.title}</h4>
                  <p className="card-text">{article.contentSnippet}</p>
                  <p className="card-text">By {article.author}</p>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

ListCard.propTypes = {
  articles: React.PropTypes.array.isRequired
}

export default ListCard;