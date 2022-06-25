// ts 引入 js 会报错
// 需要 .d.ts 的类型定义文件
// 一般 声明文件通过 @types/xxx 方式安装

import fs from 'fs'
import path from 'path'
import axios from 'axios'
import cheerio from 'cheerio'

interface CrawlerImg {
  size: string
  title?: string
  src?: string
}

interface CrawlerImgResult {
  time: number
  data: CrawlerImg[]
}

interface Content {
  [propName: number]: CrawlerImg[]
}

// 爬虫类
class Crawler {
  private url = `https://www.emojidaquan.com/common-nature-emojis`
  private filePath = path.resolve(__dirname, '../imgData/imgs.json')
  getImgInfo (html: string) {
    const imgInfos: CrawlerImg[] = []

    const $ = cheerio.load(html)

    const imgUrls = $('.thumbnail')
    imgUrls.map((index, element) => {
      // 名称
      const title = $(element)
        .attr('title')
        ?.split('e')[0]
      // 图片链接
      const img = $(element).find('.lazy')
      const src = img.attr('data-original')

      imgInfos.push({
        size: `${Math.round(Math.random() * 100)}kb`,
        title,
        src
      })
    })
    const result = {
      time: new Date().getTime(),
      data: imgInfos
    }
    return result
  }

  async getRawHtml () {
    const result = await axios.get(this.url)

    return result.data
  }

  generateJsonContent (imgInfo: CrawlerImgResult) {
    let fileContent: Content = {}
    if (fs.existsSync(this.filePath)) {
      fileContent = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
    }
    fileContent[imgInfo.time] = imgInfo.data

    return fileContent
  }

  writeFile (content: string) {
    fs.writeFileSync(this.filePath, content)
  }

  async initSpiderProcess () {
    // 1 获取网站 HTML
    const html = await this.getRawHtml()
    // 2 对HTML的节点进行读取
    const imgInfos = this.getImgInfo(html)
    // 3 生成 存储信息
    const fileContent = this.generateJsonContent(imgInfos)
    // 4 写入json文件
    this.writeFile(JSON.stringify(fileContent))
  }

  constructor () {
    this.initSpiderProcess()
  }
}

const myCrawler = new Crawler()
