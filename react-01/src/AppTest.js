import { useState, useEffect, useCallback, useMemo } from "react";
import User from "./User";
import axios from "axios";
import Child from "./Child";

const AppTest = () => {
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [number, setNumber] = useState(1);

  const clickHandler = () => {
    setCounter(counter + 1);
  }

  const demoHandler = useCallback(() => {
    console.log("Testing");
  }, []);

  const fetchUser = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
      setLoading(false);
      setError(false);
    } catch (err) {
      setUsers([]);
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);
  useEffect(() => {
    if (counter === 5) {
      throw new Error();
    }
  }, [counter]);

  const inputHandler = (event) => {
    setNumber(parseInt(event.target.value));
  }

  const result = useMemo(() => factorial(number),[number]);
  console.log("Render>>>>>", result);

  return (
    // <p>Hello from functional conmponent.</p>
    <>
      <input type="text" onChange={inputHandler}/>
      <h4>Number: {number}</h4>
      <Child demoHandler={demoHandler} />
      <h4>Counter: {counter}</h4>
      <button onClick={clickHandler}>Increment</button>
      <User loading={loading} error={error} users={users} />
    </>
  )
};

export default AppTest;

function factorial(n) {
  console.log("Factorial>>>>>>");
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
}