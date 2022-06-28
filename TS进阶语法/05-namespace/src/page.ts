// 命名空间
// 类似模块化开发
// 防止产生更多的全局变量
namespace Home {
  class Header {
    constructor () {
      const elem = document.createElement('div')
      elem.innerText = '顶部.....'
      document.body.appendChild(elem)
    }
  }
  class Main {
    constructor () {
      const elem = document.createElement('div')
      elem.innerText = '内容.....'
      document.body.appendChild(elem)
    }
  }
  class Footer {
    constructor () {
      const elem = document.createElement('div')
      elem.innerText = '底部.....'
      document.body.appendChild(elem)
    }
  }

  export class Page {
    constructor () {
      new Header()
      new Main()
      new Footer()
    }
  }
}
