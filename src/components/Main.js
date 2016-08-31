import React from 'react';
import ReactDOM from 'react-dom';
import getFeed from './helpers';
import ListCard from './ListCard';
import BlogContent from './BlogContent'

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      content: "content"
    }
  }
  componentDidMount(){
    this.init()
  }
  init(){
    var search = document.location.search;
    var myNum = search.split("=").pop();

    getFeed(myNum)
      .then(function(data) {
        console.log(data);
        this.setState({
          articles: data
        })
      }.bind(this))
  }
  handleClick(article){
    this.setState({
      content: article.content
    })
  }
  render() {
    return (
      <div>
        <div className="container">
          <ListCard articles={this.state.articles} onArticleClick={this.handleClick.bind(this)}/>
          <BlogContent content={this.state.content}/>
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);