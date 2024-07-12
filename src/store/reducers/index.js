import { combineReducers } from "redux";
import is_state from "./states/is_state";
import is_toast from "./states/is_toast";
import is_loader from "./states/is_loader";


const rootReducer = combineReducers({
    is_state, is_toast, is_loader
})

export default rootReducer;