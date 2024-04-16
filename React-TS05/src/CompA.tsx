import { useContext } from "react"
import { myContext } from "./App"
import { reducer_action_types } from "./reducer";
const CompA = () => {
    const aContext=useContext(myContext);

  return (
    <div>
        <h1 >aComp state is {aContext.state.count}</h1>
        <button onClick={()=>aContext.dispatch({type:reducer_action_types.INCREASE,value:1})} >increase</button>
        <button onClick={()=>aContext.dispatch({type:reducer_action_types.DECREASE,value:1})} >decrease</button>
        <button onClick={()=>aContext.dispatch({type:reducer_action_types.RESET,value:0})} >reset</button>
 
    </div>
  )
}

export default CompA