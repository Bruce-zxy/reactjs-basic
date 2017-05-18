import React from 'react'
import PropTypes from 'prop-types'

export const Reddit = ({articles}) => (
  <ul>
    {articles.map((article, i) =>
      <li key={i}><strong>Title:</strong> {article.data.title}, <strong>Author:</strong> {article.data.author}</li>
    )}
  </ul>
)

Reddit.propTypes = {
  articles: PropTypes.array.isRequired
}
