import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from '@apollo/client'
import { useQuery } from '@apollo/react-hooks'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId }
  })

  if (loading) {
    return <></>
  } else if (error) {
    return error
  } else {
    const { photos } = data

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
}
