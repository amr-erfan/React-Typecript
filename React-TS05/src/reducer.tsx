export const initState={
    count:0
}

export const enum reducer_action_types{
    INCREASE,
    DECREASE,
    RESET
}
 export type reducer_action={
    type:reducer_action_types,
    value:number
}

export const reducer=(state:typeof initState,action:reducer_action):typeof initState=>{
    if(action.type==reducer_action_types.INCREASE){
        return {...state,count:state.count+action.value}
    }else if(action.type==reducer_action_types.DECREASE){
        return {...state,count:state.count-action.value}
    }else if(action.type==reducer_action_types.RESET) {
        return initState
    }
    return state

}