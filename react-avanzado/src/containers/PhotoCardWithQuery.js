import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql, useQuery } from '@apollo/client'

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

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id }
  })

  if (loading) {
    return <></>
  } else if (error) {
    return error
  } else {
    const { photo } = data

    return (
      <PhotoCard
        id={photo.id}
        likes={photo.likes}
        src={photo.src}
      />
    )
  }
}
