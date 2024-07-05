const initialState = false

const is_state = (state = initialState, action) => {
     switch(action.type) {
        case "IS_STATE": return state = action.payload
        default: return state;
     }
}

export default is_state;