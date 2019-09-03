import React from 'react';
import './styles/styles.scss';

class App extends React.Component {
  render() {
    return (
      <article className="container">
        <div className="class0">
          <h1>10 x 6 = {10 * 6}</h1>
        </div>
        <div className="class1">
          <h5>&copy; Mafideju</h5>
        </div>
        <div className="class2">
          <h1>2 * 5 = {2 * 5}</h1>
        </div>
        <div className="class3">
          <h5>&copy; Web Sys</h5>
        </div>
      </article>
    )
  }
}

export default App;