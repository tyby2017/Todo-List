import React, {Component} from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";
import './styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      task: {text: "", id: uniqid()},
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
    this.onClickRemove = this.onClickRemove.bind(this);
  }

  onChangeHandle = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: uniqid(),
      }
    }); 
  }

  onSubmitHandle = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {text: "", id:uniqid()},
    });
  }

 onClickRemove = (e) => {
    const id = e.target.id;
    let array = this.state.tasks;
    const newArray = array.filter(obj => obj.id !== id);
    this.setState({
      tasks: newArray,
    });
 }

  render() {
    return (
      <div id='input-div'>
          <form onSubmit={this.onSubmitHandle}>
          <input type="text" value = {this.state.task.text} onChange={this.onChangeHandle} placeholder='NEW TASK'></input>
          <button type="submit">ADD</button>
        </form>
        <Overview tasks = {this.state.tasks} func = {this.onClickRemove} />
      </div>
    );
  }
}

export default App;