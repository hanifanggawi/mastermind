export enum Colors {
    Red = '#FF4571',
    Purple = '#700eb5',
    Yellow = '#FED956',
    Blue = '#2C6CE8',
    Green = '#00EA88',
    White = '#FAFAFA',
    Blank = '#1C1C26',
    Input = '#202033'
}

export enum Peg {
  Orange = 'orange',
  White = 'white',
  Empty = 'empty'
}

export enum GameState {
  Playing,
  Win,
  Lost
}

export type Colorset = Colors[]

export type Guess = {
  colorset: Colorset,
  pegs: Peg[]
}

export type PegScore = {
  orange: number,
  white: number
}

