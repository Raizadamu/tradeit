/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addLike = /* GraphQL */ `
  mutation AddLike($input: AddLikeInput) {
    addLike(input: $input) {
      id
      title
      price
      owner {
        id
        fullname
        listings {
          nextToken
        }
        cartItem {
          nextToken
        }
        picture {
          url
        }
        likedListings {
          listingID
        }
        createdAt
        updatedAt
        owner
      }
      description
      likes
      images {
        url
      }
      location {
        lat
        lon
      }
      categoryId
      quantity
      carts {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
      id
      fullname
      listings {
        items {
          id
          title
          price
          description
          likes
          categoryId
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      cartItem {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      picture {
        url
      }
      likedListings {
        listingID
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
      id
      fullname
      listings {
        items {
          id
          title
          price
          description
          likes
          categoryId
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      cartItem {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      picture {
        url
      }
      likedListings {
        listingID
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
      id
      fullname
      listings {
        items {
          id
          title
          price
          description
          likes
          categoryId
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      cartItem {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      picture {
        url
      }
      likedListings {
        listingID
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createListing = /* GraphQL */ `
  mutation CreateListing(
    $input: CreateListingInput!
    $condition: ModelListingConditionInput
  ) {
    createListing(input: $input, condition: $condition) {
      id
      title
      price
      owner {
        id
        fullname
        listings {
          nextToken
        }
        cartItem {
          nextToken
        }
        picture {
          url
        }
        likedListings {
          listingID
        }
        createdAt
        updatedAt
        owner
      }
      description
      likes
      images {
        url
      }
      location {
        lat
        lon
      }
      categoryId
      quantity
      carts {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateListing = /* GraphQL */ `
  mutation UpdateListing(
    $input: UpdateListingInput!
    $condition: ModelListingConditionInput
  ) {
    updateListing(input: $input, condition: $condition) {
      id
      title
      price
      owner {
        id
        fullname
        listings {
          nextToken
        }
        cartItem {
          nextToken
        }
        picture {
          url
        }
        likedListings {
          listingID
        }
        createdAt
        updatedAt
        owner
      }
      description
      likes
      images {
        url
      }
      location {
        lat
        lon
      }
      categoryId
      quantity
      carts {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteListing = /* GraphQL */ `
  mutation DeleteListing(
    $input: DeleteListingInput!
    $condition: ModelListingConditionInput
  ) {
    deleteListing(input: $input, condition: $condition) {
      id
      title
      price
      owner {
        id
        fullname
        listings {
          nextToken
        }
        cartItem {
          nextToken
        }
        picture {
          url
        }
        likedListings {
          listingID
        }
        createdAt
        updatedAt
        owner
      }
      description
      likes
      images {
        url
      }
      location {
        lat
        lon
      }
      categoryId
      quantity
      carts {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCartItem = /* GraphQL */ `
  mutation CreateCartItem(
    $input: CreateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    createCartItem(input: $input, condition: $condition) {
      id
      listing {
        id
        title
        price
        owner {
          id
          fullname
          createdAt
          updatedAt
          owner
        }
        description
        likes
        images {
          url
        }
        location {
          lat
          lon
        }
        categoryId
        quantity
        carts {
          nextToken
        }
        createdAt
        updatedAt
      }
      profile {
        id
        fullname
        listings {
          nextToken
        }
        cartItem {
          nextToken
        }
        picture {
          url
        }
        likedListings {
          listingID
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCartItem = /* GraphQL */ `
  mutation UpdateCartItem(
    $input: UpdateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    updateCartItem(input: $input, condition: $condition) {
      id
      listing {
        id
        title
        price
        owner {
          id
          fullname
          createdAt
          updatedAt
          owner
        }
        description
        likes
        images {
          url
        }
        location {
          lat
          lon
        }
        categoryId
        quantity
        carts {
          nextToken
        }
        createdAt
        updatedAt
      }
      profile {
        id
        fullname
        listings {
          nextToken
        }
        cartItem {
          nextToken
        }
        picture {
          url
        }
        likedListings {
          listingID
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCartItem = /* GraphQL */ `
  mutation DeleteCartItem(
    $input: DeleteCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    deleteCartItem(input: $input, condition: $condition) {
      id
      listing {
        id
        title
        price
        owner {
          id
          fullname
          createdAt
          updatedAt
          owner
        }
        description
        likes
        images {
          url
        }
        location {
          lat
          lon
        }
        categoryId
        quantity
        carts {
          nextToken
        }
        createdAt
        updatedAt
      }
      profile {
        id
        fullname
        listings {
          nextToken
        }
        cartItem {
          nextToken
        }
        picture {
          url
        }
        likedListings {
          listingID
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
