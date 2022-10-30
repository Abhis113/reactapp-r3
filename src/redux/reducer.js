import {INC,DEC,ADD_TODO} from  "./actionTypes";

const initialState = {count : 0, todos: []};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case INC:{
            return {
                // count: state.count+1,
                ...state,
                count: state.count + action.payload,
            }
        }
        case DEC:{
            return {
                // count :state.count-1,...state is used for destructuring if there is two variable in initialState
                //...new object is created
                ...state,
                count: state.count - action.payload,
            }
        }
        case ADD_TODO:{
           return{
            ...state,
              todos: [...state.todos,action.payload],
            }
        }
        default:{
            return state;
        }
    }
};
