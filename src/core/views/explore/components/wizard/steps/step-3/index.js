import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Grid, Box, Typography, CircularProgress } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { ErrorSearch } from "shared/errors"
import { CardLayout } from "./card"

export const ThirdStep = ({
  toSearch,
  listItemKitchens,
  kitchenSelected,
  setKitchenSelected
}) => {
  const { t } = useTranslation()
  return (
    <>
      <Box
        marginTop={40}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography variant="h4" style={{ color: "#000000" }}>
          {t("wizardForm.stepThree.title")}
        </Typography>
      </Box>

      {toSearch ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop={25}
        >
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <>
          <Box marginTop={10}>
            {/* <ListItemKichensMapped
              listItemKitchens={listItemKitchens}
              kitchenSelected={kitchenSelected}
              setKitchenSelected={setKitchenSelected}
            /> */}
          </Box>
        </>
      )}
    </>
  )
}

const ListItemKichensMapped = ({
  listItemKitchens,
  kitchenSelected,
  setKitchenSelected
}) => {
  const history = useHistory()

  useEffect(() => {
    setKitchenSelected(listItemKitchens[0])
  }, [listItemKitchens, setKitchenSelected])
  if (listItemKitchens.length <= 0) return <ErrorSearch />
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={5}
    >
      {listItemKitchens.map((elem, i) => {
        if (i > 3) {
          return null
        }

        return (
          <Grid
            item
            key={`grid_item_kitchen-${elem.kitchenName}`}
            onClick={() =>
              // setKitchenSelected(
              //   listItemKitchens.filter(a => a.id === elem.id)[0]
              // )
              history.push(`/explore/kitchen/${elem.id}`)
            }
          >
            <CardLayout
              name={elem.kitchenName}
              active={kitchenSelected && kitchenSelected.id === elem.id}
              margin={i === 3}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}
