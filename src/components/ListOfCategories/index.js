import React, { useEffect, useState } from 'react'
import { Category } from '../Category'

import { Item, List } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const abort = new window.AbortController()

    window.fetch('https://petgram-server-ashen.vercel.app/categories', { signal: abort.signal })
      .then(response => response.json())
      .then(json => {
        setCategories(json)
      })

    return () => {
      abort.abort()
    }
  }, [])

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(({ id, emoji, cover, path }) => (
          <Item key={id}>
            <Category
              emoji={emoji}
              cover={cover}
              path={path}
            />
          </Item>
        ))
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(showFixed)}
    </>
  )
}
