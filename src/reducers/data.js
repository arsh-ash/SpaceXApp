import { UPDATE_DATA } from "../Actions/actionTypes"

const initialState={
    spaceXData:[],
}
export default function data(state=initialState,action){
    if(action.type===UPDATE_DATA){
        return{
            ...state,
            spaceXData:action.data,
        }
    }
    return state;

}