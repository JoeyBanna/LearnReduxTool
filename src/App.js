import {useSelector, useDispatch} from 'react-redux'
import {actions} from './store/index'
function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch =useDispatch();
  const increment=()=>{
    dispatch(actions.increment());
  }
  const decrement =()=>{
    dispatch(actions.decrement());
  }
  const add =()=>{
    dispatch(actions.add(10))
  }
  return (
    <div>
     
     <h1>Counter App</h1>
     <h2>{counter}</h2>
     <button onClick={increment}>Increase</button>
     <button onClick={decrement}>Decrease</button>
     <button onClick={add}>By 10</button>

    </div>
  );
}

export default App;
