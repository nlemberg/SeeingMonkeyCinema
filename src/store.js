import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import employees from "./redux/reducers/employeeReducer"
import employeeLogins from "./redux/reducers/employeeLoginReducer"
import permissions from "./redux/reducers/permissionReducer"
import movies from "./redux/reducers/movieReducer"
import members from "./redux/reducers/memberReducer"
import subscriptions from "./redux/reducers/subscruptionReducer"
import combinedEmployees from "./redux/reducers/combinedEmployeeReducer"


const rootReducer = combineReducers({
    employees,
    employeeLogins,
    permissions,
    movies,
    members,
    subscriptions,
    combinedEmployees,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store