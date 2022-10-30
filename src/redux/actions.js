import {INC,DEC,ADD_TODO} from "./actionTypes";


export const increment = (value = 1) => ({type : INC,payload: value}); //returning an object here is the syntax ({type:INC})
export const decrement = (value = 1) => ({type : DEC,payload: value}); //returning an object here is the syntax ({type:DEC

export const addTodo = (payload) => ({type:ADD_TODO,payload});