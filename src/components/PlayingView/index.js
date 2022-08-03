import {ChoiceItem, Image, ChoiceButton} from './StyledComponents'

const PlayingView = props => {
  const {eachChoice, onChoice} = props
  const {id, imageUrl} = eachChoice
  let testid
  const onClickChoice = () => {
    onChoice(id)
  }

  if (id === 'PAPER') {
    testid = 'paperButton'
  } else if (id === 'SCISSORS') {
    testid = 'scissorsButton'
  } else {
    testid = 'rockButton'
  }

  return (
    <ChoiceItem onClick={onClickChoice}>
      <ChoiceButton type="button" data-testid={testid}>
        <Image src={imageUrl} alt={id} />
      </ChoiceButton>
    </ChoiceItem>
  )
}

export default PlayingView
