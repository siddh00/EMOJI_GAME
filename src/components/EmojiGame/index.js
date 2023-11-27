/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {isGameProgress: true, topScore: 0, clickedEmojiList: []}

  getRandomEmojiList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  onclickReset = () => {
    this.setState({clickedEmojiList: [], isGameProgress: true})
  }

  runScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const wonResult = clickedEmojiList.length === emojisList.length

    return (
      <WinOrLoseCard
        wonResult={wonResult}
        onclickReset={this.onclickReset}
        score={clickedEmojiList.length}
      />
    )
  }

  finishAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameProgress: false})
  }

  onclickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isEmojiIncludes = clickedEmojiList.includes(id)
    const clickedEmojiLength = clickedEmojiList.length

    if (isEmojiIncludes) {
      this.finishAndSetTopScore(clickedEmojiLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiLength) {
        this.finishAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  runEmojiList = () => {
    const randomEmojiList = this.getRandomEmojiList()

    return (
      <ul className="emoji-list-container">
        {randomEmojiList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            onclickEmoji={this.onclickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameProgress, topScore, clickedEmojiList} = this.state

    return (
      <div className="bg-container">
        <NavBar
          topScore={topScore}
          score={clickedEmojiList.length}
          isGameProgress={isGameProgress}
        />
        <div className="main-container">
          {isGameProgress ? this.runEmojiList() : this.runScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
