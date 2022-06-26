// 单例模式 拆分emoji网站
import fs from 'fs'
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

export class EmojiAnalyzer {
  private static instance: EmojiAnalyzer

  static getInstance () {
    if (!this.instance) {
      this.instance = new EmojiAnalyzer()
    }
    return this.instance
  }

  private getImgInfo (html: string) {
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

  private generateJsonContent (imgInfo: CrawlerImgResult, filePath: string) {
    let fileContent: Content = {}
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }
    fileContent[imgInfo.time] = imgInfo.data

    return fileContent
  }

  public analyze (html: string, filePath: string) {
    const imgUrlInfo = this.getImgInfo(html)
    const fileContent = this.generateJsonContent(imgUrlInfo, filePath)
    return JSON.stringify(fileContent)
  }

  private constructor () {}
}
