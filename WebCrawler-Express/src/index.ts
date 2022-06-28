import express, { Request, Response, NextFunction } from 'express'
import router from './router'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'

// 问题1: express 的类型声明文件 .d.ts 类型描述不准确
// 问题2: 当使用中间件的时候，对req 或者 res 做了修改，实际上类型并不能改变

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(
  cookieSession({
    name: 'session',
    keys: ['youzege'],
    maxAge: 24 * 60 * 60 * 1000
  })
)

// 问题2 中间件
app.use((req: Request, res: Response, next: NextFunction) => {
  req.userName = 'youzege'
  next()
})

app.use(router)

app.listen(3000, () => {
  console.log('服务器启动: http://localhost:3000/')
})
