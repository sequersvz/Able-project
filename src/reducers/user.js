import { userStatus } from "../actions/index"

const user = (state = null, action) => {
  switch (action.type) {
    case userStatus.SIGNED_IN:
      if (
        !action.user.attributes["custom:accountId"] ||
        action.user.attributes["custom:accountId"] === undefined
      ) {
        action.user.attributes["custom:accountId"] = 1
      }
      return { ...state, ...action.user }
    case userStatus.SIGN_IN:
      return null
    case userStatus.SIGN_IN_USERAPI:
      return { ...state, id: action.userApi.id || null }
    default:
      return state
  }
}

export default user
