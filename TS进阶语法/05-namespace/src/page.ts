// 命名空间
// 类似模块化开发
// 防止产生更多的全局变量
/// <reference path='./components.ts' />
namespace Home {
  export class Page {
    constructor () {
      new Components.Header()
      new Components.Main()
      new Components.Footer()
    }
  }
}
