namespace Components {
  // 可以创建 子命名空间
  export namespace Test {
    class TestA {
      constructor () {}
    }
  }
  // 可以导出 interface
  export interface User {
    name: string
  }

  export class Header {
    constructor () {
      const elem = document.createElement('div')
      elem.innerText = '顶部.....'
      document.body.appendChild(elem)
    }
  }
  export class Main {
    constructor () {
      const elem = document.createElement('div')
      elem.innerText = '内容.....'
      document.body.appendChild(elem)
    }
  }
  export class Footer {
    constructor () {
      const elem = document.createElement('div')
      elem.innerText = '底部.....'
      document.body.appendChild(elem)
    }
  }
}
