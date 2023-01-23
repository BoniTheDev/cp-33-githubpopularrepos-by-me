// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {isActive, languageTabItem, activeTabItem} = props

  const {id, language} = languageTabItem

  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'

  const onClickLanguageFilter = () => {
    activeTabItem(id)
  }

  return (
    <li className="btn-list-item">
      <button
        className={btnClassName}
        onClick={onClickLanguageFilter}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
