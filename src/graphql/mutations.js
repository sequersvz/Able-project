export const createItemKitchen = `mutation createItemKitchen($input: CreateItemKitchenInput!){
  createItemKitchen(input: $input){
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

export const deleteItemKitchen = `mutation deleteItemKitchen($input: DeleteItemKitchenInput!){
  deleteItemKitchen(input: $input){
      id
      owner
      description
      createdAt
      updatedAt
      kitchenName
      cuisineType
      dietaryOptions
      dessert
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
export const updateItemKitchen = `mutation updateItemKitchen($input: UpdateItemKitchenInput!){
  updateItemKitchen(input: $input){
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
