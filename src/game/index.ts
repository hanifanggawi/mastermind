import { each } from "svelte/internal"
import { Colors, Colorset } from "./constants"

export function generateAnswerSet(): Colors[] {
  const answerSet = []
  
  const enumArray = Object.values(Colors).slice(0,-1)
  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * enumArray.length)
    answerSet.push(enumArray[index])
  }

  return answerSet
}

export function calculateScore(guess: Colorset, anwser: Colorset) {
  const guessSet = new Set<Colors>()
  const answerSet = new Set<Colors>(anwser)

  let blackPegs = 0
  let whitePegs = 0

  for (let i = 0; i < anwser.length; i++) {
    if (guess[i] === anwser[i]) {
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
    blackPegs,
    whitePegs
  }
}