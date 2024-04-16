import React, { createContext, useReducer } from "react";
import { initState, reducer_action } from "./reducer";
import { reducer } from "./reducer";
import CompA from "./CompA";
import CompB from "./CompB";

type dataContextType={
  state:typeof initState,
  dispatch:React.Dispatch<reducer_action>
}

export const myContext = createContext<dataContextType>({state:initState,dispatch:()=>undefined});
function App() {
  const[state,dispatch]=useReducer(reducer,initState);

  return (

<myContext.Provider  value={{state,dispatch}}>
<CompA/>
<CompB/>
</myContext.Provider>


     
 

  
    
  )
}

export default App
