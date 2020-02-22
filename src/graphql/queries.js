export const getItemKitchens = `query getItemKitchen($id: ID!){
  getItemKitchen(id: $id){
      id
      owner
      description
      createdAt
      updatedAt
      kitchenName
      cuisineType
      dietaryOptions
      dessert
      location
      organic
      products
      maximumPeople
      minimumPeople
      price
      warmFoods
      lightSalad
      richSalad
      coldCuts
      cheese
      whiteBread
      ryeBread
      tableware
  }
}`;

export const listItemKitchens = `query listItemKitchens($filter: ModelItemKitchenFilterInput, $from: Int, $size: Int){
  listItemKitchens(filter: $filter, from: $from, size: $size){
      id
      owner
      description
      createdAt
      updatedAt
      kitchenName
      cuisineType
      dietaryOptions
      dessert
      location
      organic
      products
      maximumPeople
      minimumPeople
      price
      warmFoods
      lightSalad
      richSalad
      coldCuts
      cheese
      whiteBread
      ryeBread
      tableware
  }
}`;
