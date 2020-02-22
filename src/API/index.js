import { API as request, graphqlOperation } from "aws-amplify"
import * as queries from "../graphql/queries"
// import * as mutations from "../graphql/mutations";

const API = {}

API.listItemKitchens = async (filter, from = 0, size = 10) => {
  const resp = await request.graphql(
    graphqlOperation(queries.listItemKitchens, {
      filter,
      from,
      size
    })
  )

  return resp
}

API.getItemKitchens = async id => {
  const resp = await request.graphql(
    graphqlOperation(queries.getItemKitchens, id)
  )

  return resp
}

export default API
