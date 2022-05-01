const initialState = []

const subscriptionReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case "SUBSCRIPTIONS_GET_ALL":
            return [...action.payload]
        default:
            return state;
    }
}

export default subscriptionReducer;