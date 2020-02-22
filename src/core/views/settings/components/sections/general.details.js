import React from "react"
import { Typography, Box } from "@material-ui/core"
import { InputField, InputSelect } from "./input"

export const GeneralDetails = () => {
  return (
    <>
      <Typography variant="body1">General Information</Typography>

      <Box marginTop={5} display="flex">
        <Box marginRight={7}>
          <InputField label="Company name" value="Fakompany Aps" />
          <InputSelect label="Amount of people" value="5-10" />
          <InputSelect
            label="Contact person"
            marginNone
            value="Mikkel Borg Svendsen"
          />
          <Typography variant="caption" style={{ color: "#2A5DAE" }}>
            Show information
          </Typography>
        </Box>

        <Box>
          <InputField label="Address" value="Danneskiold-Samsoes Alle 41" />

          <InputField label="City" value="Kobenhavn K" />

          <InputField label="Zip" value="1434" />
        </Box>
      </Box>
    </>
  )
}
