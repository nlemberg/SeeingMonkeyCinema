const initialState = []

const memberReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case "MEMBERS_GET_ALL":
            return [...action.payload]
        default:
            return state;
    }
}

export default memberReducer;