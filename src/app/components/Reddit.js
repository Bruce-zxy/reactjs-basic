import React from 'react'
import PropTypes from 'prop-types'

export const Reddit = ({articles}) => (
  <ul>
    {articles.map((article, i) =>
      <li key={i}><b>Title:</b>{article.data.title}  <b>Author:</b>{article.data.author}</li>
    )}
  </ul>
)

Reddit.propTypes = {
  articles: PropTypes.array.isRequired
}
