import './index.css'

const loseImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const winImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {wonResult, onclickReset, score} = props
  const imgUrl = wonResult ? winImg : loseImg
  const gameResult = wonResult ? 'You Won' : 'You Lose'
  const scoreLbl = wonResult ? 'Best Score' : 'Score'

  return (
    <div className="card-container">
      <div className="result-section">
        <h1 className="head-text">{gameResult}</h1>
        <p className="score-text">{scoreLbl}</p>
        <p className="score-num">{score}/12</p>
        <button type="button" onClick={onclickReset} className="play-again-btn">
          Play Again
        </button>
      </div>
      <div className="img-container">
        <img src={imgUrl} alt="win or lose" className="win-or-lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
