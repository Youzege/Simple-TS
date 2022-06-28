// ts 引入 js 会报错
// 需要 .d.ts 的类型定义文件
// 一般 声明文件通过 @types/xxx 方式安装

import fs from 'fs'
import path from 'path'
import axios from 'axios'

interface Analyze {
  analyze: (html: string, filePath: string) => string
}

// 爬虫类
class Crawler {
  private filePath = path.resolve(__dirname, '../imgData/imgs.json')

  private async getRawHtml () {
    const result = await axios.get(this.url)

    return result.data
  }

  private writeFile (content: string) {
    fs.writeFileSync(this.filePath, content)
  }

  private async initSpiderProcess () {
    // 1 获取网站 HTML
    const html = await this.getRawHtml()
    const fileContent = this.analyzer.analyze(html, this.filePath)
    // 4 写入json文件
    this.writeFile(fileContent)
  }

  constructor (private url: string, private analyzer: Analyze) {
    this.initSpiderProcess()
  }
}

export default Crawler
