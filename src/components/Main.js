import React from 'react';
import ReactDOM from 'react-dom';
import ListCard from './ListCard';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <div className="container">
          <ListCard />
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);