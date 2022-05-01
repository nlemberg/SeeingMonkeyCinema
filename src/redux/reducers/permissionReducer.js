const initialState = []

const permissionReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case "PERMISSIONS_GET_ALL":
            return action.payload
        default:
            return state;
    }
}

export default permissionReducer;