const emoji = require('node-emoji')

console.log(emoji.random())


// Formas de uso
// emoji.emojify('I :heart: :coffee:!') // 'I ❤️ ☕️!'

// emoji.find('heart') // { emoji: '❤', name: 'heart' }
// emoji.find('❤️') // { emoji: '❤', name: 'heart' }

// emoji.get('unicorn') // 🦄
// emoji.get(':unicorn:') // 🦄

// emoji.has(':pizza:') // true
// emoji.has('🍕') // true
// emoji.has('unknown') // false

// emoji.random() // { name: 'house', emoji: '🏠' }

// emoji.replace('I ❤️ coffee!', 'love', { preserveSpaces: true }) // 'I love coffee!'

// emoji.search(':uni:') // [ { emoji: '🦄', name: 'unicorn' }, ... ]

// emoji.strip('I ❤️ coffee!') // 'I coffee!'

// emoji.unemojify('🍕 for 💃') // ':pizza: for :dancer:'

// emoji.which('🦄') // 'unicorn'