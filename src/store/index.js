import{applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"
import reducer from "../reducers"
let store;
export  function storeCreater(){

    store=createStore(reducer,applyMiddleware(thunk))
    return store
}
