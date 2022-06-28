import { Router, Request, Response } from 'express'
import Crawler from './crawler'
import { EmojiAnalyzer } from './analyzer'

// 问题1 解
interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined
  }
}

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send(`
    <html>
      <body>
        <form method="post" action="/getImg">
          <input type="password" name="password"/>
          <button>爬取</button>
        </form>
      </body>
    </html>  
  `)
})

router.post('/getImg', (req: RequestWithBody, res: Response) => {
  const { password } = req.body
  if (password === '123') {
    const url = `https://www.emojidaquan.com/common-nature-emojis`

    const analyzer = EmojiAnalyzer.getInstance()

    new Crawler(url, analyzer)
    res.send('crawler is running!')
  } else {
    res.send(`${req.userName} crawler error`)
  }
})

export default router
