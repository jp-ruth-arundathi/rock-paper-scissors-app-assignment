import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #223a5f;
  padding: 10px;
`

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 90vw;
`

export const ScoreBoard = styled.div`
  border: 1px solid #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 200px;
`

export const Terminology = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Main = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 14px;
`

export const ScoreDisplay = styled.div`
  color: #223a5f;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
`

export const ScoreCount = styled.p`
  font-size: 32px;
  font-family: 'Roboto';
`
export const Image = styled.img`
  width: 120px;
  height: 120px;
`

export const ScoreParagraph = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 18px;
`

export const ChoiceListContainer = styled.div`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-left: 0px;
`

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Text = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
`

export const ResultText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
`

export const PlayButton = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  border: none;
`

export const CustomRulesButton = styled.button`
  color: #223a5f;
  font-family: 'Bree Serif';
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
`

export const ButtonContainer = styled.div`
  text-align: right;
`
export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 10px;
`

export const RulesImage = styled.img`
  width: 200px;
  height: 200px;
`

export const CloseIconContainer = styled.div`
  display: flex;
  justify-content: right;
`
export const RulesImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
