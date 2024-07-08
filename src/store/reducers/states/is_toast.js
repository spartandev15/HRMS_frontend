const initialState = ""

const is_toast = (state = initialState, action) => {
     switch(action.type) {
        case "IS_TOAST": return state = action.payload
        default: return state;
     }
}

export default is_toast;