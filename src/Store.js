import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { restaurentListReducer } from "./Reducer"

const reducers = combineReducers({
    restReducer: restaurentListReducer
})
const middleware = [thunk]
const store = createStore(reducers,applyMiddleware(...middleware))
export default store;



//create store used for creating store
//output from the reducer(state) inorder to store this
//thunk to handle deals(middleware)