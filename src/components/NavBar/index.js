import './index.css'

const NavBar = props => {
  const {topScore, isGameProgress, score} = props

  return (
    <nav className="nav-container">
      <div className="title-score-container">
        <div className="title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
            alt="emoji logo"
            className="title-img"
          />
          <h1 className="title-text">Emoji Game</h1>
        </div>
        {isGameProgress && (
          <div className="score-container">
            <p className="score-text">Score: {score}</p>
            <p className="score-text">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
