// private私有变量保护
// 通过getter、setter来进行private属性访问
// _xxx 私有变量
class Person {
  constructor (private _name: string) {}
  get name () {
    return this._name + ' @123'
  }
  set name (name: string) {
    const realName = name.split(' ')[0]
    this._name = realName
  }
}
const personA = new Person('youzege')
console.log(personA.name)
personA.name = 'long'
console.log(personA.name)

// 1. demo 单例模式练习
// 实现 只能实例化一次 class 类
// static 静态属性设置
// static 设置的方法属性，可以直接通过 类调用
// private 设置一个私有变量存储 类
class Demo {
  private static instance: Demo
  private constructor (public name: string) {}

  static getInstance () {
    if (!this.instance) {
      this.instance = new Demo('youzege')
    }
    return this.instance
  }
}
const demoA = Demo.getInstance() // demoA.name -> youzege
const demoB = Demo.getInstance() // demoB.name -> youzege
