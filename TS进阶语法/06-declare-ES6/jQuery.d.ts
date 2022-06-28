// ES6 模块 声明文件
declare module 'jquery' {
  interface JqueryInstance {
    html: (html: string) => JqueryInstance
  }

  function $ (readFunc: () => void): void
  function $ (selector: string): JqueryInstance

  namespace $ {
    namespace fn {
      class init {}
    }
  }

  export = $
}
