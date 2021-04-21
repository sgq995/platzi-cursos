import React from 'react'
import { Category } from '../Category'

import { Item, List } from './styles'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () => {
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
