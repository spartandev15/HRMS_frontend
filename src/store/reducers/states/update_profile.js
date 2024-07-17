const initialState = {
    profile_photo: ""
}

const update_profile = (state = initialState, action) => {
     switch(action.type) {
        case "UPDATE_PROFILE": return state = action.payload
        default: return state;
     }
}

export default update_profile;