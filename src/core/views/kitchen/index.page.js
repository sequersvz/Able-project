import React from "react"
import { connect } from "react-redux"
import { KitchenDetails } from "core/views/kitchen/components"
import { useHistory } from "react-router-dom"
// import API from "API"

const KitchenPage = ({ exploreState, exploreState: { kitchenSelected } }) => {
  const history = useHistory()
  return !kitchenSelected ? (
    history.push("/explore")
  ) : (
    <KitchenDetails history={history} exploreState={exploreState} />
  )
}

const mapStateToProps = state => ({
  exploreState: state.explore
})

export default connect(mapStateToProps, null)(KitchenPage)

// Component kitchen fetching by Id, this is a test component

// const fetchKitchen = async id => {
//   const { data } = await API.getItemKitchens(id)
//   return data
// }

// const KitchenPage2 = () => {
//   const history = useHistory()
//   const { id } = useParams()
//   const [kitchenState, setKitchenState] = useState({})
//   const [localState, setLocalState] = useState({ loading: true })
//   const kitchen = useMemo(() => kitchenState, [kitchenState])
//   const handleSetKitchen = useCallback(val => setKitchenState(val), [])
//   const handleLocalState = useCallback(val => setLocalState(val), [])

//   useEffect(() => {
//     const { listItemKitchens, error } = fetchKitchen(id)

//     return listItemKitchens.length > 0
//       ? handleSetKitchen(listItemKitchens[0]) &&
//           handleLocalState({ loading: false })
//       : handleLocalState({ error })
//   }, [id, handleSetKitchen, handleLocalState])

//   // error component e.g case: id is not valid
//   if (localState.error) return null

//   // change null value for a loader component
//   return localState.loading ? null : (
//     <KitchenDetails
//       history={history}
//       exploreState={exploreState}
//       kitchen={kitchen}
//     />
//   )
// }
