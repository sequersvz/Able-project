import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LayoutItemCard from "./layout";

const ListKitchens = ({ kitchens }) => {
  return (
    <Box mt={10}>
      <Grid container spacing={5}>
        {kitchens.map((e, i) => (
          <LayoutItemCard
            key={`item_kitchens_card-${i}`}
            name={e.kitchenName}
            tags={e.products}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ListKitchens;
