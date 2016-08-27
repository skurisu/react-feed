import React from 'react';
import ReactDOM from 'react-dom';
import getFeed from './helpers';
import ListCard from './ListCard';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      articles: []
    }
  }
  componentDidMount(){
    this.init()
  }
  init(){
    getFeed()
      .then(function(data) {
        this.setState({
          articles: data
        })
      }.bind(this))
  }
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <div className="container">
          <ListCard articles={this.state.articles} />
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);