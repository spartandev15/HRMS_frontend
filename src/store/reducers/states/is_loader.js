const initialState = false

const is_loader = (state = initialState, action) => {
     switch(action.type) {
        case "IS_LOADER": return state = action.payload
        default: return state;
     }
}

export default is_loader;