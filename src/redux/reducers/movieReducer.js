const initialState = []

const movieReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case "MOVIES_GET_ALL":
            return [...action.payload]
        default:
            return state;
    }
}

export default movieReducer;