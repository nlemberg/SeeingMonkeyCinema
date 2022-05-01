const initialState = []

const employeeReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case "EMPLOYEES_GET_ALL":
            return [...action.payload]
        default:
            return state;
    }
}

export default employeeReducer;