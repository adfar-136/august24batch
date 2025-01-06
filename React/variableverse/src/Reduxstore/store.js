import { combineReducers, createStore } from "redux";
import countReducer from "./reducer";
import colorReducer from "./colorReducer";

const reducer = combineReducers({
    count: countReducer,
    color: colorReducer
})
// store = {count:10,color:{backgroundColor:"red"}}
const store = createStore(reducer);
export default store