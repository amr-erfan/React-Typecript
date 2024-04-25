import { store } from '../store/store';
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './counterSlice';
type rootState=ReturnType<typeof store.getState>
type appDispatch=typeof store.dispatch
const CounterView = () => {
    const dispatch=useDispatch();
    const count=useSelector(state=>state.counter.count)
  return (
   <>
   <h1 >count is {count}</h1>
   <button onClick={()=>dispatch(increment(2))} >increase</button>
   <button onClick={()=>dispatch(decrement(2))} >decrease</button>
   </>
  )
}

export default CounterView

function state(state: unknown): number {
  throw new Error('Function not implemented.');
}
