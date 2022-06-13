import { request } from 'http'

import { createRequestData } from './middleware.js'

const BACKEND_PORT = 1337

const pipeOptions = { end: true }

export const requestListener = (req, res) => {
  const { headers, method, url } = createRequestData(req)

  const options = {
    hostname: 'nginx',
    port: BACKEND_PORT,
    path: url,
    method,
    headers,
  }

  const proxy = request(options, proxyRes => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers)

    proxyRes.pipe(res, pipeOptions)
  })

  req.pipe(proxy, pipeOptions)
}
