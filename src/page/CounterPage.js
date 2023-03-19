import produce from "immer";
import { useReducer, useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change_value_to_add'
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state , action) => {
    switch(action.type){
        case INCREMENT_COUNT:
            state.count = state.count + 1 ;
            return;
        
        case SET_VALUE_TO_ADD:
             state.valueToAdd =action.payload;
             return;

        
        case DECREMENT_COUNT:
            state.count = state.count-1  ;
            return;
        
        case ADD_VALUE_TO_COUNT:
                state.count = state.count + state.valueToAdd;
                state.valueToAdd = 0;
                return;
        
        default:return state;
    }   
   // if(action.type === INCREMENT_COUNT ){
    //    return {...state , count : state.count + 1 }
   // }
    //if(action.type === SET_VALUE_TO_ADD){
    //    return {...state , valueToAdd : action.payload}
   // }
   // return state;
}

function CounterPage({ initialCount }) {
    const [state , dispatch] = useReducer(produce(reducer) , {count : initialCount , valueToAdd : ''})

  const increment = () =>{
    //setCount(count+1)
    dispatch({
        type : INCREMENT_COUNT 
    });
  }
  const decrement = () =>{
    //setCount(count-1)
    dispatch({
        type:DECREMENT_COUNT
    });
  }
  const handleChange = (event)=>{
    const value = parseInt(event.target.value) || 0;
    dispatch({
        type:SET_VALUE_TO_ADD , 
        payload : value
    })
    //setValueToAdd(value);
  }
  const handleSubmit = (event) =>  {
        event.preventDefault();
        dispatch({
            type:ADD_VALUE_TO_COUNT,
        })
      //  setCount(count + valueToAdd)
       // setValueToAdd(0)
  }
  //special case when we use parse int

  return (<Panel className="m-3">
    <h1 className="text-lg">count is {state.count}</h1>
    <div className="flex flex-row">
    <Button onClick={increment}>Increment</Button>
    <Button onClick={decrement}>decrement</Button>
    </div>

    <form onSubmit={handleSubmit}>
        <label>Add a Lot!</label>
        <input value = {state.valueToAdd || ''} onChange={handleChange} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300"/>
        <Button>Add it!</Button>
    </form>

    </Panel>
    
  );
}

export default CounterPage;