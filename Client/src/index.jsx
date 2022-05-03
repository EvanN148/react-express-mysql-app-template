const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {

  componentDidMount() {
    fetch('/fetchRequest')
    .then(response => response.text())
    .then(data => console.log(data));
  }

  render() {
    return (
      <div >
        <h1 >React Project</h1>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'))