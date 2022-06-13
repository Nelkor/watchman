const getToken = cookie => {
  if (!cookie) {
    return ''
  }

  const match = /token=(\w+)/.exec(cookie)

  return match ? match[1] : ''
}

const getUserByToken = token => {
  const users = {
    '1234': 1,
    'qwerty': 10,
    'zxc': 50,
    'wasd': 100,
  }

  return users[token] || 0
}

export const createRequestData = req => {
  const { headers, method, url } = req
  const token = getToken(headers.cookie)

  headers['x-auth-user'] = getUserByToken(token)

  return { headers, method, url: url.slice(4) }
}
