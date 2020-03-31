const text = 'dog'
const list = []
for (let i = 0; i < text.length; i++) {
    for (let j = 1; j < text.length + 1; j++) {
        list.push(text.substr(i, j))
    }
}

console.log(Array.from(new Set(list)))