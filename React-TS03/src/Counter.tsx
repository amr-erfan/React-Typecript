import React, { useReducer,useState} from 'react'

type childrentype={
    children:(n:number)=>React.ReactNode
}

const initState={
    count:0
}
const enum Reducer_Action_Types{
    INCREASE,
    DECREASE,
    RESET
}

type Reducer_Action={
    type:Reducer_Action_Types,
    value:number
}


let reducer=(state:typeof initState,action:Reducer_Action):typeof initState=>{
    if(action.type==Reducer_Action_Types.INCREASE){
        return {...state,count:state.count+action.value}
    }else if(action.type==Reducer_Action_Types.DECREASE){
        return {...state,count:state.count-action.value}
    }else if (action.type==Reducer_Action_Types.RESET){
        return initState
    }
    return state

}




const Counter = ({children}:childrentype) => {
// const[count,setCount]=useState(0);
const[state,dispatch]=useReducer(reducer,initState);

  return (
    <>
    <h1>{children(state.count)}</h1>
    <div>
        <button onClick={()=>dispatch({type:Reducer_Action_Types.INCREASE,value:1})} >increase</button>

        <button onClick={()=>dispatch({type:Reducer_Action_Types.DECREASE,value:1})}>decrease</button>
   <button onClick={()=>dispatch({type:Reducer_Action_Types.RESET,value:0})} >
    reset
   </button>

    </div>
    </>
  )
}

export default Counter