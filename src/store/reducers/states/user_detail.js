const initialState = {}

const user_detail = (state = initialState, action) => {
     switch(action.type) {
        case "USER_DETAIL": return state = action.payload
        default: return state;
     }
}

export default user_detail;