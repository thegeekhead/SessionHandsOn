import axios from "axios";
import { Component, Fragment } from "react";
import User from "./User.js";
import Test from "./Test.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      userDetails: 0,
      users: [],
      loading: true,
      error: false
    }
  }

  clickhandler = (num) => {
    const { counter: tempCounter } = this.state;
    this.setState({
      counter: tempCounter + num
    })
  }

  changeUserDetails = () => {
    console.log("Clicked");
    const { userDetails: userDetails } = this.state;
    this.setState({
      userDetails: userDetails + 1
    })
  }

  async componentDidMount() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      this.setState({
        users: res.data,
        loading: false,
        error: false
      })
    } catch (err) {
      this.setState({
        users: [],
        loading: false,
        error: true
      })
    }
  }

  render() {
    const { loading, error, users } = this.state;
    return (
      <Fragment>
        <span>Counter: {this.state.counter}</span>
        <button onClick={() => this.clickhandler(1)}>Increment</button>
        <button onClick={() => this.clickhandler(-1)}>Decrement</button>
        <Test num = "1"/>
        <User loading={loading} error={error} users={users} />
      </Fragment>
    )
  }
}

export default App;