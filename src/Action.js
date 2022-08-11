import { RESTAURENT_LIST_SUCCESS,RESTAURENT_LIST_FAIL } from "./Constant";
import axios from "axios";

export const listRestaurent = ()=> async(dispatch)=>
{
try{
    const { data } = await axios.get("/restaurants.json")
    console.log(data.restaurants)
    dispatch({
        type:RESTAURENT_LIST_SUCCESS,
        payload:data.restaurants
    })
}
catch(err){
    dispatch({
        type:RESTAURENT_LIST_FAIL,
        payload:err
    })
}
}

// dispatch means what is to be triggered`



