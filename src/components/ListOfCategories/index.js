import React, { useEffect, useState } from 'react'
import { Category } from '../Category'

import { Item, List } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

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

  return (
    <List>
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
}
