export const random = (range: number): number => Math.floor(Math.random() * range)

export function getRandomNumbers (range: number): number[] {
  let numbers = [random(range)]
  let randomNumber = random(range)
  while (randomNumber === numbers[0]) {
    randomNumber = random(range)
  }
  numbers[1] = randomNumber
  return numbers
}
