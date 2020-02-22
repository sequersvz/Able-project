import React from "react"
import { Typography, Box } from "@material-ui/core"
import { InputField } from "./input"

export const BillingDetails = () => {
  return (
    <>
      <Typography variant="body1">Billing Details</Typography>

      <Box marginTop={5} display="flex">
        <Box marginRight={7}>
          <InputField label="Reg. nr." value="2242" />
        </Box>

        <Box>
          <InputField label="Account number" value="1234 4321 0018 2198" />
        </Box>
      </Box>
    </>
  )
}
