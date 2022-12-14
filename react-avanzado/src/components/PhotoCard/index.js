import React from 'react'
import { Article, Button, Img, ImgWrapper } from './styles'

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

import { useLocalStorage } from '../../hooks/use-local-storage'
import { useNearScreen } from '../../hooks/use-near-screen'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const { show, ref } = useNearScreen()

  const KEY = `like-${id}`
  const [liked, setLiked] = useLocalStorage(KEY, false)

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <a href={`?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>

            <Button onClick={() => setLiked(!liked)}>
              <Icon size='32px' /> {likes} likes! MdFavor
            </Button>
          </>
      }
    </Article>
  )
}
