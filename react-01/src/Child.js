import { memo } from "react";

const Child  = () => {
  console.log("Child Component");
  return (
    <h4>Child Component</h4>
  )
}

export default memo(Child);