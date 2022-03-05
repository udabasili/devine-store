import Cors from 'cors'

function initMiddleware(middleware: { (req: Cors.CorsRequest, res: { statusCode?: number | undefined; setHeader(key: string, value: string): any; end(): any }, next: (err?: any) => any): void; (arg0: any, arg1: any, arg2: (result: any) => void): void }) {
    return (req: any, res: any) =>
      new Promise((resolve, reject) => {
        middleware(req, res, (result: unknown) => {
          if (result instanceof Error) {
            return reject(result)
          }
          return resolve(result)
        })
      })
  }

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  })
)

export default cors