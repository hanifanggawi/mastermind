import { Colors, Colorset, Peg, PegScore } from "./constants"

export function generateAnswerSet(): Colors[] {
  const answerSet = []
  
  const enumArray = Object.values(Colors).slice(0,-1)
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

function calculateScore(guess: Colorset, answer: Colorset): PegScore {
  const guessSet = new Set<Colors>()
  const answerSet = new Set<Colors>(answer)

  let blackPegs = 0
  let whitePegs = 0

  for (let i = 0; i < answer.length; i++) {
    if (guess[i] === answer[i]) {
      blackPegs++
      answerSet.delete(guess[i])
    } else {
      guessSet.add(guess[i])
    }
  }
  for (const color of answerSet) {
    if (guessSet.has(color)) {
      whitePegs++
    }
  }
  return {
    black: blackPegs,
    white: whitePegs
  }
}

function generatePegs(pegScore: PegScore) {
  const pegList: Peg[] = []
  console.log('DISINI pegscore', pegScore)
  for (let i = 0; i<pegScore.black; i++) {
    console.log('DISINI ke run', i , Peg.Black)
    pegList.push(Peg.Black)
  }
  for (let i = 0; i<pegScore.white; i++) {
    pegList.push(Peg.White)
  }
  for (let i = 0; i<4 - (pegScore.black + pegScore.white); i++) {
    pegList.push(Peg.Empty)
  }
  console.log('DISINI pegList', pegList)
  return pegList
}