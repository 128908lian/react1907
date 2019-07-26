import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk";
import home from "./reducers/home"
import user from "./reducers/user"
const reducer = combineReducers({
    home,
    user
})

export default createStore(reducer,applyMiddleware(reduxThunk))