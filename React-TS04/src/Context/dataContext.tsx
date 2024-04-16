import React, { ReactElement, createContext } from "react";
import { data } from "./Data";

type childrenType={
    children:React.ReactNode
}
export const dataContext=createContext(data);
export const DataContextProvider=({children}:childrenType):ReactElement=>{
    return (
<dataContext.Provider value={data}>
{children}

</dataContext.Provider>

    )

}