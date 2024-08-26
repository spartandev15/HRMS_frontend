const initialState = {}

const my_profile = (state = initialState, action) => {
     switch(action.type) {
        case "MY_PROFILE": return state = action.payload
        default: return state;
     }
}

export default my_profile;