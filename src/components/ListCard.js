import React from 'react';
import getFeed from './helpers';
import ListCardText from './ListCardText';


class ListCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      everything: []
    }
  }
  componentDidMount(){
    this.init()
  }
  init(){
    console.log("init");
    getFeed()
      .then(function(data) {
        console.log("data: ",data);
        this.setState({
          everything: data
        })
      }.bind(this))
  }
  render(){
    var t = JSON.stringify(this.state.everything);
    return (
      <div className="row">
        <div className="col-sm-6">
          {this.state.everything.map((data, index) => {
            return (
              <div key={index}>
                <a href={data.link} target="_blank">
                  <div className="card card-block card-outline-secondary">
                    <h4 className="card-title">{data.title}</h4>
                    <p className="card-text">{data.contentSnippet}</p>
                    <p className="card-text">By {data.author}</p>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    )

  }
}

export default ListCard;