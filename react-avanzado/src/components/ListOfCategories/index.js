import React, { useEffect, useState } from 'react'
import { Category } from '../Category'

import { Item, List } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const abort = new window.AbortController()

    setLoading(true)
    window.fetch('https://petgram-server-ashen.vercel.app/categories', { signal: abort.signal })
      .then(response => response.json())
      .then(json => {
        setCategories(json)
        setLoading(false)
      })

    return () => {
      abort.abort()
    }
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()

  const [showFixed, setShowFixed] = useState(false)

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
    <List fixed={fixed}>
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

  if (loading) {
    return (
      'Cargando...'
    )
  } else {
    return (
      <>
        {renderList()}
        {showFixed && renderList(showFixed)}
      </>
    )
  }
}
