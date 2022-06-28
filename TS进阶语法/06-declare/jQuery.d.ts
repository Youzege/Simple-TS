// TS声明
interface JqueryInstance {
  html: (html: string) => JqueryInstance
}

// 定义全局 变量
// declare var $: (param: () => void) => void

// 定义全局 函数
// 函数重载
declare function $ (readFunc: () => void): void
declare function $ (selector: string): JqueryInstance
// 对对象类型声明，对类的类型定义，命名空间嵌套
// 对象 $
declare namespace $ {
  // 嵌套 fn
  namespace fn {
    // 类 构造函数 init
    class init {}
  }
}

// interface 语法 函数重载
// interface Jquery {
//   (readFunc: () => void): void
//   (selector: string): JqueryInstance
// }
// declare var $: Jquery
