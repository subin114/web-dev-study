import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import Box from "./components/Box";

function App() {
  const count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: -5 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "sb", password: "123" } });
  };

  return (
    <>
      <h2>
        id : {id}
        <br />
        pw : {password}
      </h2>
      <button onClick={login}>Login</button>
      <hr />
      <h1>{count}</h1>
      <button onClick={increase}>+5</button>
      <button onClick={decrease}>-5</button>
      <Box />
    </>
  );
}

export default App;
