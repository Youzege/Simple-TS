import fs from 'fs'
import path from 'path'
import { Router, Request, Response, NextFunction } from 'express'
import Crawler from './utils/crawler'
import { EmojiAnalyzer } from './utils/analyzer'
import { getResponseJson } from './utils/util'
import { is } from 'cheerio/lib/api/traversing'

// 问题1 解
interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined
  }
}

const checkLogin = (req: Request, res: Response, next: NextFunction) => {
  const isLogin = req.session ? req.session.login : false
  if (isLogin) {
    next()
  } else {
    res.json(getResponseJson(null, '请先登录'))
  }
}

const router = Router()

router.get('/', (req: Request, res: Response) => {
  const isLogin = req.session ? req.session.login : false
  if (isLogin) {
    res.send(`
    <html>
      <body>
        <a href='/getImg'>爬取数据</a>
        <a href='/showImg'>展示数据</a>
        <a href='/logout'>退出</a>
      </body>
    </html>  
  `)
  } else {
    res.send(`
    <html>
      <body>
        <form method="post" action="/login">
          <input type="password" name="password"/>
          <button>Login</button>
        </form>
      </body>
    </html>  
  `)
  }
})

router.get('/logout', (req: Request, res: Response) => {
  if (req.session) {
    req.session.login = undefined
  }
  res.json(getResponseJson(true))
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { password } = req.body
  const isLogin = req.session ? req.session.login : false
  if (isLogin) {
    res.json(getResponseJson(false, '已经登陆过了'))
  } else {
    if (password === '123' && req.session) {
      req.session.login = true
      res.json(true)
    } else {
      res.json(getResponseJson(false, '登录失败'))
    }
  }
})

router.get('/getImg', checkLogin, (req: RequestWithBody, res: Response) => {
  const url = `https://www.emojidaquan.com/common-nature-emojis`
  const analyzer = EmojiAnalyzer.getInstance()
  new Crawler(url, analyzer)
  res.send(getResponseJson(true))
})

router.get('/showImg', checkLogin, (req: RequestWithBody, res: Response) => {
  try {
    const position = path.resolve(__dirname, '../imgData/imgs.json')
    const result = fs.readFileSync(position, 'utf-8')
    res.json(getResponseJson(JSON.parse(result)))
  } catch (error) {
    res.json(getResponseJson(false, '数据不存在'))
  }
})

export default router
