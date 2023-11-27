import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onclickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onclickEmojiBtn = () => {
    onclickEmoji(id)
  }

  return (
    <li className="emoji-container">
      <button type="button" className="emoji-btn" onClick={onclickEmojiBtn}>
        <img alt={emojiName} src={emojiUrl} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
