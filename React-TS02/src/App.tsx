import React, { useCallback, useMemo, useState } from "react"
type User={
  id:string,
  username:string,
}

function App() {
  const[count,setCount]=useState<number>(0);
  const[user,setUser]=useState<User[]|null>([]);

 
let increase=useCallback((e:React.MouseEvent<HTMLButtonElement>|React.KeyboardEvent<HTMLButtonElement>):void=>setCount(next=>next+1),[])












type sumFunc=(n:number)=>number
let n:number=100000000;
let sum:sumFunc = (n)=>{
  let mySum=0;

  for(let i=0;i<n;i++){
    mySum+=1;
  }
  return mySum
}
let result=useMemo(()=>sum(n),[n])






return (
    <>
    <button onClick={increase} >increase</button>
    <h1>count is {count}</h1>  
     {/* <h2>result is {}</h2> */}
      
    </>
  )
}

export default App
