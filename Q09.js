const baseRange = [1, 100]
const range = [1, 5]
const number = 70
const scale = number / (baseRange[1] - baseRange[0] + 1)
const result = scale * (range[1] - range[0] + 1)

console.log(`${number} in (${baseRange[0]} ~ ${baseRange[1]}) Range is ${result} in (${range[0]} ~ ${range[1]}) Range`)
