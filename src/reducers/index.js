import { combineReducers } from "redux"
import user from "./user"
import explore from "./explore"

const ReducersApp = combineReducers({
  user,
  explore
})

export default ReducersApp
