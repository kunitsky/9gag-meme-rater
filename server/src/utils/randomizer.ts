interface RandomNumbers {
  number1: number,
  number2: number
}

export function getRandomNumbers (): RandomNumbers {
  let number1: number = Math.floor(Math.random() * 10)
  let number2: number = Math.floor(Math.random() * 10)
  if (number1 === number2) {
    number2 = Math.floor(Math.random() * 10)
  }
  return { number1: number1, number2: number2 }
}
