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
          <div className="card card-block card-outline-secondary">
            <h2 className="card-title">ListCard Component</h2>
            <p className="card-text">{t}</p>
            {/*<ListCardText text={this.state.everything} />*/}
          </div>
        </div>
      </div>
    )

  }
}

export default ListCard;