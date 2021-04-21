import React, { useEffect, useRef, useState } from 'react'
import { Article, Button, Img, ImgWrapper } from './styles'

import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries) {
      const isIntersecting = entries[0].isIntersecting
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      } else {
        setShow(false)
      }
    })
    observer.observe(ref.current)
  }, [ref])

  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>

            <Button>
              <MdFavoriteBorder size='32px' /> {likes} likes! MdFavor
            </Button>
          </>
      }
    </Article>
  )
}
