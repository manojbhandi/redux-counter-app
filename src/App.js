
import { type } from "@testing-library/user-event/dist/type";
import {useSelector, useDispatch} from "react-redux"
function App() {

    const counter = useSelector((state)=> state.counter);
    const dispatch = useDispatch()
    const increament = () => {
      dispatch({type:"INC"})
    }
    const decreament = () => {
      dispatch({type:"DEC"})
    }
    const add = () => {
      dispatch({type:"ADD", payld:10})
    }
  return (
    <div >
      <h2>react-redux-app</h2>
      <h2>{counter}</h2>
      <button onClick={increament}>Increase</button>
      <button onClick={decreament}>Decrease</button>
      <button onClick={add}>Add</button>

    </div>
  );
}

export default App;
