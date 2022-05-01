const initialState = []

const combinedEmployeeReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case "COMBINED_EMPLOYEES_GET_ALL":
            return  [...action.payload]
        default:
            return state;
    }
}

export default combinedEmployeeReducer;