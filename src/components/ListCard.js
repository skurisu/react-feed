import React from 'react';


// const ListCard = ({articles}) => {
//   return (
//     <div className="row" onClick={this.props.onClick}>
//       <div className="col-sm-6">
//         {articles.map((article, index) => {
//           return (
//             <div key={index}>
//               <a href={article.link} target="_blank">
//                 <div className="card card-block card-outline-secondary">
//                   <h4 className="card-title">{article.title}</h4>
//                   <p className="card-text">{article.contentSnippet}</p>
//                   <p className="card-text">By {article.author}</p>
//                 </div>
//               </a>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

class ListCard extends React.Component {
  action(article) {
    this.props.onArticleClick(article)
  }

  render(){
    return (
        <div className="col-sm-4">
          <div>
            {this.props.articles.map((article, index) => {
              return (
                <div key={index}>
                  <div href={article.link} target="_blank" onClick={this.action.bind(this,article)}>
                    <div className="card card-block card-outline-secondary">
                      <h4 className="card-title">{article.title}</h4>
                      <p className="card-text">{article.contentSnippet}</p>
                      <p className="card-text">By {article.author}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
  }
}

ListCard.propTypes = {
  articles: React.PropTypes.array.isRequired
}

export default ListCard;