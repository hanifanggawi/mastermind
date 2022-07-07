export enum Colors {
    Red = '#FF4571',
    Orange = '#FF8801',
    Yellow = '#FED956',
    Blue = '#2C6CE8',
    Green = '#00EA88',
    White = '#FAFAFA',
    Blank = '#1C1C26',
    Input = '#41415f'
}

export enum Peg {
  Black = 'black',
  White = 'white',
  Empty = 'empty'
}

export type Colorset = Colors[]

export type Guess = {
  colorset: Colorset,
  pegs: Peg[]
}

export type PegScore = {
  black: number,
  white: number
}

