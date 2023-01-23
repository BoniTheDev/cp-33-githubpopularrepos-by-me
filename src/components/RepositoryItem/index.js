// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {repoItem} = props

  const {name, starsCount, forksCount, issueCount, imageUrl} = repoItem
  return (
    <li className="each-repo-item">
      <img src={imageUrl} alt={name} className="repo-image" />
      <h1 className="repo-heading">{name}</h1>
      <div className="count-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="icon"
        />
        <p className="count-text">{starsCount} stars</p>
      </div>
      <div className="count-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="icon"
        />
        <p className="count-text">{forksCount} forks</p>
      </div>
      <div className="count-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="icon"
        />
        <p className="count-text"> {issueCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
