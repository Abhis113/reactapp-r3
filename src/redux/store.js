import  {legacy_createStore,compose} from "redux"; //after installing reducDevTools import   and its functionality
import {reducer} from "./reducer";


const createComposer = window.__REDUX_DEVTOOLS_EXTENSION__ ||compose;
const store = legacy_createStore(reducer,createComposer());

export {store};