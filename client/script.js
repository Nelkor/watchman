const button = document.querySelector('button')
const pElement = document.querySelector('p')

button.addEventListener('click', async () => {
  const response = await fetch('/api/whoami')
  const { userId } = await response.json()

  pElement.innerHTML = userId
    ? `Ты пользователь №${userId}`
    : 'Ты особо никто...'
})
