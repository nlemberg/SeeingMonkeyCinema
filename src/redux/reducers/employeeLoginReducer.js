const initialState = []

const employeeLoginReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case "EMPLOYEE_LOGINS_GET_ALL":
            return [...action.payload]
        default:
            return state;
    }
}

export default employeeLoginReducer;