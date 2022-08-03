import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'

import {
  AppContainer,
  GameContainer,
  ScoreBoard,
  Terminology,
  ChoiceListContainer,
  ScoreDisplay,
  ScoreCount,
  ButtonContainer,
  ResultsContainer,
  CustomRulesButton,
  CloseIconContainer,
  RulesImageContainer,
  ResponsiveContainer,
  Results,
  RulesContainer,
  Image,
  Main,
  ResultText,
  ScoreParagraph,
  RulesImage,
  Text,
  PlayButton,
} from './StyledComponents'

import PlayingView from '../PlayingView'

const initialChoiceList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {
    score: 0,
    choiceList: initialChoiceList,
    selectedChoice: '',
    systemChoice: '',
    played: false,
    resultText: '',
  }

  onChoice = id => {
    const {choiceList} = this.state

    const systemChoiceIndex = Math.floor(Math.random() * 3)
    const systemChoiceItem = choiceList[systemChoiceIndex].id
    this.setState({systemChoice: systemChoiceItem, selectedChoice: id})

    if (id === 'SCISSORS' && systemChoiceItem === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        played: !prevState.played,
        resultText: 'YOU WON',
      }))
    } else if (id === 'PAPER' && systemChoiceItem === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        played: !prevState.played,
        resultText: 'YOU WON',
      }))
    } else if (id === 'ROCK' && systemChoiceItem === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        played: !prevState.played,
        resultText: 'YOU WON',
      }))
    } else if (id === systemChoiceItem) {
      this.setState(prevState => ({
        played: !prevState.played,
        resultText: 'IT IS DRAW',
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        played: !prevState.played,
        resultText: 'YOU LOSE',
      }))
    }
  }

  onClickPlayAgainBtn = () => {
    this.setState(prevState => ({played: !prevState.played}))
  }

  renderGameResult = () => {
    const {selectedChoice, systemChoice, resultText, choiceList} = this.state
    const selectedChoiceIndex = choiceList.findIndex(
      element => element.id === selectedChoice,
    )
    console.log(choiceList[selectedChoiceIndex].id)
    const systemSelectedChoiceIndex = choiceList.findIndex(
      element => element.id === systemChoice,
    )

    return (
      <ResultsContainer>
        <ResponsiveContainer>
          <Results>
            <Text>YOU</Text>
            <Image
              src={choiceList[selectedChoiceIndex].imageUrl}
              alt="your choice"
            />
          </Results>
          <Results>
            <Text>OPPONENT</Text>
            <Image
              src={choiceList[systemSelectedChoiceIndex].imageUrl}
              alt="opponent choice"
            />
          </Results>
        </ResponsiveContainer>
        <ResultText>{resultText}</ResultText>
        <PlayButton type="button" onClick={this.onClickPlayAgainBtn}>
          PLAY AGAIN
        </PlayButton>
      </ResultsContainer>
    )
  }

  render() {
    const {score, played, choiceList} = this.state

    return (
      <AppContainer>
        <GameContainer>
          <ScoreBoard>
            <Terminology>
              <Main>Rock Paper Scissors</Main>
            </Terminology>
            <ScoreDisplay>
              <ScoreParagraph>Score</ScoreParagraph>
              <ScoreCount>{score}</ScoreCount>
            </ScoreDisplay>
          </ScoreBoard>
          {played ? (
            this.renderGameResult()
          ) : (
            <ChoiceListContainer>
              {choiceList.map(eachChoice => (
                <PlayingView
                  eachChoice={eachChoice}
                  key={eachChoice.id}
                  onChoice={this.onChoice}
                />
              ))}
            </ChoiceListContainer>
          )}
          <ButtonContainer>
            <Popup
              trigger={
                <CustomRulesButton
                  type="button"
                  onClick={this.onClickRulesButton}
                >
                  Rules
                </CustomRulesButton>
              }
              position="left center"
            >
              <RulesContainer>
                <CloseIconContainer>
                  <RiCloseLine onClick={this.onClickCloseIcon} />
                </CloseIconContainer>
                <RulesImageContainer>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </RulesImageContainer>
              </RulesContainer>
            </Popup>
          </ButtonContainer>
        </GameContainer>
      </AppContainer>
    )
  }
}

export default Game
