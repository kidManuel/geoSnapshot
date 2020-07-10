import React from 'react'
import Container from './Container'

const Category = ({ searchTerm }) => {
  return (
    <div>
      <h2>{searchTerm} Pictures</h2>
      <Container searchTerm={searchTerm} />
    </div>
  )
}

export default Category
