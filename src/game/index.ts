import { answerSet, gameState, guesses } from "../store"
import { Colors, Colorset, GameState, Peg, PegScore } from "./constants"

export function restartGame() {
  gameState.set(GameState.Playing)
  guesses.set([])
  answerSet.set(generateAnswerSet())
}

export function generateAnswerSet(): Colors[] {
  const answerSet = []
  
  const enumArray = Object.values(Colors).slice(0,5)
  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * enumArray.length)
    answerSet.push(enumArray[index])
  }

  return answerSet
}

export function calculatePegs(guess: Colorset, answer: Colorset): Peg[] {
  const score = calculateScore(guess, answer)
  return generatePegs(score)
}

export function calculateScore(guess: Colorset, answer: Colorset): PegScore {
  let orangePegs = 0
  let whitePegs = 0

  const guessCopy = []
  const answerCopy = []

  for (let i = 0; i < answer.length; i++) {
    if (guess[i] === answer[i]) {
      orangePegs++
    } else {
      guessCopy.push(guess[i])
      answerCopy.push(answer[i])
    }
  }

  for (let i = 0; i < answerCopy.length; i++) {
    for (let j = 0; j < answerCopy.length; j++) {
      if (guessCopy[i] === answerCopy[j]) {
        whitePegs++
        answerCopy[j] = null
        break
      }
    }
  }

  return {
    orange: orangePegs,
    white: whitePegs
  }
}

export function generatePegs(pegScore: PegScore) {
  const pegList: Peg[] = []
  for (let i = 0; i<pegScore.orange; i++) {
    pegList.push(Peg.Orange)
  }
  for (let i = 0; i<pegScore.white; i++) {
    pegList.push(Peg.White)
  }
  for (let i = 0; i<4 - (pegScore.orange + pegScore.white); i++) {
    pegList.push(Peg.Empty)
  }
  return pegList
}

export function getAlertMessage(gameState: GameState) {
  switch (gameState) {
    case GameState.Win:
      return 'You Win'
    case GameState.Lost:
      return 'You Lost'
  }
}