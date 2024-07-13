// Задача №6:

// что будет выведено в консоль?

function great() {
  console.log('Pre greating');
  return 'Hello'
  console.log('Hellllllo there!')
}

function respond() {
  return setTimeout(() => {
    console.log('Pre respond')
    prompt('Hey!')
    console.log('HEYYYYYYY, you’re too slooow')
  }, 1000)
}

great()
respond()

// Решение/Ответ: 






