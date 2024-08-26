import { combineReducers } from "redux";
import is_state from "./states/is_state";
import is_toast from "./states/is_toast";
import is_loader from "./states/is_loader";
import update_profile from "./states/update_profile";
import user_detail from "./states/user_detail";
import my_profile from "./states/my_profile";


const rootReducer = combineReducers({
    is_state, is_toast, is_loader, update_profile, user_detail, my_profile
})

export default rootReducer;