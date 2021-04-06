import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Reducer} from "./Reducer/reducers";
import thunk from "redux-thunk";
import {loadState, saveState} from "./loacalstorage";
const rootReducer = combineReducers({
    reducer: Reducer
})
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer,loadState(), applyMiddleware(thunk))

store.subscribe(()=>{
    saveState({
        reducer: store.getState().reducer
    })

})

type AppStoreType = typeof store

