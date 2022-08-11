import { RESTAURENT_LIST_SUCCESS,RESTAURENT_LIST_FAIL } from "./Constant";


export const restaurentListReducer=(states={restaurent:[]},action)=>{
    console.log(action)
    switch(action.type){
        case RESTAURENT_LIST_SUCCESS:
            return{restaurent:action.payload};
            case RESTAURENT_LIST_FAIL:
                return{restaurent:action.payload}
                default:
                    return states
    }
   

}
// action will contain data
//in the case of success data will be stored in restaurent empty array,fail case empty array will remain itself
//states:empty array