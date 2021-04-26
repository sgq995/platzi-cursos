import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from '@apollo/client'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const PhotoCardWithQuery = () => {
  <PhotoCard />
}
