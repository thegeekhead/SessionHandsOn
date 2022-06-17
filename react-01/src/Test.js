import { PureComponent } from "react";

class Test extends PureComponent {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextStates) {
    console.log("nextprops ", nextProps);
    console.log("props>>>> ", this.props);
    if (nextProps.num.length === this.props.num.length) {
      return false; //render method will not execute
    }
    return true; //render method will execute
  }
  render() {
    console.log("In render::Child component.");
    return (
      <h1>Test</h1>
    )
  }
}

export default Test;