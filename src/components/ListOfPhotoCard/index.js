import React from 'react'
import { PhotoCard } from '../PhotoCard'

import { gql } from '@apollo/client'
import { useQuery } from '@apollo/react-hooks'

const GET_PHOTOS = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(GET_PHOTOS);

  const photos = loading
    ? []
    : error
      ? []
      : data.photos

  return (
    <ul>
      {photos.map(({ id, likes, src }) =>
        <PhotoCard
          key={id}
          id={id}
          likes={likes}
          src={src}
        />
      )}
    </ul>
  )
}
