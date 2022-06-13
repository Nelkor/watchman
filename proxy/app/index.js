import { createServer } from 'http'

import { requestListener } from './request-handler.js'

process.on('SIGTERM', () => process.exit(0))

const PROXY_PORT = 8837

const server = createServer(requestListener)

server.listen(PROXY_PORT)
