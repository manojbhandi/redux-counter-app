
// import React from 'react'
import {createStore} from 'redux'

//reducer takes current state and action, combines them and returnes new state

const reducer = (state={counter:0}, action)=>{
   if(action.type==="INC"){
    return{counter:state.counter+1}
   }
   if(action.type==="DEC"){
    return{counter:state.counter-1}
   }
   if(action.type==="ADD"){
    return{counter:state.counter-action.payld}
   }

    return state
}

 const store = createStore(reducer)
export default store
