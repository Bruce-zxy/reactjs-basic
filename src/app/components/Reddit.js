import React from 'react'
import PropTypes from 'prop-types'

export const Reddit = ({articles}) => (
  <ul>
    {articles.map((article, i) =>
      <li key={i}>{article.data.title}</li>
    )}
  </ul>
)

Reddit.propTypes = {
  articles: PropTypes.array.isRequired
}
