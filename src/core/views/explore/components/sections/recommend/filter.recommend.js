import React from "react"
import Proptype from "prop-types"

import { Box, Typography } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { RecommendCard } from "../../card/recommend.card"

export const FilterRecommend = ({ listItemKitchens, setKitchenSelected }) => {
  const history = useHistory()
  return (
    <>
      <Typography variant="h6">We recommend you try...</Typography>
      {listItemKitchens && (
        <>
          <Box marginTop={5}>
            {listItemKitchens.map((elem, i) => {
              if (i > 3) {
                return null
              }

              return (
                <RecommendCard
                  key={elem.id}
                  name={elem.kitchenName}
                  marginBottom
                  actionClick={() =>
                    setKitchenSelected(
                      listItemKitchens.filter(a => a.id === elem.id)[0]
                    ) && history.push("explore/kitchen")
                  }
                />
              )
            })}
          </Box>
          {listItemKitchens.length > 4 && (
            <Box>
              <Typography variant="h6" style={{ marginTop: 30 }}>
                These could also be of interest...
              </Typography>
              <Box marginTop={5}>
                {listItemKitchens.map((elem, i) => {
                  if (i <= 3 || i > 6) {
                    return null
                  }
                  return (
                    <RecommendCard
                      key={elem.id}
                      name={elem.kitchenName}
                      marginBottom
                      actionClick={() =>
                        setKitchenSelected(
                          listItemKitchens.filter(a => a.id === elem.id)[0]
                        ) && history.push("explore/kitchen")
                      }
                    />
                  )
                })}
              </Box>
            </Box>
          )}
        </>
      )}
    </>
  )
}

FilterRecommend.propTypes = {
  listItemKitchens: Proptype.arrayOf(
    Proptype.shape({
      id: Proptype.number.isRequired,
      kitchenName: Proptype.string.isRequired
    })
  ).isRequired,
  setKitchenSelected: Proptype.func.isRequired
}
