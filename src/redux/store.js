import { createStore, applyMiddleware , combineReducers} from "redux";
import thunk from "redux-thunk";
import firstReducer from './reducers'
import Muffinsreducer  from "./MuffinsReducer"

const rootReducer  = combineReducers({
  firstReducer: firstReducer,
  muffinsreducer: Muffinsreducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
