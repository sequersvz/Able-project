import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import Container from "@material-ui/core/Container"
import SearchIcon from "@material-ui/icons/Search"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import Typography from "@material-ui/core/Typography"

// import MapViewContainer from "../../containers/mapview";
import { connect } from "react-redux"
import SearchResults from "./searchResults"

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
})

const SearchPage = ({ state: { wizard } }) => {
  const classes = useStyles()
  const [localState, setLocalState] = React.useState({
    viewMap: false,
    searchTerm: ""
  })
  return (
    <Container>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={({ target: { value } }) =>
            setLocalState({ ...localState, searchTerm: value })
          }
          value={localState.searchTerm}
        />
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={localState.viewMap}
              onChange={() =>
                setLocalState({
                  ...localState,
                  viewMap: !localState.viewMap
                })
              }
              value={localState.viewMap}
            />
          }
          label="Map View"
        />
      </FormGroup>
      {wizard.listItemKitchens.length < 1 ? (
        <div className={classes.noResult}>
          <Typography>No search results</Typography>
        </div>
      ) : (
        <SearchResults
          kitchens={wizard.listItemKitchens}
          viewMap={localState.viewMap}
          searchTerm={localState.searchTerm}
        />
      )}
    </Container>
  )
}

const mapStateToProps = state => ({
  state
})

// const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(SearchPage)
